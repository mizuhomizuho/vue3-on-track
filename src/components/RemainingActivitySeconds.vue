<script setup>
import { isActivityValid } from '@/validators.js'
import { formatSeconds } from '@/functions.js'
import { computed } from 'vue'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timeline-items.js'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})
const classes = computed(() => [
  'flex items-center rounded px-2 font-mono text-xl',
  remainingSeconds.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600',
])
const seconds = computed(() => `${sign.value}${formatSeconds(remainingSeconds.value)}`)
const sign = computed(() => (remainingSeconds.value >= 0 ? '+' : '-'))
const remainingSeconds = computed(
  () =>
    calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
    props.activity.secondsToComplete,
)
</script>

<template>
  <div :class="classes">
    {{ seconds }}
  </div>
</template>

<style scoped></style>
