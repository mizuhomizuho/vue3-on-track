<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { onActivated, onDeactivated } from 'vue'
import { scrollToCurrentHour, timelineItemRefs, timelineItems } from '@/timeline-items.js'
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'
import { startCurrentDateTimer, stopCurrentDateTimer } from '@/time.js'

// watchPostEffect(async () => {
//   if (currentPage.value === PAGE_TIMELINE) {
//     if ('scrollRestoration' in history) {
//       history.scrollRestoration = 'manual'
//     }
//     await nextTick()
//     scrollToCurrentHour(false)
//   }
// })

onActivated(() => {
  scrollToCurrentHour()
  startCurrentDateTimer()
})
onDeactivated(stopCurrentDateTimer)
</script>

<template>
  <div class="mt-7 relative">
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
