<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { nextTick, ref } from 'vue'
import { id } from '@/functions.js'
import { createActivity } from '@/activities.js'
import BaseIcon from '@/components/BaseIcon.vue'

const name = ref('')

async function submit() {
  createActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0,
  })
  name.value = ''
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky flex bottom-[57px] gap-2 bg-zinc-800 p-4">
    <input
      type="text"
      v-model="name"
      class="w-full rounded border px-4 text-xl text-black"
      placeholder="Activity name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <BaseIcon name="Plus" class="h-8" />
    </BaseButton>
  </form>
</template>

<style scoped></style>
