import { useBlogStore } from '~/stores/blogStore';

export default function (id: string) {
  const blogStore = useBlogStore();
  const { assets } = storeToRefs(blogStore);
  const image = assets.value.find(asset => asset.sys.id === id);
  return image.fields.file.url.replace('//', 'https://');
}
