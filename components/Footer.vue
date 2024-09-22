<template>
  <div class="sticky top-full bg-blue-400">
    <div class="px-8 py-6">
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col">
          <NuxtImg
            format="webp"
            src="/logo_banner.png"
            alt="logo"
            class="w-full md:h-96 md:w-[576px]"
          />
        </div>
        <div class="order-first flex flex-col py-4 md:order-last md:w-1/2 md:px-4">
          <div class="flex flex-col space-y-4">
            <p class="text-3xl font-bold">
              Subscribe
            </p>
            <UInput
              v-model="email"
              placeholder="Email"
            />
            <UButton
              class="w-full"
              @click="subscribe(email); email = ''"
            >
              Subscribe
            </UButton>
          </div>
          <div class="mt-12 flex flex-row space-x-2 text-lg">
            <div
              v-for="link of links"
              :key="link.name"
              class="flex flex-row space-x-2"
            >
              <NuxtLink
                :to="link.to"
                class="hover:text-gray-200"
              >
                {{ link.name }}
              </NuxtLink>
              <p v-if="link !== links[links.length - 1]">
                |
              </p>
            </div>
          </div>
          <!-- <p class="text-3xl font-bold">
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
          </UButton> -->
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
import socials from '~/assets/data/socials.json';
import links from '~/assets/data/pages.json';

const email = ref('');
</script>
