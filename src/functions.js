import { MILLISECONDS_IN_SECONDS, MINUTE_IN_HOVER, SECONDS_IN_MINUTE } from '@/constants'
import { isNull } from '@/validators.js'

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function currentHour() {
  return new Date().getHours()
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = [15, 30, 45, 60, 75]
  return periodsInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodInMinutes),
  }))
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hours = Math.floor(periodInMinutes / MINUTE_IN_HOVER)
    .toString()
    .padStart(2, 0)
  const minutes = (periodInMinutes % MINUTE_IN_HOVER).toString().padStart(2, 0)
  return `${hours}:${minutes}`
}

export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECONDS)
  const utc = date.toUTCString()
  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}
