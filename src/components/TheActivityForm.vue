<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline/index.js'
import { inject, nextTick, ref } from 'vue'
import { id } from '@/functions.js'

const createActivity = inject('createActivity')
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
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>

<style scoped></style>
