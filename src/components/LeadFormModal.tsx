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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - redirect to Scaler
    window.open('https://www.scaler.com/academy/', '_blank')
    onClose()
  }

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

          {/* Left Side - Blue Gradient with Image */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-scaler-dark via-scaler-blue to-scaler-blue-light p-8 flex-col justify-center relative">
            <h2 className="text-2xl font-bold text-white mb-4">
              DSA and coding gets you started – <em>AI takes you further!</em>
            </h2>
            <p className="text-sm text-gray-200 mb-8">
              By 2030, AI could automate 30% of SDE work hours, making AI-skilled engineers indispensable
            </p>

            {/* Tech Icons */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-scaler-dark mb-1">
              Take the next step toward your
            </h3>
            <p className="text-scaler-blue font-semibold mb-6">AI-powered career</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-scaler-dark mb-1">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 focus:border-scaler-blue focus:outline-none text-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-scaler-dark mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Full Name"
                    className="w-full px-3 py-2 border border-gray-300 focus:border-scaler-blue focus:outline-none text-sm"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-scaler-dark mb-1">
                    Graduation Year <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:border-scaler-blue focus:outline-none text-sm text-gray-500"
                    value={formData.graduationYear}
                    onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                  >
                    <option value="">Year of Graduation</option>
                    {Array.from({ length: 10 }, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-scaler-dark mb-1">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:border-scaler-blue focus:outline-none text-sm text-gray-500"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  >
                    <option value="">Select Job Title</option>
                    <option value="student">Student</option>
                    <option value="fresher">Fresher</option>
                    <option value="sde1">SDE 1</option>
                    <option value="sde2">SDE 2</option>
                    <option value="senior">Senior Engineer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-scaler-dark mb-1">
                    Program <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:border-scaler-blue focus:outline-none text-sm text-gray-500"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  >
                    <option value="">Select Program</option>
                    <option value="academy">Scaler Academy</option>
                    <option value="dsml">Data Science & ML</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-scaler-dark mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    className="flex-1 px-3 py-2 border border-gray-300 focus:border-scaler-blue focus:outline-none text-sm"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  You'll receive an OTP on this number for verification
                </p>
              </div>

              <p className="text-xs text-gray-500">
                By continuing, I have read and agree to Scaler's{' '}
                <a href="https://www.scaler.com/terms" className="text-scaler-blue hover:underline">Terms</a>
                {' '}and{' '}
                <a href="https://www.scaler.com/privacy" className="text-scaler-blue hover:underline">Privacy Policy</a>
              </p>

              <button
                type="submit"
                className="w-full bg-scaler-blue hover:bg-scaler-blue-dark text-white font-semibold py-3 transition-colors"
              >
                CONTINUE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
