// ctaCard.js
export default {
    name: 'ctaCard',
    type: 'object',
    title: 'CTA Card',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'subtitle',
            type: 'text',
        },
        {
            name: 'image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'buttonText',
            type: 'string',
        },
        {
            name: 'buttonUrl',
            type: 'url',
        },
        {
            name: 'variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Dark', value: 'dark' },
                    { title: 'Light', value: 'light' },
                ],
            },
            initialValue: 'dark',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
}
