<script setup>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, MILLISECONDS_IN_SECONDS } from '@/constants.js'
import BaseButton from '@/components/BaseButton.vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline/index.js'
import { isNumber } from '@/validators.js'
import { formatSeconds } from '../functions.js'

defineProps({
  seconds: {
    default: 0,
    type: Number,
    validator: isNumber,
  },
})
</script>

<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER">
      <ArrowPathIcon class="h-8" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-zinc-500 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton :type="BUTTON_TYPE_WARNING">
      <PauseIcon class="h-8" />
    </BaseButton>
    <BaseButton :type="BUTTON_TYPE_SUCCESS">
      <PlayIcon class="h-8" />
    </BaseButton>
  </div>
</template>

<style scoped></style>
