<script setup>
import { isHourValid } from '@/validators.js'
import { currentHour } from '@/functions.js'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid,
  },
})
const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg',
  props.hour === currentHour()
    ? 'bg-purple-900 font-bold text-white'
    : 'bg-gray-100 text-gray-500',
]
const formatedHour = `${props.hour.toString().padStart(2, 0)}:00`
</script>

<template>
  <a href="#" :class="classes"> {{ formatedHour }} </a>
</template>
