import { Question } from './types'

export const mockQuestions: Question[] = [
  {
    _id: '1',
    title: 'What is the time complexity of QuickSort in the worst case?',
    slug: 'quicksort-worst-case-time-complexity',
    category: 'dsa',
    tags: ['sorting', 'algorithms', 'time-complexity'],
    upvotes: 42,
    downvotes: 3,
    publishedAt: '2024-01-15T10:00:00Z',
    excerpt: 'QuickSort is one of the most efficient sorting algorithms, but its worst-case performance can be problematic. Understanding when this occurs is crucial for technical interviews...',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'QuickSort is one of the most efficient sorting algorithms, but its worst-case performance can be problematic. Understanding when this occurs is crucial for technical interviews.',
          },
        ],
      },
    ],
    answer: {
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'The worst-case time complexity of QuickSort is O(n²). This occurs when the pivot selection consistently results in the most unbalanced partitions possible.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Common scenarios that lead to worst-case performance:',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Already sorted array (ascending or descending) with first/last element as pivot',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Array with all identical elements',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'To mitigate this, use randomized pivot selection or the median-of-three method.',
            },
          ],
        },
      ],
      resources: [
        {
          title: 'QuickSort Algorithm - GeeksforGeeks',
          url: 'https://www.geeksforgeeks.org/quick-sort/',
        },
      ],
    },
  },
  {
    _id: '2',
    title: 'How does database indexing work and when should you use it?',
    slug: 'database-indexing-how-it-works',
    category: 'database',
    tags: ['indexing', 'performance', 'sql'],
    upvotes: 38,
    downvotes: 2,
    publishedAt: '2024-01-14T09:00:00Z',
    excerpt: 'Database indexing is a crucial optimization technique that can dramatically improve query performance. Learn when and how to implement indexes effectively...',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Database indexing is a crucial optimization technique that can dramatically improve query performance. Learn when and how to implement indexes effectively.',
          },
        ],
      },
    ],
    answer: {
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'A database index is a data structure that improves the speed of data retrieval operations. Think of it like the index in a book - instead of reading every page, you can jump directly to the relevant section.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'When to use indexes:',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Columns frequently used in WHERE clauses',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Columns used in JOIN operations',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Columns used in ORDER BY clauses',
            },
          ],
        },
      ],
      resources: [
        {
          title: 'Database Indexing Explained',
          url: 'https://use-the-index-luke.com/',
        },
      ],
    },
  },
  {
    _id: '3',
    title: 'What is the difference between REST and GraphQL?',
    slug: 'rest-vs-graphql-differences',
    category: 'web-dev',
    tags: ['api', 'rest', 'graphql'],
    upvotes: 56,
    downvotes: 5,
    publishedAt: '2024-01-13T08:00:00Z',
    excerpt: 'Both REST and GraphQL are popular approaches for building APIs, but they have different philosophies and use cases. Understanding these differences helps you choose the right approach...',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Both REST and GraphQL are popular approaches for building APIs, but they have different philosophies and use cases.',
          },
        ],
      },
    ],
    answer: {
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'REST (Representational State Transfer) and GraphQL are both API architectures, but they differ fundamentally in how clients request data.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Key differences:',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• REST: Multiple endpoints, fixed data structures',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• GraphQL: Single endpoint, client specifies needed data',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• REST: Over-fetching/under-fetching common',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• GraphQL: Get exactly what you need',
            },
          ],
        },
      ],
      resources: [
        {
          title: 'GraphQL vs REST - A Complete Comparison',
          url: 'https://www.apollographql.com/blog/graphql-vs-rest',
        },
      ],
    },
  },
  {
    _id: '4',
    title: 'How do you design a URL shortener system?',
    slug: 'design-url-shortener-system',
    category: 'system-design',
    tags: ['system-design', 'scalability', 'interview'],
    upvotes: 89,
    downvotes: 4,
    publishedAt: '2024-01-12T07:00:00Z',
    excerpt: 'Designing a URL shortener is a classic system design interview question. It covers key concepts like hashing, database design, and handling high traffic...',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Designing a URL shortener is a classic system design interview question. It covers key concepts like hashing, database design, and handling high traffic.',
          },
        ],
      },
    ],
    answer: {
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'A URL shortener takes a long URL and creates a shorter alias. The system needs to handle creating short URLs and redirecting users to original URLs.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Key components:',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '1. Short key generation (Base62 encoding or hash functions)',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '2. Database to store mappings (NoSQL for scale)',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '3. Cache layer (Redis) for hot URLs',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '4. Load balancer for high availability',
            },
          ],
        },
      ],
      resources: [
        {
          title: 'System Design: URL Shortener',
          url: 'https://systemdesign.one/url-shortening-system-design/',
        },
      ],
    },
  },
  {
    _id: '5',
    title: 'What are the SOLID principles in object-oriented programming?',
    slug: 'solid-principles-oop',
    category: 'languages',
    tags: ['oop', 'design-patterns', 'best-practices'],
    upvotes: 67,
    downvotes: 2,
    publishedAt: '2024-01-11T06:00:00Z',
    excerpt: 'SOLID principles are five design principles that help developers write maintainable, flexible, and scalable code. Every developer should understand these fundamentals...',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'SOLID principles are five design principles that help developers write maintainable, flexible, and scalable code.',
          },
        ],
      },
    ],
    answer: {
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'SOLID is an acronym for five object-oriented design principles:',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• S - Single Responsibility Principle: A class should have one reason to change',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• O - Open/Closed Principle: Open for extension, closed for modification',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• L - Liskov Substitution Principle: Subtypes must be substitutable for base types',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• I - Interface Segregation Principle: Many specific interfaces over one general',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• D - Dependency Inversion Principle: Depend on abstractions, not concretions',
            },
          ],
        },
      ],
      resources: [
        {
          title: 'SOLID Principles Explained',
          url: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design',
        },
      ],
    },
  },
  {
    _id: '6',
    title: 'How to prepare for a technical interview at FAANG companies?',
    slug: 'faang-technical-interview-preparation',
    category: 'interview',
    tags: ['interview', 'faang', 'career'],
    upvotes: 124,
    downvotes: 8,
    publishedAt: '2024-01-10T05:00:00Z',
    excerpt: 'Getting into FAANG companies requires structured preparation. This guide covers everything from data structures to behavioral questions...',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Getting into FAANG companies requires structured preparation. This guide covers everything from data structures to behavioral questions.',
          },
        ],
      },
    ],
    answer: {
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'A comprehensive FAANG preparation strategy should cover multiple areas:',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '1. Data Structures & Algorithms: Master arrays, trees, graphs, dynamic programming',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '2. System Design: Learn to design scalable systems',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '3. Behavioral Questions: Prepare STAR method responses',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '4. Practice: Solve 150-200 LeetCode problems',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '5. Mock Interviews: Practice with peers or platforms',
            },
          ],
        },
      ],
      resources: [
        {
          title: 'Tech Interview Handbook',
          url: 'https://www.techinterviewhandbook.org/',
        },
      ],
    },
  },
  {
    _id: '7',
    title: 'What is Docker and how does containerization work?',
    slug: 'docker-containerization-explained',
    category: 'devops',
    tags: ['docker', 'containers', 'devops'],
    upvotes: 45,
    downvotes: 1,
    publishedAt: '2024-01-09T04:00:00Z',
    excerpt: 'Docker has revolutionized how we deploy applications. Understanding containerization is essential for modern software development...',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Docker has revolutionized how we deploy applications. Understanding containerization is essential for modern software development.',
          },
        ],
      },
    ],
    answer: {
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, isolated environments.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Key concepts:',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Images: Read-only templates with instructions',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Containers: Runnable instances of images',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Dockerfile: Script to build images',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '• Docker Compose: Multi-container orchestration',
            },
          ],
        },
      ],
      resources: [
        {
          title: 'Docker Documentation',
          url: 'https://docs.docker.com/get-started/',
        },
      ],
    },
  },
  {
    _id: '8',
    title: 'How do you handle state management in React applications?',
    slug: 'react-state-management',
    category: 'web-dev',
    tags: ['react', 'state-management', 'redux'],
    upvotes: 33,
    downvotes: 4,
    publishedAt: '2024-01-08T03:00:00Z',
    excerpt: 'State management is one of the most important aspects of React development. Choose the right approach based on your application complexity...',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'State management is one of the most important aspects of React development. Choose the right approach based on your application complexity.',
          },
        ],
      },
    ],
    answer: {
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'React offers multiple state management approaches depending on complexity:',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '1. useState/useReducer: Local component state',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '2. Context API: Prop drilling solution for medium apps',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '3. Redux/Zustand: Global state for complex apps',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '4. React Query/SWR: Server state management',
            },
          ],
        },
      ],
      resources: [
        {
          title: 'React State Management Guide',
          url: 'https://react.dev/learn/managing-state',
        },
      ],
    },
  },
]
