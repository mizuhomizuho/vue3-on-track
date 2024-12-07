import { ref } from 'vue'
import { MILLISECONDS_IN_SECONDS } from '@/constants.js'

export function useStopwatch(initialSeconds) {
  const seconds = ref(initialSeconds)
  const isRunning = ref(false)
  const temp = 120

  function start() {
    // console.log(3331)
    isRunning.value = setInterval(() => {
      // console.log(333)
      seconds.value += temp
    }, MILLISECONDS_IN_SECONDS)
  }

  function stop() {
    clearInterval(isRunning.value)
    isRunning.value = false
  }

  function reset() {
    stop()
    seconds.value = 0
  }

  return {
    seconds,
    isRunning,
    start,
    stop,
    reset,
  }
}
