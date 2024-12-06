<script setup>
import {
  ArrowPathIcon as ArrowPath,
  PauseIcon as Pause,
  PlayIcon as Play,
  PlusIcon as Plus,
  TrashIcon as Trash,
  XMarkIcon as XMark,
} from '@heroicons/vue/24/outline/index.js'
import {
  ChartBarIcon as ChartBar,
  ClockIcon as Clock,
  ListBulletIcon as ListBullet,
} from '@heroicons/vue/24/outline'
import { CheckCircleIcon as CheckCircle } from '@heroicons/vue/24/solid/index.js'

defineProps({
  name: {
    required: true,
    type: String,
  },
})

const icons = {
  Plus,
  Trash,
  XMark,
  ArrowPath,
  Pause,
  Play,
  ChartBar,
  Clock,
  ListBullet,
  CheckCircle,
}
</script>

<template>
  <component :is="icons[name]" />
</template>

<style scoped></style>
