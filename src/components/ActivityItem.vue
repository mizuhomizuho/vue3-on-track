<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline/index.js'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseButton from '@/components/BaseButton.vue'
import { BUTTON_TYPE_DANGER } from '@/constants.js'
import { isActivityValid } from '@/validators.js'
import ActivitySecondsToComplete from '@/components/ActivitySecondsToComplete.vue'
import { inject } from 'vue'
import { deleteActivityKey, periodSelectOptionsKey, setActivitySecondsToCompleteKey } from '@/keys.js'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})
const periodSelectOptions = inject(periodSelectOptionsKey)
const setActivitySecondsToComplete = inject(setActivitySecondsToCompleteKey)
const deleteActivity = inject(deleteActivityKey)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteActivity(activity)">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="periodSelectOptions"
        @select="setActivitySecondsToComplete(activity, $event)"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>

<style scoped></style>
