<template>
  <div class="px-4 py-8">
    <p class="text-center text-4xl font-bold">
      Blog Posts
    </p>
    <div class="mx-auto flex flex-wrap py-4">
      <div
        v-for="post of blogPosts"
        :key="post.sys.id"
        class="w-full p-4 md:w-1/3 2xl:w-1/6"
      >
        <div class="h-96 rounded-lg bg-white text-gray-950">
          <img
            class="h-48 w-full rounded-t-lg object-cover"
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          >
          <div class="flex h-48 flex-col justify-between p-4">
            <div>
              <p class="text-2xl font-bold">
                {{ post.fields.title }}
              </p>
              <p class="h-28   text-ellipsis">
                {{ post.fields.body }}
              </p>
            </div>
            <p class="cursor-pointer text-blue-600 underline hover:text-blue-800 hover:no-underline">
              Read More
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
const { blogPosts } = storeToRefs(blogStore);
</script>
