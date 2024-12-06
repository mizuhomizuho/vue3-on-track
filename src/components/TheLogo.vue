<script setup>
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants'
import { currentPage, navigate } from '@/router.js'
import { scrollToCurrentHour } from '@/timeline-items.js'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
}
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_TIMELINE)">
    <img src="../assets/img/logo.png" alt="Logo" class="h-8" />
  </a>
</template>
