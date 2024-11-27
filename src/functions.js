import { HOURS_ID_DAY, MIDNIGHT_HOUR, PAGE_TIMELINE } from '@/constants'
import { isPageValid } from '@/validators.js'

export function normalizePageHash() {
  const page = location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let i = MIDNIGHT_HOUR; i < HOURS_ID_DAY; i++) {
    timelineItems.push({ hour: i })
  }
  return timelineItems
}
