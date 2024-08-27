<template>
  <div>
    <div class="mx-auto flex w-full flex-col px-4 pb-12 pt-24 md:w-3/4 md:flex-row md:space-x-12 md:px-0">
      <div class="mt-8 space-y-4 md:mt-0 md:w-1/2">
        <div>
          <p class="2xl:text-lg">
            {{ article.publishedDate }}
          </p>
          <p class="text-4xl font-bold md:text-5xl 2xl:text-6xl">
            {{ article.title }}
          </p>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <img
            :src="article.author.headshot"
            class="size-20 rounded-full object-cover 2xl:size-24"
          >
          <div class="flex flex-col">
            <p class="text-xl 2xl:text-2xl">
              {{ article.author.name }}
            </p>
            <p class="text-lg italic text-gray-200 2xl:text-xl">
              {{ article.author.position }}
            </p>
          </div>
        </div>
        <p class="text-lg 2xl:text-xl">
          {{ article.description }}
        </p>
      </div>
      <div class="order-first md:order-last md:w-1/2">
        <img
          :src="article.image"
          class="mx-auto max-h-96 rounded-lg object-cover"
        >
      </div>
    </div>
    <div
      class="mt-4 flex flex-col bg-white p-12 text-gray-950 md:flex-row"
    >
      <div class="hidden w-1/4 md:block" />
      <div
        class="prose-lg lg:prose-xl w-full max-w-none md:w-1/2"
        v-html="documentToHtmlString(article.body)"
      />
      <div class="mt-4 w-full md:mt-0 md:block md:w-1/4 md:px-2">
        <p class="ml-2 text-2xl font-bold">
          Recent Posts
        </p>
        <div
          v-for="post of blogPosts.slice(0, 5)"
          :key="post.id"
        >
          <NuxtLink
            :to="`/articles/${post.slug}`"
          >
            <div
              class="flex flex-row space-x-4 rounded-lg p-2 hover:bg-gray-100"
            >
              <img
                :src="post.image"
                class="size-16 rounded-lg object-cover"
              >
              <div class="flex flex-col">
                <p class="text-lg font-bold">
                  {{ post.title }}
                </p>
                <p class="text-sm">
                  {{ post.publishedDate }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useBlogStore } from '~/stores/blogStore';

const route = useRoute();
const articleSlug = route.params.article;
const blogStore = useBlogStore();
const { blogPosts } = storeToRefs(blogStore);
const article = blogPosts.value.find(post => post.slug === articleSlug);
</script>
