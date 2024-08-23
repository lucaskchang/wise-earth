<template>
  <div class="flex h-[576px] flex-row justify-center space-x-12 p-4">
    <div class="flex flex-col justify-center space-y-4">
      <p class="text-8xl font-bold">
        WiseEarth
      </p>
      <p class="text-4xl font-semibold">
        It Starts Now
      </p>
      <div class="flex flex-row">
        <UButton
          size="xl"
          class="mr-4"
          :ui="{ rounded: 'rounded-full' }"
        >
          Read our Blog
        </UButton>
        <UButton
          size="xl"
          class="mr-4"
          :ui="{ rounded: 'rounded-full' }"
        >
          Join Us
        </UButton>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <img
        src="/illustrations/hero.svg"
        alt="hero"
        class="h-96"
      >
    </div>
  </div>
</template>
