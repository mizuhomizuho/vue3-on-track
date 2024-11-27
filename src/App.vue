<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/components/TheTimeline.vue'
import TheProgress from '@/components/TheProgress.vue'
import TheActivities from '@/components/TheActivities.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants'
import { ref } from 'vue'
import { generateTimelineItems, normalizePageHash } from '@/functions.js'

const currentPage = ref(normalizePageHash())
const timelineItems = generateTimelineItems()

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col p-3">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
