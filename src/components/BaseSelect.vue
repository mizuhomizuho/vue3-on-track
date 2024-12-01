<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline/index.js'
import { isNumberOrNull, isUndefinedOrNull, validateSelectOptions } from '@/validators.js'
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '@/constants.js'

const props = defineProps({
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
  placeholder: {
    default: 'Rest',
    type: String,
  },
})
const emit = defineEmits({
  select: isNumberOrNull,
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>

<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      name=""
      id=""
      class="text-black w-full truncate rounded py-1 px-2 text-2xl"
      @change="emit('select', +$event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
