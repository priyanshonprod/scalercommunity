import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Query to get all questions
export const questionsQuery = `*[_type == "question"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  tags,
  upvotes,
  downvotes,
  publishedAt,
  "excerpt": pt::text(body)[0..200]
}`

// Query to get a single question by slug
export const questionBySlugQuery = `*[_type == "question" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  body,
  category,
  tags,
  answer,
  upvotes,
  downvotes,
  publishedAt
}`

// Query to get questions by category
export const questionsByCategoryQuery = `*[_type == "question" && category == $category] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  tags,
  upvotes,
  downvotes,
  publishedAt,
  "excerpt": pt::text(body)[0..200]
}`

// Query to search questions
export const searchQuestionsQuery = `*[_type == "question" && (title match $searchTerm || pt::text(body) match $searchTerm)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  tags,
  upvotes,
  downvotes,
  publishedAt,
  "excerpt": pt::text(body)[0..200]
}`

// Get all categories with counts
export const categoriesQuery = `{
  "categories": *[_type == "question"] {
    category
  }
}`
