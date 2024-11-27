<script>
// Without the setup attribute.
export default {
  inheritAttrs: false, // Disables attribute inheritance by the root tag, redirecting them to v-bind="$attrs".
}
</script>

<template>
  <li class="flex-1">
    <a v-bind="$attrs" class="flex flex-col items-center p-2 text-xs capitalize">
      <slot />
    </a>
  </li>
</template>
