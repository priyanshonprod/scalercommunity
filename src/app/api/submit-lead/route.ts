import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    console.log('Received lead data:', data)

    // Google Sheets Web App URL
    const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || ''

    if (!GOOGLE_SHEETS_URL) {
      console.warn('Google Sheets URL not configured')
      return NextResponse.json({ success: true })
    }

    console.log('Submitting to Google Sheets:', GOOGLE_SHEETS_URL)

    // Submit to Google Sheets with URL parameters
    const params = new URLSearchParams({
      timestamp: data.timestamp || '',
      email: data.email || '',
      fullName: data.fullName || '',
      graduationYear: data.graduationYear || '',
      jobTitle: data.jobTitle || '',
      program: data.program || '',
      mobile: data.mobile || '',
      source: data.source || ''
    })

    const response = await fetch(`${GOOGLE_SHEETS_URL}?${params.toString()}`, {
      method: 'GET',
      redirect: 'follow'
    })

    console.log('Google Sheets response status:', response.status)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error)
    return NextResponse.json({ success: true })
  }
}
