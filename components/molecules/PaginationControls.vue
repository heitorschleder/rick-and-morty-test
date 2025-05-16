<script setup lang="ts">
defineProps<{
  page: number
  hasNextPage: boolean
}>()

defineEmits(['changePage'])
</script>

<template>
  <div class="mt-6 flex justify-center gap-4">
    <button
      v-if="page > 1"
      @click="$emit('changePage', page - 1)"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg"
    >
      Previous
    </button>
    <button
      v-if="hasNextPage"
      @click="$emit('changePage', page + 1)"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg"
    >
      Next
    </button>
  </div>
</template>