<template>
  <div class="px-4 py-8">
    <p class="text-center text-4xl font-bold">
      Blog Posts
    </p>
    <div class="mx-auto flex flex-wrap py-4">
      <div
        v-for="post of blogPosts"
        :key="post.id"
        class="w-full p-4 md:w-1/3 2xl:w-1/4"
      >
        <NuxtLink :to="`articles/${post.id}`">
          <div class="h-96 rounded-lg bg-white text-gray-950 transition duration-300 ease-in-out hover:scale-105">
            <img
              class="h-36 w-full rounded-t-lg object-cover"
              :src="post.image"
            >
            <div class="flex h-48 flex-col p-4">
              <div class="mb-auto">
                <p class="text-sm">
                  {{ post.publishedDate }}
                </p>
                <p class="text-xl font-bold">
                  {{ post.title }}
                </p>
                <p class="text-lg">
                  By {{ post.author.name }}
                </p>
                <p class="mt-2">
                  {{ post.description }}
                </p>
              </div>
              <p class="cursor-pointer text-blue-600 underline hover:text-blue-800 hover:no-underline">
                Read More
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blogStore';

const blogStore = useBlogStore();
const { blogPosts } = storeToRefs(blogStore);
</script>
