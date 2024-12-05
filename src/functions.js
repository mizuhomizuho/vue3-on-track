import { HOURS_ID_DAY, MIDNIGHT_HOUR, PAGE_TIMELINE, SECONDS_IN_HOVER } from '@/constants'
import { isNull, isPageValid } from '@/validators.js'

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : + value
}

export function normalizePageHash() {
  const page = location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateActivities() {
  return ['Coding', 'Reading', 'Training',].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOVER,
  }))
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_ID_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: null,
    })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activities) => ({
    value: activities.id,
    label: activities.name,
  }))
}
