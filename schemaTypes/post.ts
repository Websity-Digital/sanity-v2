import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // ✅ Focus keyword (internal SEO use only)
    defineField({
      name: "focusKeyword",
      title: "Focus Keyword (Primary Keyword)",
      type: "string",
      description: "Internal use only. Used for SEO targeting reference.",
    }),

    // ✅ SEO Object
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seo",
    }),

    defineField({
      name: "isFeatured",
      title: "Featured Post",
      type: "boolean",
    }),

    defineField({
      name: "subtext",
      title: "Subtext",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author ? `by ${author}` : "",
      };
    },
  },
});