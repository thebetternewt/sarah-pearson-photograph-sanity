import { FaRegImages } from 'react-icons/fa'

export default {
  name: 'gallery',
  title: 'Gallery',
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
}
