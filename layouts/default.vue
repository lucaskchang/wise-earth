<template>
  <div
    class="bg-primary min-h-screen text-white"
  >
    <div class="flex w-full flex-row items-center justify-between px-8 py-4 text-3xl font-semibold">
      <NuxtLink
        to="/"
        class="flex flex-row items-center space-x-6"
      >
        <!-- <NuxtImg
          format="webp"
          src="/logo.png"
          alt="logo"
          class="size-12"
        /> -->
        <div class="size-8 rounded-full bg-green-500 ring-8 ring-blue-500" />
        <p>
          WiseEarth
        </p>
      </NuxtLink>
      <div class="flex flex-row items-center space-x-6">
        <NuxtLink
          v-for="link of links"
          :key="link.name"
          :to="link.to"
          class="hover:text-gray-200"
        >
          {{ link.name }}
        </NuxtLink>
        <div class="flex flex-row items-center space-x-4">
          <a
            v-for="social of socials"
            :key="social.icon"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col justify-center hover:text-gray-200"
          >
            <UIcon
              :name="social.icon"
              class="size-8"
            />
          </a>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Blog',
    to: '/blog',
  },
  {
    name: 'Contact',
    to: '/contact',
  },
  {
    name: 'Join Us',
    to: '/join-us',
  },
];

const socials = [
  {
    icon: 'i-mdi-instagram',
    link: 'https://www.instagram.com',
  },
  {
    icon: 'i-mdi-pinterest',
    link: 'https://www.pinterest.com',
  },
];
</script>
