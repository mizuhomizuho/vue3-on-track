<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid/index.js'
import { PAGE_TIMELINE } from '@/constants.js'
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" class="text-sm">
    <div v-if="false" class="flex items-center gap-1">
      Meow
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1">
      <div>Progress: <span class="font-mono">88%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>
