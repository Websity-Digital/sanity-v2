import { defineType, defineField } from "sanity";

export default defineType({
    name: "seo",
    title: "SEO Settings",
    type: "object",
    fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),

        defineField({
            name: "canonicalUrl",
            title: "Canonical URL",
            type: "url",
            description: "Leave empty to auto-generate from site URL + slug",
        }),

        defineField({
            name: "noIndex",
            title: "No Index",
            type: "boolean",
            initialValue: false,
        }),

        defineField({
            name: "noFollow",
            title: "No Follow",
            type: "boolean",
            initialValue: false,
        }),

        defineField({
            name: "focusKeywords",
            title: "Focus Keywords",
            type: "array",
            of: [{ type: "string" }],
            description: "Add keywords as separate items (best SEO convention).",
        }),
    ],
});