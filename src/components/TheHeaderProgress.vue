<script setup>
import { HUNDRED_PERCENT, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants.js'
import { navigate } from '@/router.js'
import BaseIcon from '@/components/BaseIcon.vue'
import { ICON_CHECK_CIRCLE } from '@/icons.js'
import { useTotalProgress } from '@/composables/total-progress.js'

const { colorClass, percentage } = useTotalProgress()
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" class="text-sm" @click="navigate(PAGE_PROGRESS)">
    <div v-if="percentage < HUNDRED_PERCENT" class="flex items-center gap-1">
      <div>
        Progress: <span class="font-mono">{{ percentage }}%</span>
      </div>
      <div :class="`h-3 w-3 rounded-full ${colorClass}`"></div>
    </div>
    <div v-else class="flex items-center gap-1">
      Meow
      <BaseIcon class="h-7 text-green-500" :name="ICON_CHECK_CIRCLE" />
    </div>
  </a>
</template>
