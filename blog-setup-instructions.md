# Star Hi Herbs Blog Section Setup Instructions

This document provides instructions for setting up and maintaining the blog section of the Star Hi Herbs website.

## Installation

1. Install the required dependencies by running:

```bash
npm install react-markdown remark-gfm rehype-raw rehype-slug react-syntax-highlighter @types/react-syntax-highlighter
```

Or use the provided batch file:

```bash
./install-blog-deps.bat
```

## Blog Images

The blog section requires the following image directories and files:

1. Create the following directories if they don't exist:
   - `/public/images/blog/`
   - `/public/images/blog/authors/`

2. Add the following images:
   - Blog hero image: `/public/images/blog/blog-hero.jpg`
   - Blog category image: `/public/images/blog/blog-category.jpg`
   - Blog post featured image: `/public/images/blog/probiotics-manufacturing.jpg`
   - Author profile images:
     - `/public/images/blog/authors/rajesh-kumar.jpg`
     - `/public/images/blog/authors/priya-sharma.jpg`
     - `/public/images/blog/authors/amit-patel.jpg`

Note: The blog section will work without these images, but it will look better with them.

## Adding New Blog Posts

To add a new blog post:

1. Open the file `src/data/blog.ts`
2. Add a new entry to the `blogPosts` array following the existing format
3. Make sure to include:
   - A unique ID
   - A unique slug
   - An author ID that exists in the `blogAuthors` array
   - A category ID that exists in the `blogCategories` array
   - Tag IDs that exist in the `blogTags` array
   - A table of contents array with IDs matching the headings in your content

Example:

```typescript
{
  id: 2,
  title: "New Blog Post Title",
  slug: "new-blog-post-title",
  excerpt: "A brief summary of the blog post...",
  image: "/images/blog/new-blog-post.jpg",
  publishedAt: "2024-05-15T08:00:00Z",
  updatedAt: "2024-05-15T08:00:00Z",
  authorId: 1,
  reviewerId: 2,
  categoryId: 1,
  tagIds: [1, 3, 5],
  readTime: 8,
  tableOfContents: [
    { id: "introduction", text: "Introduction", level: 2 },
    { id: "first-section", text: "First Section", level: 2 },
    { id: "subsection", text: "Subsection", level: 3 },
    { id: "conclusion", text: "Conclusion", level: 2 }
  ],
  content: `
## Introduction

Your blog post content in Markdown format...

## First Section

More content...

### Subsection

Even more content...

## Conclusion

Concluding remarks...
  `
}
```

## Adding New Authors, Categories, or Tags

To add new authors, categories, or tags:

1. Open the file `src/data/blog.ts`
2. Add a new entry to the appropriate array (`blogAuthors`, `blogCategories`, or `blogTags`)
3. Make sure to include a unique ID

## Blog URLs

The blog section uses the following URL structure:

- Blog listing page: `/blog`
- Single blog post: `/blog/[slug]` (e.g., `/blog/science-behind-probiotics-gut-health-supplements`)
- Category page: `/blog/category/[category]` (e.g., `/blog/category/technical-guides`)

## Troubleshooting

If you encounter any issues with the blog section:

1. Make sure all required dependencies are installed
2. Check that the image paths are correct
3. Verify that all IDs referenced in blog posts exist in their respective arrays
4. Ensure that the Markdown content is properly formatted

For syntax highlighting issues, you can switch to the `SimpleBlogContent` component by editing `app/blog/[slug]/page.tsx`.
