import { FaChevronRight } from 'react-icons/fa';

export default {
  name: 'maternityPage',
  title: 'Maternity Page',
  type: 'document',
  icon: FaChevronRight,
  fields: [
    {
      name: 'featuredPost',
      title: 'Featured Post',
      type: 'reference',
      to: { type: 'post' },
    },
  ],
};
