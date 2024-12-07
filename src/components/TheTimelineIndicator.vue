<script setup>
import { computed, onActivated, onDeactivated, ref } from 'vue'
import { HUNDRED_PERCENT } from '@/constants.js'
import { secondsSinceMidnightInPercentage, startTimer, stopTimer } from '@/time.js'

const indicatorRef = ref()
const topOffset = computed(() => {
  return (secondsSinceMidnightInPercentage.value * getTimelineHeight()) / HUNDRED_PERCENT
})

function getTimelineHeight() {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height
}

onActivated(startTimer)
onDeactivated(stopTimer)
</script>

<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  />
</template>

<style scoped></style>
