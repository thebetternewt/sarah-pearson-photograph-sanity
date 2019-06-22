export default {
  title: 'Gallery Image',
  name: 'galleryImage',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      validation: Rule => Rule.required().error('Alt text for image is required.'),
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
}
