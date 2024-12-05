<script setup>
import BaseSelect from '@/components/BaseSelect.vue'
import TimelineHour from '@/components/TimelineHour.vue'
import {
  isActivityValid,
  isTimelineItemValid,
  validateActivities,
  validateSelectOptions,
} from '@/validators.js'
import { NULLABLE_ACTIVITY } from '@/constants.js'
import TimelineStopwatch from '@/components/TimelineStopwatch.vue'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
})

const emit = defineEmits({
  selectActivity: isActivityValid,
})

function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id) {
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-zinc-500 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest..."
      @select="selectActivity"
    />
    <TimelineStopwatch :seconds="timelineItem.activitySeconds" />
  </li>
</template>
