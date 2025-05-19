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

const addresses = [
  "42 E Squanch Pl<br />Seattle, WA 98020",
  "123 Rick Rd<br />Dimension C-137",
  "7 Gazorpazorp St<br />Planet Gazorpazorp",
  "99 Meeseeks Ln<br />Multiverse 42",
  "101 Jerry Blvd<br />Earth (Replacement)",
  "666 Evil Morty Ave<br />Citadel of Ricks",
  "314 Pickle Pkwy<br />Pickleverse 3.14",
  "1 Birdperson Blvd<br />Phoenix, AZ",
  "404 Portal Gun Way<br />Unknown Location",
  "999 Summer Ct<br />Dimension J19ζ7",
  "202 Squanch Blvd<br />Planet Squanch",
  "88 Cronenberg St<br />Post-Apocalyptic Earth",
  "77 Glip Glop Ln<br />Blips and Chitz",
  "12 Plumbus Way<br />Gromflomite Sector",
  "555 Unity Dr<br />Hive Mind County",
  "390 Wormhole Loop<br />Nebulon Cluster",
  "808 Time Travel Rd<br />Temporal Zone 9",
  "321 Morty Meadow<br />Dimension Replacement A",
  "187 Toxic Rick Rd<br />Toxic World 6B",
  "0 Null St<br />Existence Outside Time"
]

const getRandomAddress = () => {
  const index = Math.floor(Math.random() * addresses.length)
  return addresses[index]
}

const restrictions = ["Brine", "Tasks", "Rick", "Parasites", "Burp"]

const getRandomRestriction = () => {
  const index = Math.floor(Math.random() * restrictions.length)
  return restrictions[index]
}

const restriction = getRandomRestriction()

const address = getRandomAddress()
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
          <span class="text-center">{{ restriction }}</span>
        </div>
      </div>
      <div class="flex gap-4">

        <!-- Character Image -->
        <div class="w-1/3">
          <img :src="character.image" :alt="character.name"
            class="relative z-50 w-full h-32 object-cover border border-black rounded-sm" />
        </div>

        <div class="flex flex-col text-center w-64">
          <!-- Name -->
          <div class="mt-3 text-[1.9rem] font-bold text-[#29778B] drop-shadow-md truncate font-portal">
            {{ character.name }}
          </div>
          <!-- Address -->
          <div class="text-center text-base mt-1 font-semibold" v-html="address">
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