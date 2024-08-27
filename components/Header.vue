<template>
  <div class="text-3xl font-semibold">
    <div
      class="flex w-full flex-row items-center justify-between px-8 py-6"
    >
      <NuxtLink
        to="/"
        class="flex flex-row items-center space-x-4"
      >
        <NuxtImg
          format="webp"
          src="/logo.png"
          alt="logo"
          class="size-14 rounded-full"
        />
        <p>
          WiseEarth
        </p>
      </NuxtLink>
      <div
        v-if="bigScreen"
        class="flex flex-row items-center space-x-6"
      >
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
              class="size-9"
            />
          </a>
        </div>
      </div>
      <div v-else>
        <UIcon
          name="i-mdi-menu"
          class="size-12"
          @click="showMenu = !showMenu"
        />
      </div>
    </div>
    <Transition>
      <div
        v-if="showMenu"
        ref="menu"
        class="absolute top-20 z-50 flex h-[576px] w-full flex-col items-center bg-blue-300 pt-24 shadow"
      >
        <NuxtLink
          v-for="link of links"
          :key="link.name"
          :to="link.to"
          class="mb-4 hover:text-gray-200"
          @click="showMenu = false"
        >
          {{ link.name }}
        </NuxtLink>
        <UDivider class="mx-auto w-1/2" />
        <p class="mb-2 mt-4">
          Socials
        </p>
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
              class="size-9"
            />
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { width } = useWindowSize();
const bigScreen = computed(() => width.value >= 768);
const showMenu = ref(false);
const menu = ref(null);
onClickOutside(menu, () => {
  setTimeout(() => {
    if (showMenu.value) {
      showMenu.value = false;
    }
  }, 100);
});
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

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
