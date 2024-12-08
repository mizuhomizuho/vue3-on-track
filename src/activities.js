import { computed, ref } from 'vue'
import { HUNDRED_PERCENT } from '@/constants.js'

export const activities = ref([])
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))
export const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete),
)

const totalActivitySecondsToComplete = computed(() => {
  return trackedActivities.value
    .map(({ secondsToComplete }) => secondsToComplete)
    .reduce((total, seconds) => total + seconds, 0)
})

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

export function calculateCompletionPercentage(totalTrackedSeconds) {
  return Math.floor((totalTrackedSeconds * HUNDRED_PERCENT) / totalActivitySecondsToComplete.value)
}

function generateActivitySelectOptions(activities) {
  return activities.map((activities) => ({
    value: activities.id,
    label: activities.name,
  }))
}
