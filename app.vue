<script setup lang="ts">
useHead({
  title: 'Rick and Morty Explorer',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Explore and search characters from the Rick and Morty universe using a GraphQL-powered Nuxt 3 app.' },
    { name: 'keywords', content: 'Rick and Morty, Nuxt 3, GraphQL, TailwindCSS, Vue, Character Search' },
    { name: 'author', content: 'Heitor Schleder' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
  ]
})
</script>
<template>
  <div class="min-h-screen">
    <NuxtPage />
  </div>
</template>
