export const product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'previousPrice',
      type: 'number',
      title: 'PreviousPrice'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category'
    },
    {
      name: 'highlights',
      type: 'array',
      title: 'Highlights',
      of: [{ type: 'string' }]
    },
    {
      name: 'details',
      type: 'string',
      title: 'Details'
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "name" },
            { type: "boolean", name: "inStock" },
          ]
        }
      ],
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "name" },
            { type: "string", name: "class" },
            { type: "string", name: "selectedClass" }
          ]
        }
      ],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "src" },
            { type: "string", name: "alt" },
          ]
        }
      ],
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    },
  ]
}