import {defineField, defineType} from 'sanity'

export const cake = defineType({
  name: 'cake',
  title: 'Cake',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (৳)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Signature', value: 'Signature'},
          {title: 'Classic', value: 'Classic'},
          {title: 'Seasonal', value: 'Seasonal'},
          {title: 'Custom', value: 'Custom'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'weightOptions',
      title: 'Weight Options',
      type: 'array',
      of: [{type: 'string'}],
      description: 'E.g., 1 lb, 2 lbs, 5 lbs',
    }),
  ],
})
