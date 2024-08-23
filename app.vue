<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blogStore';

const blogStore = useBlogStore();
await blogStore.getContentfulData();
</script>
