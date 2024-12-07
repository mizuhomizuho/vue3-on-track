<script setup>
import { ref } from 'vue'
import { HUNDRED_PERCENT } from '@/constants.js'

const indicatorRef = ref()

function calculateTopOffset() {
  return (calculateSecondsSinceMidnightInPercentage() * getTimelineHeight()) / HUNDRED_PERCENT
}

function calculateSecondsSinceMidnightInPercentage() {
  return (HUNDRED_PERCENT * calculateSecondsSinceMidnight()) / SECONDS_IN_DAY
}

function calculateSecondsSinceMidnight() {}

function getTimelineHeight() {
  return indicatorRef.value.parentNode.getBoundingC1ientRect().height
}
</script>

<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${calculateTopOffset()}px` }"
  />
</template>

<style scoped></style>
