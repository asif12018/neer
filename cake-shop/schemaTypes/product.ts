import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
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
          {title: 'Hair Oil', value: 'Hair Oil'},
          {title: 'Hair Mask', value: 'Hair Mask'},
          {title: 'Combo', value: 'Combo'},
          {title: 'New Arrival', value: 'New Arrival'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sizeOptions',
      title: 'Size Options',
      type: 'array',
      of: [{type: 'string'}],
      description: 'E.g., 100ml, 150ml, 200ml, 200g',
    }),
  ],
})
