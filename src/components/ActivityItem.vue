<script setup>
import BaseSelect from '@/components/BaseSelect.vue'
import BaseButton from '@/components/BaseButton.vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constants.js'
import { isActivityValid } from '@/validators.js'
import ActivitySecondsToComplete from '@/components/ActivitySecondsToComplete.vue'
import { deleteActivity, updateActivity } from '@/activities.js'
import { resetTimelineItemActivities } from '@/timeline-items.js'
import BaseIcon from '@/components/BaseIcon.vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
}
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(activity)">
        <BaseIcon class="h-8" name="Trash" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        @select="updateActivity(activity, { secondsToComplete: $event || 0 })"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>

<style scoped></style>
