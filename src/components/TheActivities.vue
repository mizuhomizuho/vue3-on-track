<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import { isActivityValid, validateActivities } from '@/validators.js'
import BaseButton from '@/components/BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline/index.js'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
})

const newActivity = 'new'
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <form class="sticky flex bottom-[57px] gap-2 bg-zinc-800 p-4">
      <input
        type="text"
        :value="newActivity"
        @input="newActivity = $event.target.value"
        class="w-full rounded border px-4 text-xl"
        placeholder="Activity name"
      />
      <BaseButton>
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>

<style scoped></style>
