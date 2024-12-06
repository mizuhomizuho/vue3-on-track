<script setup>
import { currentPage, navigate } from '@/router.js'
import { isNavItemValid } from '@/validators.js'
import { computed } from 'vue'

const props = defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid,
  },
})
const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  { 'bg-zinc-900 pointer-events-none': props.navItem.page === currentPage.value },
])
</script>

<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @:click="navigate(navItem.page)">
      <component :is="navItem.icon" class="w-6 h-6" />
      {{ navItem.page }}
    </a>
  </li>
</template>
