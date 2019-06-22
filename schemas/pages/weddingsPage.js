export default {
  name: 'weddingsPage',
  title: 'Weddings Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'accessibleImage',
    },
    {
      name: 'featuredPosts',
      title: 'Featured Posts',
      description: 'Only four will be shown.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    },
  ],
}
