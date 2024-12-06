<script setup>
import { computed } from 'vue'
import { formatSeconds, getProgressColorClass } from '@/functions.js'
import { calculateTrackedActivitySeconds } from '../timeline-items.js'
import { isActivityValid } from '@/validators.js'
import { calculateActivityCompletionPercentage } from '@/activities.js'

// const props = defineProps(['activity'])
const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})
const percentage = computed(() =>
  calculateActivityCompletionPercentage(props.activity, calculateTrackedActivitySeconds(props.activity)),
)
</script>

<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="getProgressColorClass(percentage)" :style="`width: ${percentage}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ percentage }}%</span>
      <span>
        {{ formatSeconds(calculateTrackedActivitySeconds(activity)) }}
        / {{ formatSeconds(activity.secondsToComplete) }}
      </span>
    </div>
  </li>
</template>

<style scoped></style>
