import { HOURS_ID_DAY, MIDNIGHT_HOUR, PAGE_TIMELINE, SECONDS_IN_HOVER } from '@/constants'
import { isPageValid } from '@/validators.js'

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
  return [
    {
      id: id(),
      name: 'Coding',
      secondsToComplete: 0 * SECONDS_IN_HOVER,
    },
    {
      id: id(),
      name: 'Reading',
      secondsToComplete: 1 * SECONDS_IN_HOVER,
    },
    {
      id: id(),
      name: 'Training',
      secondsToComplete: 2 * SECONDS_IN_HOVER,
    },
  ]
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let i = MIDNIGHT_HOUR; i < HOURS_ID_DAY; i++) {
    timelineItems.push({ hour: i })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activities) => ({
    value: activities.id,
    label: activities.name,
  }))
}
