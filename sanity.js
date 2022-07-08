const client = sanityClient({
    projectId: '7tv3ko75',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)


// Run this to add exception for localhost:3000 CORS policy
// sanity cors add http://localhost:3000

export default client