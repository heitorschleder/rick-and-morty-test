<script setup lang="ts">
import CharacterCard from '../molecules/CharacterCard.vue'

defineProps<{
  characters: Array<{
    id: string
    name: string
    species: string
    image: string
  }>
}>()

const emit = defineEmits(['characterClick'])

const onCharacterClick = (id: string) => {
  emit('characterClick', id)
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <CharacterCard
      v-for="character in characters"
      :key="character.id"
      :character="character"
      @click="onCharacterClick"
    />
  </div>
</template>