import { computed } from 'vue'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.js'
import { calculateCompletionPercentage, trackedActivities } from '@/activities.js'
import { getProgressColorClass } from '@/functions.js'

export function useTotalProgress() {
  const colorClass = computed(() => getProgressColorClass(percentage.value))
  const totalTrackedSeconds = computed(() => {
    return trackedActivities.value
      .map((activity) => {
        return Math.min(
          calculateTrackedActivitySeconds(timelineItems.value, activity),
          activity.secondsToComplete,
        )
      })
      .reduce((total, seconds) => {
        return total + seconds
      }, 0)
  })
  const percentage = computed(() => {
    return calculateCompletionPercentage(totalTrackedSeconds.value)
  })
  return {
    colorClass,
    percentage,
  }
}
