<script setup>
import NavItem from '@/components/NavItem.vue'
import { NAV_ITEMS } from '@/constants'
import { isPageValid } from '@/validators.js'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid,
  },
})
const emit = defineEmits({
  navigate: isPageValid
})
</script>

<template>
  <nav class="sticky bottom-0 z-10 border-t border-zinc-700 bg-zinc-800">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-zinc-900 pointer-events-none': page === currentPage }"
        @:click="emit('navigate', page)"
      >
        <component :is="icon" class="w-6 h-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
