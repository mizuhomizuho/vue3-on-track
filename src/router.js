import { ref } from 'vue'
import { PAGE_TIMELINE } from '@/constants.js'
import { isPageValid } from '@/validators.js'

export const timelineRef = ref()
export const currentPage = ref(normalizePageHash())

export function navigate(page) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timelineRef.value.scrollToHour()
  } else if (page !== PAGE_TIMELINE) {
    document.body.scrollIntoView()
  }
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
