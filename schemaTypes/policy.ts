import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'policy',
    title: 'Policy',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,

            },
        }),
        defineField({
            name:"subtext",
            title:'Subtext',
            type:'blockContent'
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Last Updated',
            type: 'date',
            options: {
                dateFormat: 'MMMM YYYY', // This helps editors see the format "October 2025"
            },
            initialValue: () => new Date().toISOString().split('T')[0], // Sets today as default
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',

        },
        prepare(selection) {
            const {author} = selection

            return {...selection, subtitle: author && `by ${author}`}
        },
    },
})
