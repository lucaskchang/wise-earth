export default defineEventHandler(async (event) => {
  const { contentfulKey } = useRuntimeConfig(event);
  const result = await fetch(`https://cdn.contentful.com/spaces/x5kyzsql6l1g/environments/master/entries?access_token=${contentfulKey}`);
  return result.json();
});
