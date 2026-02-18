import { defineType, defineField } from "sanity";

export default defineType({
    name: "caseStudies",
    title: "Case Studies",
    type: "document",
    fields: [
        // --- METADATA ---
        defineField({
            name: "title",
            title: "Case Study Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'seo', // Ensure you have an 'seo' type defined, or change to 'object' if not
        }),
        defineField({
            name: "isFeatured",
            title: "Featured Project?",
            type: "boolean",
            initialValue: false,
        }),

        // --- CLIENT DETAILS ---
        defineField({
            name: "clientDetails",
            title: "Client Project Info",
            type: "object",
            fields: [
                defineField({ name: "clientName", title: "Client Name", type: "string" }),
                defineField({ name: "location", title: "Location", type: "string" }),
                defineField({ name: "duration", title: "Duration", type: "string" }),
                defineField({ name: "industry", title: "Industry", type: "string" }),
                defineField({ name: "services", title: "Services Provided", type: "text" }),
            ],
        }),

        // --- HERO SECTION ---
        defineField({
            name: "heroHeading",
            title: "Hero Heading",
            type: "string",
        }),
        defineField({
            name: "heroSubheading",
            title: "Hero Subheading",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "heroBgImage",
            title: "Hero Background Image",
            type: "image",
            options: { hotspot: true },
        }),

        // --- MOCKUPS ---
        defineField({
            name: "laptopMockup",
            title: "Laptop Mockup",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "mobileMockup",
            title: "Mobile Mockup",
            type: "image",
            options: { hotspot: true },
        }),

        // --- PROBLEM & STRATEGY ---
        defineField({
            name: "sideVideo",
            title: "Side Video (MP4)",
            type: "file",
            options: { accept: "video/mp4" },
        }),
        defineField({
            name: "problemText",
            title: "The Problem Text",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "strategyText",
            title: "Strategy Text",
            type: "array",
            of: [{ type: "block" }],
        }),

        // --- STATS / RESULTS ---
        defineField({
            name: "resultsTitle",
            title: "Results Section Title",
            type: "string",
        }),
        defineField({
            name: "stats",
            title: "Statistics / Results",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "value", title: "Value (e.g. 35%)", type: "string" }),
                        defineField({ name: "label", title: "Label", type: "string" }),
                    ],
                },
            ],
        }),

        // --- PROCESS / PHASES ---
        defineField({
            name: "processSectionTitle",
            title: "Process Section Title",
            type: "string",
        }),
        defineField({
            name: "phases",
            title: "Process Phases",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "phaseNumber", title: "Phase Number", type: "string" }),
                        defineField({ name: "title", title: "Phase Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text" }),
                        defineField({ name: "testimonialSnippet", title: "Deliverable / Snippet", type: "string" }),
                        defineField({ name: "displayImage", title: "Phase Image", type: "image" }),
                    ],
                },
            ],
        }),

        // --- FOOTER / EXTRAS ---
        defineField({
            name: "fullWidthImage",
            title: "Full Width Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "clientLogo",
            title: "Client Logo",
            type: "image",
        }),
        defineField({
            name: "quote",
            title: "Client Quote/Testimonial",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
});