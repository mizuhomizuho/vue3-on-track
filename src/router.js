import { ref } from 'vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants.js'
import { isPageValid } from '@/validators.js'
import TheTimeline from '@/components/TheTimeline.vue'
import TheActivities from '@/components/TheActivities.vue'
import TheProgress from '@/components/TheProgress.vue'

export const currentPage = ref(normalizePageHash())
export const routes = {
  [PAGE_TIMELINE]: TheTimeline,
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress,
}

export function navigate(page) {
  document.body.scrollIntoView()
  currentPage.value = page
}

export function normalizePageHash() {
  const page = location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}
