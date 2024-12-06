import { computed, ref } from 'vue'
import { HUNDRED_PERCENT, SECONDS_IN_HOVER } from '@/constants.js'
import { id } from '@/functions.js'

export const activities = ref(generateActivities())
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))
export const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete),
)

export function createActivity(activity) {
  activities.value.push(activity)
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}

export function calculateActivityCompletionPercentage({ secondsToComplete }, trackedSeconds) {
  return Math.floor((trackedSeconds * HUNDRED_PERCENT) / secondsToComplete)
}

function generateActivities() {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOVER,
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map((activities) => ({
    value: activities.id,
    label: activities.name,
  }))
}
