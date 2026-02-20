import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    // TEXT BLOCKS
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // in the portable text schema
    defineArrayMember({
      name: 'richTableBlock',
      title: 'Rich Table Block',
      type: 'richTableBlock', // Use the rich table block type
    }),

    // IMAGES
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),
    defineArrayMember({
  type: 'code',
  title: 'Code Block',
  options: {
    withFilename: true, },}),

    // CTA CARD (INLINE BLOG CTA)
    defineArrayMember({
      name: 'ctaCard',
      title: 'CTA Card',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'buttonText',
          title: 'Button text',
          type: 'string',
        },
        {
          name: 'buttonUrl',
          title: 'Button URL',
          type: 'url',
        },
      ],
      preview: {
        select: {
          title: 'title',
          media: 'image',
        },
        prepare({ title, media }) {
          return {
            title: title || 'CTA Card',
            subtitle: 'Inline CTA',
            media,
          }
        },
      },
    }),
  ],
})
