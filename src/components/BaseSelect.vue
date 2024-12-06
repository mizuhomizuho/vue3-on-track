<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { isSelectValueValid, isUndefinedOrNull, validateSelectOptions } from '@/validators.js'
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '@/constants.js'
import { normalizeSelectValue } from '@/functions.js'
import BaseIcon from '@/components/BaseIcon.vue'

const props = defineProps({
  selected: [String, Number],
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
  select: isSelectValueValid,
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <BaseIcon class="h-8" name="XMark" />
    </BaseButton>
    <select
      name=""
      id=""
      class="text-black w-full truncate rounded py-1 px-2 text-2xl"
      @change="select($event.target.value)"
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
