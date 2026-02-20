// ./lib/presentation/resolve.ts
import {defineDocuments, defineLocations} from 'sanity/presentation'

export const locations = {
  // ✅ Matches name: "post" in your schema
  post: defineLocations({
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Untitled Post',
          // 🎯 Ensure this is plural 'blogs' to match your site
          href: `/blogs/${doc?.slug}`, 
        },
        {
          title: 'Blogs Index',
          href: '/blogs',
        },
      ],
    }),
  }),
}

export const mainDocuments = defineDocuments([
  {
    route: '/blogs/:slug',
    // ✅ Matches _type: "post"
    filter: `_type == "post" && slug.current == $slug`,
  },
])