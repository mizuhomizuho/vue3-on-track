<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline/index.js'
import { isActivityValid } from '@/validators.js'
import { nextTick, ref } from 'vue'

const emit = defineEmits({
  submit: isActivityValid,
})

const activity = ref('')

async function submit() {
  emit('submit', activity.value)
  activity.value = ''
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky flex bottom-[57px] gap-2 bg-zinc-800 p-4">
    <input
      type="text"
      v-model="activity"
      class="w-full rounded border px-4 text-xl text-black"
      placeholder="Activity name"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>

<style scoped></style>
