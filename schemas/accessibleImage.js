export default {
  name: 'accessibleImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      validation: Rule => Rule.required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
}
