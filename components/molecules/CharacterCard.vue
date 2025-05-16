<script setup lang="ts">
defineProps<{
  character: {
    id: string
    name: string
    species: string
    image: string
  }
}>()
defineEmits(['click'])
</script>

<template>
  <div
    class=" max-w-xl w-[30rem] h-80 bg-gradient-to-b from-green-700 to-gray-300 rounded-lg shadow-lg text-black font-mono cursor-pointer border border-black overflow-hidden"
    @click="$emit('click', character.id)">
    <!-- Top Banner -->
    <div class="bg-[#4D9242] px-4 py-2 text-3xl font-bold text-[#44BED5] tracking-widest text-center font-portal">
      portal license
    </div>

    <div class=" bg-gray-200 relative h-[calc(100%-3.5rem)] p-4">
      <!-- Main Info Row -->
      <!-- License Info -->
      <div class="flex justify-around mt-[-10px] mb-4 w-full text-sm space-y-1 font-semibold">
        <div class="flex flex-col text-center">
          <span class="text-center">License #</span>
          <span class="text-center">JR-DH-C.{{ character.id }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-center">Class</span>
          <span class="text-center">{{ character.species }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-center">Expires</span>
          <span class="text-center">Never</span>
        </div>
        <div class="flex flex-col">
          <span class="text-center">Restrictions</span>
          <span class="text-center">Brine</span>
        </div>
      </div>
      <div class="flex gap-4">

        <!-- Character Image -->
        <div class="w-1/3">
          <img :src="character.image" :alt="character.name"
            class="border border-black rounded-sm w-full h-32 object-cover z-10 opacity-100" />
        </div>

        <div class="flex flex-col ml-12">
          <!-- Name -->
          <div class="mt-3 text-2xl font-bold text-center text-[#29778B] drop-shadow-md truncate font-portal">
            {{ character.name }}
          </div>
          <!-- Address (fixo ou pode ser randomizado) -->
          <div class="text-center text-sm mt-1 font-semibold">
            42 E Squanch Pl<br />
            Seattle, WA 98020
          </div>
        </div>
      </div>

      <!-- Bottom Traits -->
      <div class="grid grid-cols-5 gap-2 text-xs mt-4 font-semibold">
        <div class="text-center">
          <div>Sex</div>
          <div>?</div>
        </div>
        <div class="text-center">
          <div>Height</div>
          <div>5”</div>
        </div>
        <div class="text-center">
          <div>Weight</div>
          <div>0.5lbs</div>
        </div>
        <div class="text-center">
          <div>Hair</div>
          <div>Have</div>
        </div>
        <div class="text-center">
          <div>Eyes</div>
          <div>Squiggles</div>
        </div>
      </div>

      <!-- Optional background swirl -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center z-0"
        style="background-image: url('/images/swirl-background.png');"></div>
    </div>
  </div>
</template>