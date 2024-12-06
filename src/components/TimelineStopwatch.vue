<script setup>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  MILLISECONDS_IN_SECONDS,
} from '@/constants.js'
import BaseButton from '@/components/BaseButton.vue'
import { isTimelineItemValid } from '@/validators.js'
import { currentHour, formatSeconds } from '../functions.js'
import { ref, watch } from 'vue'
import { updateTimelineItem } from '@/timeline-items.js'
import BaseIcon from '@/components/BaseIcon.vue'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons.js'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)
const isStartButtonDisabled = props.timelineItem.hour === currentHour()

watch(
  () => props.timelineItem.activityId,
  () => updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value }),
)

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItem(props.timelineItem, {
      activitySeconds: props.timelineItem.activitySeconds + 1,
    })
    seconds.value++
  }, MILLISECONDS_IN_SECONDS)
}

function stop() {
  clearInterval(isRunning.value)
  isRunning.value = false
}

function reset() {
  stop()
  updateTimelineItem(props.timelineItem, {
    activitySeconds: props.timelineItem.activitySeconds - seconds.value,
  })
  seconds.value = 0
}
</script>

<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER" :disabled="!seconds" @click="reset">
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-zinc-500 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton v-else :type="BUTTON_TYPE_SUCCESS" :disabled="isStartButtonDisabled" @click="start">
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>

<style scoped></style>
