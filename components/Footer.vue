<template>
  <div class="sticky top-full bg-blue-400">
    <div class="px-8 py-6">
      <div class="flex flex-row">
        <div class="flex w-1/2 flex-col">
          <NuxtImg
            format="webp"
            src="/logo_banner.png"
            alt="logo"
            class="h-96 w-[576px]"
          />
          <div class="mt-4 flex flex-row text-lg">
            <div
              v-for="link of links"
              :key="link.name"
            >
              <NuxtLink
                :to="link.to"
                class="hover:text-gray-200"
              >
                {{ link.name }}
              </NuxtLink><span v-if="link !== links[links.length - 1]">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>
        <div class="flex w-1/2 flex-col space-y-4 p-4">
          <p class="text-3xl font-bold">
            Subscribe
          </p>
          <UInput
            placeholder="Email"
          />
          <UButton
            class="w-full"
          >
            Subscribe
          </UButton>
          <p class="text-3xl font-bold">
            Contact Us
          </p>
          <div class="flex flex-row space-x-4">
            <UInput
              placeholder="Name"
              class="w-1/2"
            />
            <UInput
              placeholder="Email"
              class="w-1/2"
            />
          </div>
          <UTextarea
            placeholder="Message"
            class="w-full"
            autoresize
          />
          <UButton
            class="w-full"
          >
            Submit
          </UButton>
        </div>
      </div>
      <UDivider class="my-4" />
      <div class="flex flex-row items-center justify-between">
        <p>
          &copy; {{ new Date().getFullYear() }} WiseEarth. All Rights Reserved.
        </p>
        <div class="flex flex-row items-center space-x-4">
          <a
            v-for="social of socials"
            :key="social.icon"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-gray-200"
          >
            <UIcon
              :name="social.icon"
              class="size-8"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Blog',
    to: '/blog',
  },
  {
    name: 'Join Us',
    to: '/join-us',
  },
];

const socials = [
  {
    icon: 'i-mdi-instagram',
    link: 'https://www.instagram.com/wiseearth11/',
  },
  {
    icon: 'i-mdi-pinterest',
    link: 'https://www.pinterest.com/wiseearth11/_created/',
  },
  {
    icon: 'i-mdi-linkedin',
    link: 'https://linkedin.com',
  },
];
</script>
