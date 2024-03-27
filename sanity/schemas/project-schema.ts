const project = {
  type: 'document',
  name: 'project',
  title: 'Projects',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // Define slug automatically using the name field
        source: 'name',
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      // This will be a rich text field
      of: [{ type: 'block' }],
    },
  ],
};

export default project;
