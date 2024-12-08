import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { syncState } from '@/storage.js'
import { startCurrentDateTimer } from '@/time.js'

syncState()
startCurrentDateTimer()
document.addEventListener('visibilitychange', () => {
  syncState(document.visibilityState === 'visible')
})

createApp(App).mount('#app')
