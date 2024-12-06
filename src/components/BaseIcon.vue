<script setup>
import { isIconValid } from '@/validators.js'
import { ICONS } from '@/icons.js'

defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid,
  },
})
</script>

<template>
  <component :is="ICONS[name]" :class="$attrs.class || 'h-8'" />
</template>

<style scoped></style>
