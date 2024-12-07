import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import * as storage from '@/storage.js'
import { timelineItems } from '@/timeline-items.js'
import { activities } from '@/activities.js'

loadState()
document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'visible' ? loadState() : saveState()
})

function loadState() {
  const state = storage.load()
  timelineItems.value = state.timelineItems
  activities.value = state.activities
}

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value
  })
}

createApp(App).mount('#app')
