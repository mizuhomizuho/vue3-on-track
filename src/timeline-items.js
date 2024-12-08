import { computed, ref, watch } from 'vue'
import { MIDNIGHT_HOUR } from '@/constants.js'
import { endOfIdleHour, isToday, now, today, toSeconds } from '@/time.js'
import { stopTimelineItemTimer } from '@/timeline-item-timer.js'

export const timelineItemRefs = ref([])

export const timelineItems = ref([])

export const activeTimelineItem = computed(() =>
  timelineItems.value.find(({ isActive }) => isActive),
)

watch(now, (after, before) => {
  if (activeTimelineItem.value && activeTimelineItem.value.hour !== after.getHours()) {
    stopTimelineItemTimer()
  }
  if (before.getHours() !== after.getHours() && after.getHours() === MIDNIGHT_HOUR) {
    resetTimelineItems()
  }
})

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function calculateTrackedActivitySeconds(timelineItems, activity) {
  return filterTimelineItemsByActivity(timelineItems, activity)
    .map(({ activitySeconds }) => activitySeconds)
    .reduce((total, seconds) => Math.round(total + seconds), 0)
}

export function resetTimelineItemActivities(timelineItems, activity) {
  filterTimelineItemsByActivity(timelineItems, activity).forEach((timelineItem) =>
    updateTimelineItem(timelineItem, {
      activityId: null,
      activitySeconds:
        timelineItems.hour === today().getHours() ? timelineItems.activitySeconds : 0,
    }),
  )
}

export function initializeTimelineItems(state) {
  const lastActiveAt = new Date(state.lastActiveAt)
  timelineItems.value = state.timelineItems ?? timelineItems.value
  if (activeTimelineItem.value && isToday(lastActiveAt)) {
    syncIdleSeconds(lastActiveAt)
  } else if (state.timelineItems && !isToday(lastActiveAt)) {
    resetTimelineItems()
  }
}

export function scrollToCurrentHour(isSmooth = false) {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  scrollToHour(today().getHours(), isSmooth)
}

export function scrollToHour(hour, isSmooth = true) {
  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el
  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}

function syncIdleSeconds(lastActiveAt) {
  updateTimelineItem(activeTimelineItem.value, {
    activitySeconds: activeTimelineItem.value.activitySeconds + calculateIdleSeconds(lastActiveAt),
  })
}

function calculateIdleSeconds(lastActiveAt) {
  return lastActiveAt.getHours() === today().getHours()
    ? toSeconds(today() - lastActiveAt)
    : toSeconds(endOfIdleHour(lastActiveAt) - lastActiveAt)
}

function filterTimelineItemsByActivity(timelineItems, { id }) {
  return timelineItems.filter(({ activityId }) => activityId === id)
}

function resetTimelineItems() {
  timelineItems.value.forEach((timelineItem) =>
    updateTimelineItem(timelineItem, {
      activitySeconds: 0,
      isActive: false,
    }),
  )
}

// function generateTimelineItems() {
//   return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
//     hour,
//     activityId: null,
//     activitySeconds: 0,
//     isActive: false,
//   }))
// }
