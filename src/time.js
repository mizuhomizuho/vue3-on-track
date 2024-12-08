import { computed, ref } from 'vue'
import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECONDS,
  SECONDS_IN_DAY,
  SECONDS_IN_HOUR,
} from '@/constants.js'

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))
const secondsSinceMidnight = computed(() => (now.value - midnight.value) / MILLISECONDS_IN_SECONDS)
let currentDateTimer = null

export function today() {
  return new Date()
}

export function tomorrow() {
  const tomorrow = today()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow
}

export function isToday(date) {
  return date.toDateString() === today().toDateString()
}

export function toSeconds(millisecond) {
  return Math.round(millisecond / MILLISECONDS_IN_SECONDS)
}

export const now = ref(today())

export const secondsSinceMidnightInPercentage = computed(() => {
  return (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
})

export function startCurrentDateTimer() {
  now.value = today()
  currentDateTimer = setInterval(() => (now.value = today()), MILLISECONDS_IN_SECONDS)
}

export function stopCurrentDateTimer() {
  clearInterval(currentDateTimer)
}

export function endOfIdleHour(date) {
  const endOfHour = new Date(date)
  endOfHour.setTime(endOfHour.setTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECONDS)
  endOfHour.setMinutes(0, 0, 0)
  return endOfHour
}
