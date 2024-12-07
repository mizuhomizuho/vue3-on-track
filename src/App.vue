<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import { currentPage, routes } from '@/router.js'

// provide(activitySelectOptionsKey, readonly(activitySelectOptions))
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <KeepAlive>
      <component :is="routes[currentPage]" />
    </KeepAlive>
    <!--    <TheProgress v-show="currentPage === PAGE_PROGRESS" />-->
  </main>
  <TheNav />
</template>
