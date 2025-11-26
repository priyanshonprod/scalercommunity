import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Google Sheets Web App URL - You'll need to replace this with your actual Google Sheets script URL
    const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || ''

    if (!GOOGLE_SHEETS_URL) {
      console.warn('Google Sheets URL not configured')
      // Still return success to not block the user flow
      return NextResponse.json({ success: true })
    }

    // Submit to Google Sheets
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error)
    // Return success anyway to not block user flow
    return NextResponse.json({ success: true })
  }
}
