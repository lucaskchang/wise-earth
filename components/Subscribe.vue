<template>
  <div class="space-y-4 bg-blue-400 p-8">
    <p class="text-center text-4xl font-bold">
      Subscribe to our newsletter
    </p>
    <div class="flex flex-row items-center justify-center space-x-4">
      <UInput
        v-model="email"
        size="xl"
        class="w-4/5 md:w-2/3"
        placeholder="Type your email..."
      />
      <UButton
        size="xl"
        color="blue"
        @click="subscribe(email); email = ''"
      >
        Subscribe
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('');
</script>
