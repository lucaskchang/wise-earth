<template>
  <div class="space-y-8 px-4 py-12">
    <div class="mx-auto space-y-4 text-center md:w-2/3">
      <p class="text-5xl font-bold">
        Our Mission
      </p>
      <UDivider class="mx-auto w-96" />
      <p class="text-xl">
        WiseEarth is committed to delivering the most current, concise, and informative energy information through an easily accessible blog. Education plays a vital role in shaping a brighter future, and as the world embraces sustainability, being well-informed with knowledge that propels the world forward has never been more crucial.
      </p>
    </div>
    <div class="mx-auto space-y-4 md:w-5/6">
      <p class="text-center text-5xl font-bold">
        Our Values
      </p>
      <UDivider class="mx-auto w-96" />
      <div class="flex flex-row space-x-8">
        <div
          v-for="value of values"
          :key="value.title"
          class="flex w-1/3 flex-col space-y-4"
        >
          <img
            :src="`/illustrations/${value.illustration}`"
            :alt="value.title"
            class="mx-auto max-h-72"
          >
          <p class="text-3xl font-semibold">
            {{ value.title }}
          </p>
          <p class="text-xl">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="mx-auto space-y-4 md:w-5/6">
      <p class="text-center text-5xl font-bold">
        Our Team
      </p>
      <UDivider class="mx-auto w-96" />
      <div class="flex flex-wrap">
        <div
          v-for="member of teamMembers"
          :key="member.id"
          class="w-full p-4 md:w-1/2 xl:w-1/3"
        >
          <div class="h-96 overflow-auto rounded-lg bg-white p-4 text-gray-950 md:h-[576px] 2xl:h-96">
            <div class="flex flex-row items-center space-x-4">
              <img
                class="size-24 rounded-full object-cover 2xl:size-32"
                :src="member.headshot"
              >
              <div>
                <p class="text-2xl font-semibold 2xl:text-3xl">
                  {{ member.name }}
                </p>
                <p class="text-lg font-semibold text-gray-700 2xl:text-xl">
                  {{ member.position }}
                </p>
              </div>
            </div>
            <p class="mt-4 text-lg 2xl:text-xl">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blogStore';

const blogStore = useBlogStore();
const { teamMembers } = storeToRefs(blogStore);

const values = [
  {
    title: 'Quality',
    illustration: 'quality.svg',
    description: 'The significance of quality has never been more crucial! At WiseEarth blog, rest assured that every piece of information is diligently fact-checked from reliable sources. We hold our readers in high regard and are committed to delivering the best blogs.',
  },
  {
    title: 'Sustainability',
    illustration: 'sustainable.svg',
    description: 'Sustainability is not just a part of WiseEarth, it what drives everything we do. We are more than just a blog; we are fighting for a sustainable future, and our commitment to sustainability extends to every aspect of us. With unwavering passion, we endeavor to transform the world into a better place through the power of knowledge.',
  },
  {
    title: 'Simplicity',
    illustration: 'simple.svg',
    description: 'To simplify things is incredibly challenging in today\'s world, but we are unwavering in our belief that time is the most precious asset on the planet. That\'s why we are dedicated to presenting our information in a clear and accessible manner, free from unnecessary links and distracting content typically found in blogs.',
  },
];
</script>
