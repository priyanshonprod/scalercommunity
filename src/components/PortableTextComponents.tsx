'use client'

import { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-6 relative">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Image'}
            width={800}
            height={450}
            className=""
          />
        </div>
      )
    },
    code: ({ value }) => {
      return (
        <pre className="my-4 p-4 bg-scaler-dark overflow-x-auto">
          <code className="text-sm text-white">
            {value.code}
          </code>
        </pre>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mb-4 mt-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold mb-3 mt-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold mb-2 mt-4">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-scaler-blue pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || ''
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-scaler-blue hover:text-scaler-blue-dark underline"
        >
          {children}
        </a>
      )
    },
    code: ({ children }) => (
      <code className="bg-gray-100 text-scaler-blue px-1.5 py-0.5 text-sm">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
}
