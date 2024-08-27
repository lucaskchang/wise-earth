<template>
  <div class="flex h-[640px] flex-col justify-center p-4 pb-12 pt-0 md:h-[576px] md:flex-row md:space-x-12 md:py-4">
    <div class="flex flex-col justify-center space-y-4">
      <p class="text-center text-6xl font-bold md:text-left md:text-8xl">
        WiseEarth
      </p>
      <p class="text-center text-2xl font-semibold md:text-left md:text-4xl">
        It Starts Now
      </p>
      <div class="flex flex-row justify-center md:justify-start">
        <UButton
          to="/blog"
          size="xl"
          class="mr-4"
          :ui="{ rounded: 'rounded-full' }"
        >
          Read our Blog
        </UButton>
        <UButton
          to="/join-us"
          size="xl"
          class="mr-4"
          :ui="{ rounded: 'rounded-full' }"
        >
          Join Us
        </UButton>
      </div>
      <UIcon
        name="i-hero-icons-bars-3-solid"
        class="mx-auto size-12 md:hidden"
      />
    </div>
    <div class="order-first flex flex-col justify-center md:order-last">
      <img
        src="/illustrations/hero.svg"
        alt="hero"
        class="h-96"
      >
    </div>
  </div>
</template>
