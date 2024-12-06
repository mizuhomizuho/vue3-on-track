<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { onActivated } from 'vue'
import { scrollToCurrentHour, timelineItemRefs, timelineItems } from '@/timeline-items.js'

// watchPostEffect(async () => {
//   if (currentPage.value === PAGE_TIMELINE) {
//     if ('scrollRestoration' in history) {
//       history.scrollRestoration = 'manual'
//     }
//     await nextTick()
//     scrollToCurrentHour(false)
//   }
// })

onActivated(scrollToCurrentHour)
</script>

<template>
  <div class="mt-7">
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
