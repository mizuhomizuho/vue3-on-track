import { APP_NAME } from '@/constants.js'
import { isToday, today } from '@/time.js'
import { timelineItems } from '@/timeline-items.js'
import { activities } from '@/activities.js'

export function loadState() {
  const serializedState = localStorage.getItem(APP_NAME)
  const state =  serializedState ? JSON.parse(serializedState) : {}
  timelineItems.value = isToday(new Date(state.data)) ? state.timelineItems : timelineItems.value
  activities.value = state.activities || activities.value
}

export function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      data: today(),
    }),
  )
}
