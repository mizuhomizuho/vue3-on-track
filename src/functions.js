import {
  HOURS_ID_DAY,
  MIDNIGHT_HOUR, MILLISECONDS_IN_SECONDS,
  MINUTE_IN_HOVER,
  PAGE_TIMELINE,
  SECONDS_IN_HOVER,
  SECONDS_IN_MINUTE
} from '@/constants'
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

export function generatePeriodSelectOptions(periodsInMinutes) {

  return periodsInMinutes.map((periodInMinutes) => ({
      value: periodInMinutes * SECONDS_IN_MINUTE,
      label: generatePeriodSelectOptionsLabel(periodInMinutes),
  }))
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hours = Math.floor(periodInMinutes / MINUTE_IN_HOVER).toString().padStart(2, 0)
  const minutes = (periodInMinutes % MINUTE_IN_HOVER).toString().padStart(2, 0)
  return `${hours}:${minutes}`
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
      activitySeconds: 0,
    })
  }
  return timelineItems
}

export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECONDS)
  const utc = date.toUTCString()
  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activities) => ({
    value: activities.id,
    label: activities.name,
  }))
}
