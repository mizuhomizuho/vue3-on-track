import { HOURS_ID_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from '@/constants.js'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTheTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_ID_DAY
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return typeof value === 'number' && typeof label === 'string'
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTheTimelineItemValid)
}
