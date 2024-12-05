<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/components/TheTimeline.vue'
import TheProgress from '@/components/TheProgress.vue'
import TheActivities from '@/components/TheActivities.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE, SECONDS_IN_HOVER } from '@/constants'
import { ref } from 'vue'
import {
  generateActivities,
  generateActivitySelectOptions,
  generateTimelineItems, id,
  normalizePageHash
} from '@/functions.js'

const currentPage = ref(normalizePageHash())
const timelineItems = generateTimelineItems()
const activities = ref(generateActivities())
const activitySelectOptions = generateActivitySelectOptions(activities.value)

function goTo(page) {
  currentPage.value = page
}

function createActivity(name) {
  activities.value.push({
    id: id(),
    name: name,
    secondsToComplete: 0,
  })
}

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col p-3">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
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
