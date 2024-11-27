import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline'

export const MIDNIGHT_HOUR = 0
export const HOURS_ID_DAY = 24

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
}
