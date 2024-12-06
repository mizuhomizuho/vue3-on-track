<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/components/TheTimeline.vue'
import TheProgress from '@/components/TheProgress.vue'
import TheActivities from '@/components/TheActivities.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants'
import { provide, readonly } from 'vue'
import { generatePeriodSelectOptions } from '@/functions.js'
import { currentPage } from '@/router.js'
import {
  activitySelectOptionsKey,
  createActivityKey,
  deleteActivityKey,
  periodSelectOptionsKey,
  setActivitySecondsToCompleteKey,
  setTimelineItemActivityKey,
  timelineItemsKey,
  updateTimelineItemActivitySecondsKey,
} from '@/keys.js'
import {
  activities,
  activitySelectOptions,
  createActivity,
  deleteActivity,
  setActivitySecondsToComplete,
} from '@/activities.js'
import { setTimelineItemActivity, timelineItems, updateTimelineItemActivitySeconds } from '@/timeline-items.js'

provide(updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(createActivityKey, createActivity)
provide(deleteActivityKey, deleteActivity)
provide(setTimelineItemActivityKey, setTimelineItemActivity)
provide(activitySelectOptionsKey, readonly(activitySelectOptions))
provide(periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(timelineItemsKey, readonly(timelineItems))
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col p-3">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      ref="timelineRef"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
  </main>
  <TheNav />
</template>
