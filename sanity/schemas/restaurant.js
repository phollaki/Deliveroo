export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name:'name',
      type:'string',
      title:'Restaurant name',
      validation: (Rule)=>Rule.required()
    },
    {
      name:'short_description',
      type:'string',
      title:'Short description',
      validation: (Rule)=>Rule.max(200)
    },
    {
      name:'image',
      type:'image',
      title:'Image of the restaurant',
    },
    {
      name:'lat',
      type:'number',
      title:'Latitude of restaurant',
    },
    {
      name:'long',
      type:'number',
      title:'Longitude of the Restaurant',
    },
    {
      name:'address',
      type:'string',
      title:'Address of the Restaurant',
      validation: (Rule)=>Rule.required()
    },
    {
      name:'rating',
      type:'number',
      title:'Enter a rating for the Restaurant',
      validation: (Rule)=>Rule.required().min(1).max(5).error('Please enter a number between 1-5')
    },
    {
      name:'type',
      type:'reference',
      title:'Category',
      validation: (Rule)=>Rule.required(),
      to: [{type:'category'}]
    },
    {
      name:'dishes',
      type:'array',
      title:'Dishes',
      of: [{ type:"reference", to: [{ type: "dish" }] }]
    }
  ]
}