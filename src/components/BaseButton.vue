<script>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
} from '@/constants.js'

const typeClasses = {
  [BUTTON_TYPE_PRIMARY]: 'border-purple-500 p-3 enabled:hover:bg-purple-600 text-white',
  [BUTTON_TYPE_SUCCESS]: 'border-green-500 p-3 enabled:hover:bg-green-600 text-white',
  [BUTTON_TYPE_WARNING]: 'border-yellow-500 p-3 enabled:hover:bg-yellow-600 text-white',
  [BUTTON_TYPE_NEUTRAL]: 'border-zinc-400 p-3 enabled:hover:bg-zinc-700',
  [BUTTON_TYPE_DANGER]: 'border-red-500 p-3 enabled:hover:bg-red-600 text-white',
}
</script>
<script setup>
import { isButtonTypeValid } from '@/validators.js'
import { BUTTON_TYPE_PRIMARY } from '@/constants.js'

const props = defineProps({
  type: {
    default: BUTTON_TYPE_PRIMARY,
    type: String,
    validator: isButtonTypeValid,
  },
})

const classes = [
  'rounded border disabled:cursor-not-allowed disabled:opacity-50',
  typeClasses[props.type],
]
</script>
<template>
  <button :class="classes">
    <slot />
  </button>
</template>
