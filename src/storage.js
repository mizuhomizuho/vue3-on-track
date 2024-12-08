import { APP_NAME } from '@/constants.js'
import { endOfIdleHour, isToday, today, toSeconds } from '@/time.js'
import { activeTimelineItem, timelineItems } from '@/timeline-items.js'
import { activities } from '@/activities.js'
import { startTimelineItemTimer, stopTimelineItemTimer } from '@/timeline-item-timer.js'

export function syncState(shouldLoad = true) {
  shouldLoad ? loadState() : saveState()
  if (activeTimelineItem.value) {
    shouldLoad
      ? startTimelineItemTimer(activeTimelineItem.value)
      : stopTimelineItemTimer(activeTimelineItem.value)
  }
}

function loadState() {
  const serializedState = localStorage.getItem(APP_NAME)
  const state = serializedState ? JSON.parse(serializedState) : {}
  activities.value = state.activities || activities.value
  const lastActiveAt = new Date(state.lastActiveAt)
  timelineItems.value = isToday(lastActiveAt)
    ? syncIdleSeconds(state.timelineItems, lastActiveAt)
    : timelineItems.value
}

function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today(),
    }),
  )
}

function syncIdleSeconds(timelineItems, lastActiveAt) {
  const activeTimelineItem = timelineItems.find(({ isActive }) => isActive)
  if (activeTimelineItem) {
    activeTimelineItem.activitySeconds += calculateIdleSeconds(lastActiveAt)
  }
  return timelineItems
}

function calculateIdleSeconds(lastActiveAt) {
  return lastActiveAt.getHours() === today().getHours()
    ? toSeconds(today() - lastActiveAt)
    : toSeconds(endOfIdleHour(lastActiveAt) - lastActiveAt)
}
