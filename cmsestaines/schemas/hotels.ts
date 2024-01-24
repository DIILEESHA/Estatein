import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hotels',
  title: 'hotels',
  type: 'document',

  fields: [
    defineField({
      name: 'hotelname',
      title: 'Hotel name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'hotelname',
        maxLength: 200,
      },
    }),
    defineField({
      name: 'para',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'type',
      title: 'Hotel type',
      type: 'string',
      options: {
        list: ['Villa', 'Guest', 'Room'],
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      options: {
        list: [
          'Alabama, United states',
          'Alaska, United states',
          'Arizona, United states',
          'Arkansas, United states',
        ],
      },
    }),
    defineField({
      name: 'images',
      title: 'Hotel Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.min(1).max(6),
    }),
    defineField({
      name: 'numBathrooms',
      title: 'Number of Bathrooms',
      type: 'number',
    }),
    defineField({
      name: 'numBedrooms',
      title: 'Number of Bedrooms',
      type: 'number',
    }),
    defineField({
      name: 'area',
      title: 'Area',
      type: 'number',
    }),
    defineField({
      name: 'features',
      title: 'Key features',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
