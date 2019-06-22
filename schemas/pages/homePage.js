export default {
  name: 'homepage',
  title: 'Homepage',
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
      name: 'welcomeImage',
      title: 'Welcome Image',
      description: 'A profile picture for the welcome section.',
      type: 'accessibleImage',
    },
    {
      name: 'welcomeText',
      title: 'Welcome Text',
      type: 'text',
    },
    {
      name: 'portraitsImage',
      title: 'Portraits Category Image',
      description: 'A background image for the link to portraits.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'weddingsImage',
      title: 'Weddings Category Image',
      description: 'A background image for the link to weddings.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
