import { FaChevronRight } from 'react-icons/fa';

export default {
  name: 'weddingsPage',
  title: 'Weddings Page',
  type: 'document',
  icon: FaChevronRight,
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
      name: 'featuredPostOne',
      title: 'Featured Post 1',
      type: 'reference',
      to: { type: 'post' },
    },
    {
      name: 'featuredPostTwo',
      title: 'Featured Post 2',
      type: 'reference',
      to: { type: 'post' },
    },
    {
      name: 'featuredPostThree',
      title: 'Featured Post 3',
      type: 'reference',
      to: { type: 'post' },
    },
  ],
};
