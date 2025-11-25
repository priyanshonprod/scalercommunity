import { Question } from './types'

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQtmqhvnTWLOYRd5S0CT7u5FLO8XrCZRRFwE5bfFRFQwBF4TbJFx_IXucg4yQjKRqx6RFtOsFqUjoex/pub?output=csv'

// Parse CSV text into array of objects
function parseCSV(csvText: string): Record<string, string>[] {
  const lines = csvText.split('\n')
  const headers = parseCSVLine(lines[0])
  const results: Record<string, string>[] = []

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim()) {
      const values = parseCSVLine(lines[i])
      const obj: Record<string, string> = {}
      headers.forEach((header, index) => {
        obj[header.trim()] = values[index] || ''
      })
      results.push(obj)
    }
  }

  return results
}

// Parse a single CSV line handling quoted values
function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }

  result.push(current.trim())
  return result
}

// Convert sheet row to Question type
function rowToQuestion(row: Record<string, string>): Question {
  return {
    _id: row.id || '',
    title: row.title || '',
    slug: row.slug || '',
    category: row.category || '',
    tags: row.tags ? row.tags.split(',').map(t => t.trim()) : [],
    excerpt: row.excerpt || '',
    body: row.body || '',
    answer: {
      body: row.answer || '',
      resources: []
    },
    upvotes: parseInt(row.upvotes) || 0,
    downvotes: parseInt(row.downvotes) || 0,
    publishedAt: row.publishedAt || new Date().toISOString()
  }
}

// Fetch questions from Google Sheet
export async function fetchQuestionsFromSheet(): Promise<Question[]> {
  try {
    const response = await fetch(SHEET_CSV_URL, {
      next: { revalidate: 60 } // Cache for 60 seconds
    })

    if (!response.ok) {
      throw new Error('Failed to fetch sheet data')
    }

    const csvText = await response.text()
    const rows = parseCSV(csvText)
    const questions = rows.map(rowToQuestion)

    return questions
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error)
    return []
  }
}
