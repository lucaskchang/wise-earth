function photoFromId(id: string) {
  const blogStore = useBlogStore();
  const { assets } = storeToRefs(blogStore);
  const image = assets.value.find(asset => asset.sys.id === id);
  return image.fields.file.url.replace('//', 'https://');
}

export const useBlogStore = defineStore('blog', () => {
  const space = ref(null);

  const assets = computed(() => {
    if (space.value) {
      return space.value.includes.Asset;
    }
    return [];
  });

  const teamMembers = computed(() => {
    if (!space.value) return [];
    const teamMemberEntries = space.value.items.filter(item => item.sys.contentType.sys.id === 'teamMember');
    return teamMemberEntries.map((entry) => {
      const { name, position, description } = entry.fields;
      const id = entry.sys.id;
      const headshot = photoFromId(entry.fields.headshot.sys.id);
      return {
        name,
        position,
        description,
        headshot,
        id,
      };
    });
  });
  const blogPosts = computed(() => {
    if (!space.value) return [];
    const blogPostEntries = space.value.items.filter(item => item.sys.contentType.sys.id === 'blogPage');
    return blogPostEntries.map((entry) => {
      const { title, description, body } = entry.fields;
      const id = entry.sys.id;
      const image = photoFromId(entry.fields.image.sys.id);
      const author = teamMembers.value.find(member => member.id === entry.fields.author.sys.id);
      const publishedDate = new Date(entry.fields.publishedDate).toLocaleDateString();
      return {
        title,
        publishedDate,
        description,
        body,
        image,
        author,
        id,
      };
    }).sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
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
