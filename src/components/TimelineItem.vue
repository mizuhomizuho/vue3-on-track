<script setup>
import BaseSelect from '@/components/BaseSelect.vue'
import TimelineHour from '@/components/TimelineHour.vue'
import { isTimelineItemValid, isUndefined } from '@/validators.js'
import TimelineStopwatch from '@/components/TimelineStopwatch.vue'
import { updateTimelineItem } from '@/timeline-items.js'
import { activitySelectOptions } from '@/activities.js'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})
const emit = defineEmits({
  scrollToHour: isUndefined,
})
// const activitySelectOptions = inject(activitySelectOptionsKey)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-zinc-500 py-10 px-4">
    <TimelineHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest..."
      @select="updateTimelineItem(timelineItem, { activityId: $event })"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>
