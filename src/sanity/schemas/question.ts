import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Question Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Question Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'Python', value: 'python' },
              { title: 'Java', value: 'java' },
              { title: 'C++', value: 'cpp' },
              { title: 'SQL', value: 'sql' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Data Structures & Algorithms', value: 'dsa' },
          { title: 'System Design', value: 'system-design' },
          { title: 'Web Development', value: 'web-dev' },
          { title: 'Database', value: 'database' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Programming Languages', value: 'languages' },
          { title: 'Career', value: 'career' },
          { title: 'Interview Prep', value: 'interview' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'object',
      fields: [
        {
          name: 'body',
          title: 'Answer Body',
          type: 'array',
          of: [
            {
              type: 'block',
            },
            {
              type: 'code',
              options: {
                language: 'javascript',
                languageAlternatives: [
                  { title: 'JavaScript', value: 'javascript' },
                  { title: 'TypeScript', value: 'typescript' },
                  { title: 'Python', value: 'python' },
                  { title: 'Java', value: 'java' },
                  { title: 'C++', value: 'cpp' },
                  { title: 'SQL', value: 'sql' },
                ],
              },
            },
            {
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
        {
          name: 'resources',
          title: 'Additional Resources',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'url', type: 'url', title: 'URL' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'upvotes',
      title: 'Upvotes (Cached)',
      type: 'number',
      initialValue: 0,
      readOnly: true,
    }),
    defineField({
      name: 'downvotes',
      title: 'Downvotes (Cached)',
      type: 'number',
      initialValue: 0,
      readOnly: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
    },
    prepare(selection) {
      const { title, category } = selection
      return {
        title: title,
        subtitle: category,
      }
    },
  },
})
