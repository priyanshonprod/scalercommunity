export interface Question {
  _id: string
  title: string
  slug: string
  body?: any[]
  category: string
  tags: string[]
  answer?: Answer
  upvotes: number
  downvotes: number
  publishedAt: string
  excerpt?: string
}

export interface Answer {
  body: any[]
  resources?: Resource[]
}

export interface Resource {
  title: string
  url: string
}

export interface Vote {
  userId: string
  questionId: string
  voteType: 'up' | 'down'
}

export const CATEGORIES: Record<string, string> = {
  'dsa': 'Data Structures & Algorithms',
  'system-design': 'System Design',
  'web-dev': 'Web Development',
  'database': 'Database',
  'devops': 'DevOps',
  'languages': 'Programming Languages',
  'career': 'Career',
  'interview': 'Interview Prep',
}
