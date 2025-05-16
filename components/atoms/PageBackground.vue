<script setup lang="ts">
defineProps<{
  backgroundImage?: string
}>()
</script>

<template>
  <div
    class="min-h-screen bg-fixed bg-center bg-cover"
    :style="{
      backgroundImage: `url('${backgroundImage}')`
    }"
  >
    <div class="min-h-screen">
      <slot />
    </div>
  </div>
</template>