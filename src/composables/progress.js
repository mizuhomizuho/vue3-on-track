import { computed } from 'vue'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.js'
import { calculateActivityCompletionPercentage } from '@/activities.js'
import { getProgressColorClass } from '@/functions.js'

export function useProgress(activity) {
  const colorClass = computed(() => getProgressColorClass(percentage.value))
  const percentage = computed(() =>
    calculateActivityCompletionPercentage(activity, trackedActivitySeconds.value),
  )
  const trackedActivitySeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity),
  )
  return {
    colorClass,
    percentage,
    trackedActivitySeconds,
  }
}
