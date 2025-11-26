'use client'

import { useState } from 'react'

interface LeadFormModalProps {
  onClose: () => void
}

export default function LeadFormModal({ onClose }: LeadFormModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    graduationYear: '',
    jobTitle: '',
    program: '',
    mobile: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to Google Sheets
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Knowledge Hub'
        }),
      })

      if (response.ok) {
        // Show success message instead of redirecting
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Show success message anyway
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Generate graduation years from current year to 1970
  const currentYear = new Date().getFullYear()
  const graduationYears = Array.from({ length: currentYear - 1970 + 1 }, (_, i) => currentYear - i)

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-4xl shadow-xl flex overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Side - Infographic with Blue Gradient */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 p-8 flex-col justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Transform Your <br />
                <span className="text-yellow-400">Tech Career</span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Expert Mentorship</h3>
                    <p className="text-blue-200 text-xs">Learn from industry leaders at top tech companies</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Career Acceleration</h3>
                    <p className="text-blue-200 text-xs">Average 1.8x salary hike for our graduates</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Placement Support</h3>
                    <p className="text-blue-200 text-xs">Get hired at top product companies</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-sm font-semibold mb-2">Join 50,000+ successful learners</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {/* Profile photos with initials */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">AK</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">PS</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">RJ</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">SK</span>
                    </div>
                  </div>
                  <span className="text-yellow-400 text-xs">★★★★★ 4.8/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form or Success Message */}
          <div className="w-full md:w-1/2 p-8">
            {isSubmitted ? (
              // Success View
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Request Received!
                </h3>

                <p className="text-gray-700 mb-6 text-base max-w-md">
                  Our career counseling team will reach out to you within the next 24 hours.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md">
                  <p className="text-sm text-gray-700 mb-3">
                    Meanwhile, explore our Career Roadmap Tool to benchmark your profile and get insights for top companies.
                  </p>
                  <a
                    href="https://www.scaler.com/career-plan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-scaler-blue hover:bg-scaler-blue-dark text-white text-center py-3 rounded font-semibold transition-colors"
                  >
                    Try Career Roadmap Tool
                  </a>
                </div>

                <button
                  onClick={onClose}
                  className="text-scaler-blue hover:text-scaler-blue-dark font-medium text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              // Form View
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Start Your Journey
                </h3>
                <p className="text-gray-600 mb-6 text-sm">Get a free 1:1 career counseling session</p>

                <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none text-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none text-sm"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Graduation Year <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none text-sm"
                    value={formData.graduationYear}
                    onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                  >
                    <option value="">Select Year</option>
                    {graduationYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none text-sm"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  >
                    <option value="">Select Job title</option>
                    <option value="Engineering Leadership">Engineering Leadership</option>
                    <option value="Software Development Engineer (Backend)">Software Development Engineer (Backend)</option>
                    <option value="Software Development Engineer (Frontend)">Software Development Engineer (Frontend)</option>
                    <option value="Software Development Engineer (Full Stack)">Software Development Engineer (Full Stack)</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Android Engineer">Android Engineer</option>
                    <option value="iOS Engineer">iOS Engineer</option>
                    <option value="Devops Engineer">Devops Engineer</option>
                    <option value="Support Engineer">Support Engineer</option>
                    <option value="Research Engineer">Research Engineer</option>
                    <option value="Engineering Intern">Engineering Intern</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="Co-founder">Co-founder</option>
                    <option value="SDET">SDET</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Product Designer">Product Designer</option>
                    <option value="Backend Architect">Backend Architect</option>
                    <option value="Program Manager">Program Manager</option>
                    <option value="Release Engineer">Release Engineer</option>
                    <option value="Security Leadership">Security Leadership</option>
                    <option value="Database Administrator">Database Administrator</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Data Engineer">Data Engineer</option>
                    <option value="Non Coder">Non Coder</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Program <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none text-sm"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  >
                    <option value="">Select Program</option>
                    <option value="scaler-academy">Scaler Academy</option>
                    <option value="data-science-ml">Data Science and Machine Learning</option>
                    <option value="devops">DevOps</option>
                    <option value="ai-ml">AI and ML</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm rounded-l">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    pattern="[0-9]{10}"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r focus:border-blue-500 focus:outline-none text-sm"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>
              </div>

              <p className="text-xs text-gray-500">
                By continuing, I agree to Scaler's{' '}
                <a href="https://www.scaler.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Terms</a>
                {' '}and{' '}
                <a href="https://www.scaler.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a>
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded transition-colors"
              >
                {isSubmitting ? 'SUBMITTING...' : 'GET STARTED'}
              </button>
            </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
