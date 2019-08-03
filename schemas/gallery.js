import { FaRegImages } from 'react-icons/fa';

export default {
  name: 'gallery',
  title: 'Galleries',
  type: 'document',
  icon: FaRegImages,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'accessibleImage',
      validation: Rule => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'galleryImage',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage', // Use the featuredImage image field as thumbnail
    },
  },
};
