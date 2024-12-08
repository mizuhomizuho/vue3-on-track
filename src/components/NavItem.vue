<script setup>
import { currentPage, navigate } from '@/router.js'
import { isNavItemValid } from '@/validators.js'
import { computed } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { scrollToCurrentHour } from '@/timeline-items.js'
import { PAGE_TIMELINE } from '@/constants.js'

const props = defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid,
  },
})
const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  props.navItem.page === currentPage.value ? 'bg-zinc-900' : 'hover:bg-zinc-700',
])

function handleClick() {
  currentPage.value === PAGE_TIMELINE && props.navItem.page === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(props.navItem.page)
}
</script>

<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="handleClick">
      <BaseIcon :name="navItem.icon" class="w-6 h-6" />
      {{ navItem.page }}
    </a>
  </li>
</template>
