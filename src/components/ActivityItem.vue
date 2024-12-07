<script setup>
import BaseSelect from '@/components/BaseSelect.vue'
import BaseButton from '@/components/BaseButton.vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constants.js'
import { isActivityValid } from '@/validators.js'
import RemainingActivitySeconds from '@/components/RemainingActivitySeconds.vue'
import { deleteActivity, updateActivity } from '@/activities.js'
import { resetTimelineItemActivities, timelineItems } from '@/timeline-items.js'
import BaseIcon from '@/components/BaseIcon.vue'
import { ICON_TRASH } from '@/icons.js'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(timelineItems.value, activity)
  deleteActivity(activity)
}
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(activity)">
        <BaseIcon :name="ICON_TRASH" />
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
      <RemainingActivitySeconds v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>

<style scoped></style>
