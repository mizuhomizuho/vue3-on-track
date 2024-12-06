<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid/index.js'
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants.js'
import { navigate } from '@/router.js'
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" class="text-sm" @click="navigate(PAGE_PROGRESS)">
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
