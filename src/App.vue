<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/components/TheTimeline.vue'
import TheProgress from '@/components/TheProgress.vue'
import TheActivities from '@/components/TheActivities.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants'
import { computed, ref } from 'vue'
import {
  generateActivities,
  generateActivitySelectOptions,
  generateTimelineItems,
  normalizePageHash,
} from '@/functions.js'

const currentPage = ref(normalizePageHash())
const timelineItems = ref(generateTimelineItems())
const activities = ref(generateActivities())
const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function goTo(page) {
  currentPage.value = page
}

function createActivity(activity) {
  activities.value.push(activity)
}

function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function setTimelineItemActivity({ timelineItem, activity }) {
  timelineItem.activityId = activity?.id || null
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col p-3">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
      :activities="activities"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
    />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
