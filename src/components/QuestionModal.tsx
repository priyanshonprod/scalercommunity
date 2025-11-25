'use client'

import { useEffect } from 'react'
import VoteButtons from './VoteButtons'
import { Question, CATEGORIES } from '@/lib/types'

interface QuestionModalProps {
  question: Question
  onClose: () => void
}

export default function QuestionModal({ question, onClose }: QuestionModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-16">
        <div className="relative bg-white w-full max-w-3xl shadow-xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-scaler-gray hover:text-scaler-dark transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Question Section */}
            <div className="flex gap-6">
              {/* Vote Buttons */}
              <div className="hidden md:block">
                <VoteButtons
                  questionId={question._id}
                  initialUpvotes={question.upvotes}
                  initialDownvotes={question.downvotes}
                />
              </div>

              {/* Question Content */}
              <div className="flex-1">
                <h1 className="text-xl md:text-2xl font-bold text-scaler-dark mb-4 pr-8">
                  {question.title}
                </h1>

                {/* Tags and Category */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-scaler-blue/10 text-scaler-blue">
                    {CATEGORIES[question.category] || question.category}
                  </span>
                  {question.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 text-xs bg-gray-100 text-scaler-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Question Body */}
                {question.body && (
                  <div className="prose prose-scaler mb-6 text-sm text-scaler-gray whitespace-pre-wrap">
                    {question.body}
                  </div>
                )}

                {/* Mobile Vote Buttons */}
                <div className="md:hidden mb-4">
                  <div className="flex items-center gap-4">
                    <VoteButtons
                      questionId={question._id}
                      initialUpvotes={question.upvotes}
                      initialDownvotes={question.downvotes}
                    />
                    <span className="text-sm text-scaler-gray">
                      {question.upvotes - question.downvotes} votes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-gray-200" />

            {/* Answer Section */}
            {question.answer && (
              <div>
                <h2 className="text-lg font-semibold text-scaler-dark mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Answer
                </h2>

                {/* Answer Body */}
                <div className="prose prose-scaler max-w-none text-sm text-scaler-gray whitespace-pre-wrap">
                  {question.answer.body}
                </div>

                {/* Resources */}
                {question.answer.resources && question.answer.resources.length > 0 && (
                  <div className="mt-6 p-4 bg-gray-50">
                    <h3 className="font-semibold text-scaler-dark mb-3 text-sm">
                      Additional Resources
                    </h3>
                    <ul className="space-y-2">
                      {question.answer.resources.map((resource, index) => (
                        <li key={index}>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-scaler-blue hover:text-scaler-blue-dark transition-colors flex items-center gap-2 text-sm"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            {resource.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Share and Meta */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-sm text-scaler-gray">
              <div>
                Published:{' '}
                {new Date(question.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Link copied to clipboard!')
                }}
                className="flex items-center gap-2 hover:text-scaler-blue transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
