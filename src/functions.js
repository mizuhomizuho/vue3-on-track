import {
  HUNDRED_PERCENT,
  LOW_PERCEWNT,
  MEDIUM_PERCEWNT,
  MILLISECONDS_IN_SECONDS,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE,
} from '@/constants'
import { isNull } from '@/validators.js'

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = [15, 30, 45, 60, 75]
  return periodsInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodInMinutes),
  }))
}

export function getProgressColorClass(percentage) {
  if (percentage < LOW_PERCEWNT) return 'bg-red-500'
  if (percentage < MEDIUM_PERCEWNT) return 'bg-yellow-500'
  if (percentage < HUNDRED_PERCENT) return 'bg-blue-500'
  return 'bg-green-500'
}

export function formatSecondsWithSing(seconds) {
  return `${seconds >= 0 ? '+' : '-'}${formatSeconds(seconds)}`
}

export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECONDS)
  const utc = date.toUTCString()
  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hours = Math.floor(periodInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0)
  return `${hours}:${minutes}`
}
