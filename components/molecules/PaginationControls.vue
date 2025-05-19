<script setup lang="ts">
defineProps<{
  page: number
  hasNextPage: boolean
}>()

defineEmits(['changePage'])
</script>

<template>
  <div class="portal-container">
    <button
      v-if="page > 1"
      @click="$emit('changePage', page - 1)"
      class="rick-button"
    >
      🌀 Back to the Past
    </button>
    <button
      v-if="hasNextPage"
      @click="$emit('changePage', page + 1)"
      class="rick-button"
    >
      🚀 Onward, Morty!
    </button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
.rick-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: bold;
  color: #1b1b1b;
  background: linear-gradient(145deg, #7eff6c, #00ffea);
  box-shadow: 0 0 10px #7eff6c, 0 0 5px #00ffea;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-family: 'Share Tech Mono', monospace;
  cursor: pointer;
}

.rick-button:hover {
  transform: scale(1.1) rotate(-2deg);
  box-shadow: 0 0 20px #00ffea, 0 0 10px #7eff6c;
}

.rick-button:active {
  transform: scale(0.95) rotate(2deg);
  background: linear-gradient(145deg, #b6ff7a, #76fff6);
}

.portal-container {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  animation: portalGlow 3s infinite alternate;
}

@keyframes portalGlow {
  0% {
    filter: drop-shadow(0 0 2px #7eff6c);
  }
  100% {
    filter: drop-shadow(0 0 10px #00ffea);
  }
}
</style>
