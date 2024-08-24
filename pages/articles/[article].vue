<template>
  <div class="p-4">
    <div
      class="w-1/2 mx-auto space-y-4"
      v-html="documentToHtmlString(article.fields.body)"
    />
  </div>
</template>

<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useBlogStore } from '~/stores/blogStore';

const route = useRoute();
const articleId = route.params.article;
const blogStore = useBlogStore();
const { blogPosts } = storeToRefs(blogStore);
const article = blogPosts.value.find(post => post.sys.id === articleId);
</script>
