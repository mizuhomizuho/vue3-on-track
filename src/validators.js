import { BUTTON_TYPES, HOURS_ID_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from '@/constants.js'

export function isPageValid(page) {
  return NAV_ITEMS.some(navItem => navItem.page === page)
}

export function isNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_ID_DAY - 1)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function isActivityValid({ id, name, secondsToComplete }) {

  if (isNull(id)) {
    return true
  }

  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isNumber(value) {
  return typeof value === 'number'
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export function validateActivitySelectOptions(activitySelectOptions) {
  return activitySelectOptions.every(isSelectOptionValid)
}

export function isUndefined(value) {
  return value === undefined
}

export function isNull(value) {
  return value === null
}

function isSelectOptionValid({ value, label }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isString(value) {
  return typeof value === 'string'
}
