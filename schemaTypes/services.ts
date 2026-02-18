import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
    name: 'servicesPage',
    title: 'Services Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            description: 'The internal name of this page (e.g., "Main Services Page").',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Page Sections',
            type: 'array',
            description: 'Add and reorder the sections of the services page.',
            of: [
                // 1. HERO SECTION
                defineArrayMember({
                    name: 'hero',
                    type: 'object',
                    title: 'Hero Section',
                    fields: [
                        defineField({ name: 'heading', type: 'string', title: 'Main Heading' }),
                        defineField({ name: 'subheading', type: 'text', title: 'Subheading' }),
                        defineField({ name: 'primaryCTA', type: 'string', title: 'Primary Button Text' }),
                        defineField({ name: 'secondaryCTA', type: 'string', title: 'Secondary Button Text' }),
                        defineField({ name: 'bgGraphics', type: 'image', title: 'Background / Orbiting Icons' }),
                    ],
                }),

                // 2. "WHY CHOSE WIX" FEATURE CARDS
                defineArrayMember({
                    name: 'reasonHighlight',
                    type: 'object',
                    title: 'Platform Reasons Highlight',
                    fields: [
                        defineField({ name: 'sectionTitle', type: 'string', title: 'Section Title' }),
                        defineField({
                            name: 'features',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'image', type: 'image', title: 'Card Image' }),
                                        defineField({ name: 'title', type: 'string', title: 'Feature Title' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // 3. STATS SECTION
                defineArrayMember({
                    name: 'statsSection',
                    type: 'object',
                    title: 'Stats & Trust Section',
                    fields: [
                        defineField({ name: 'heading', type: 'string', title: 'Main Heading' }),
                        defineField({
                            name: 'stats',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'value', type: 'string', title: 'Stat Value' }),
                                        defineField({ name: 'label', type: 'string', title: 'Stat Label' }),
                                        defineField({ name: 'description', type: 'text', title: 'Description' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // 4. POWERFUL SERVICES GRID
                defineArrayMember({
                    name: 'servicesGrid',
                    type: 'object',
                    title: 'Services Grid',
                    fields: [
                        defineField({ name: 'heading', type: 'string', title: 'Section Heading' }),
                        defineField({
                            name: 'items',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'icon', type: 'image', title: 'Icon' }),
                                        defineField({ name: 'title', type: 'string', title: 'Service Title' }),
                                        defineField({ name: 'description', type: 'text', title: 'Description' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // 5. SUPPORT FAQ SECTION
                defineArrayMember({
                    name: 'faqSection',
                    type: 'object',
                    title: 'FAQ / Support Section',
                    fields: [
                        defineField({ name: 'heading', type: 'string', title: 'Section Heading' }),
                        defineField({
                            name: 'faqs',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'question', type: 'string', title: 'Question' }),
                                        defineField({ name: 'answer', type: 'text', title: 'Answer' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // 6. PLATFORM COMPARISON
                defineArrayMember({
                    name: 'platformComparison',
                    type: 'object',
                    title: 'Platform Comparison',
                    fields: [
                        defineField({ name: 'heading', type: 'string', title: 'Section Heading' }),
                        defineField({ name: 'ctaButton', type: 'string', title: 'Secondary Button Label' }),
                        defineField({
                            name: 'platforms',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'name', type: 'string', title: 'Platform Name' }),
                                        defineField({ name: 'logo', type: 'image', title: 'Platform Logo' }),
                                        defineField({ name: 'brandColor', type: 'string', title: 'Brand Hex Color' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // 7. FINAL CTA BANNER
                defineArrayMember({
                    name: 'ctaFooterBanner',
                    type: 'object',
                    title: 'Final CTA Banner',
                    fields: [
                        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
                        defineField({ name: 'description', type: 'text', title: 'Body Text' }),
                        defineField({ name: 'mockupImage', type: 'image', title: 'Device Mockup' }),
                        defineField({ name: 'primaryBtn', type: 'string', title: 'Primary Button Label' }),
                        defineField({ name: 'secondaryBtn', type: 'string', title: 'Secondary Button Label' }),
                    ],
                }),
            ],
        }),
    ],
})