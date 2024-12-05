import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline'
import { generatePeriodSelectOptions } from '@/functions.js'

export const MILLISECONDS_IN_SECONDS = 1000
export const SECONDS_IN_MINUTE = 60
export const MINUTE_IN_HOVER = 60
export const HOURS_IN_DAY = 24
export const SECONDS_IN_HOVER = SECONDS_IN_MINUTE * MINUTE_IN_HOVER
export const MIDNIGHT_HOUR = 0
export const HOURS_ID_DAY = 24

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const BUTTON_TYPE_PRIMARY = 'primary'
export const BUTTON_TYPE_SUCCESS = 'success'
export const BUTTON_TYPE_WARNING = 'warning'
export const BUTTON_TYPE_DANGER = 'danger'
export const BUTTON_TYPE_NEUTRAL = 'neutral'

export const BUTTON_TYPES = [
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
]

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
}

export const NULLABLE_ACTIVITY = {id: null}

const PERIODS_IN_MINUTES = [15, 30, 45, 60, 75]

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions(PERIODS_IN_MINUTES)

// [
//   {
//     value: 1 * SECONDS_IN_HOVER,
//     label: '01:00',
//   },
//   {
//     value: 2 * SECONDS_IN_HOVER,
//     label: '02:00',
//   },
//   {
//     value: 3 * SECONDS_IN_HOVER,
//     label: '03:00',
//   },
// ]
