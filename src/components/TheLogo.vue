<script setup>
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants'
import { navigate } from '@/router.js'
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_TIMELINE)">
    <img src="../assets/img/logo.png" alt="Logo" class="h-8" />
  </a>
</template>
