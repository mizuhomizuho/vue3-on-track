<script setup>
import BaseSelect from '@/components/BaseSelect.vue'
import { ref } from 'vue'
import TimelineHour from '@/components/TimelineHour.vue'
import { isTimelineItemValid, validateSelectOptions } from '@/validators.js'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
})
const selectedActivityId = ref(0)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-zinc-500 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      placeholder="Rest..."
      @select="selectedActivityId = $event"
    />
  </li>
</template>
