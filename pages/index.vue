<template>
  <main style="font-family: sans-serif; padding: 2rem">
    <h1>Hello from PolaNest UC-2 Lite (Nuxt SSG)</h1>
    <p>This page is served from Cloud Storage + Cloud CDN.</p>
    <p>Build SHA: {{ buildSha }}</p>
  </main>
</template>
<script setup lang="ts">
const buildSha = useRuntimeConfig().public.buildSha || 'dev';
</script>
