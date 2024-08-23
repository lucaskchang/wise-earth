export const useBlogStore = defineStore('blog', () => {
  const space = ref(null);
  const teamMembers = computed(() => {
    if (space.value) {
      return space.value.items.filter(item => item.sys.contentType.sys.id === 'teamMember');
    }
    return [];
  });
  const blogPosts = computed(() => {
    if (space.value) {
      return space.value.items.filter(item => item.sys.contentType.sys.id === 'blogPage');
    }
    return [];
  });
  const assets = computed(() => {
    if (space.value) {
      return space.value.includes.Asset;
    }
    return [];
  });
  async function getContentfulData() {
    space.value = await $fetch('/api/contentful');
  }

  return {
    teamMembers,
    blogPosts,
    assets,
    getContentfulData,
  };
});
