import { ref, watchEffect } from 'vue'
import { MILLISECONDS_IN_SECONDS } from '@/constants.js'
import { activeTimelineItem, updateTimelineItem } from '@/timeline-items.js'
import { now } from '@/time.js'


export const timelineItemTimer = ref(false)

export function startTimelineItemTimer(timelineItem) {
  updateTimelineItem(timelineItem, { isActive: true })
  timelineItemTimer.value = setInterval(() => {
    updateTimelineItem(timelineItem, {
      activitySeconds: timelineItem.activitySeconds + 1,
    })
  }, MILLISECONDS_IN_SECONDS)
}

export function stopTimelineItemTimer(timelineItem) {
  updateTimelineItem(timelineItem, { isActive: false })
  clearInterval(timelineItemTimer.value)
  timelineItemTimer.value = false
}

export function resetTimelineItemTimer(timelineItem) {
  updateTimelineItem(timelineItem, { activitySeconds: 0 })
  stopTimelineItemTimer(timelineItem)
}

watchEffect(() => {
  if (activeTimelineItem.value && activeTimelineItem.value.hour !== now.value.getHours()) {
    stopTimelineItemTimer(activeTimelineItem.value)
  }
})
