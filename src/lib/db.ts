import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default pool

// Initialize votes table
export async function initializeDatabase() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS votes (
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      question_id VARCHAR(255) NOT NULL,
      vote_type VARCHAR(10) NOT NULL CHECK (vote_type IN ('up', 'down')),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, question_id)
    );

    CREATE INDEX IF NOT EXISTS idx_votes_question_id ON votes(question_id);
    CREATE INDEX IF NOT EXISTS idx_votes_user_id ON votes(user_id);
  `

  try {
    await pool.query(createTableQuery)
    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Error initializing database:', error)
    throw error
  }
}

// Get user's vote for a question
export async function getUserVote(userId: string, questionId: string) {
  const result = await pool.query(
    'SELECT vote_type FROM votes WHERE user_id = $1 AND question_id = $2',
    [userId, questionId]
  )
  return result.rows[0]?.vote_type || null
}

// Cast or update a vote
export async function castVote(userId: string, questionId: string, voteType: 'up' | 'down') {
  const query = `
    INSERT INTO votes (user_id, question_id, vote_type)
    VALUES ($1, $2, $3)
    ON CONFLICT (user_id, question_id)
    DO UPDATE SET vote_type = $3, updated_at = CURRENT_TIMESTAMP
    RETURNING vote_type
  `
  const result = await pool.query(query, [userId, questionId, voteType])
  return result.rows[0]
}

// Remove a vote
export async function removeVote(userId: string, questionId: string) {
  await pool.query(
    'DELETE FROM votes WHERE user_id = $1 AND question_id = $2',
    [userId, questionId]
  )
}

// Get vote counts for a question
export async function getVoteCounts(questionId: string) {
  const result = await pool.query(
    `SELECT
      COUNT(CASE WHEN vote_type = 'up' THEN 1 END) as upvotes,
      COUNT(CASE WHEN vote_type = 'down' THEN 1 END) as downvotes
    FROM votes WHERE question_id = $1`,
    [questionId]
  )
  return {
    upvotes: parseInt(result.rows[0].upvotes) || 0,
    downvotes: parseInt(result.rows[0].downvotes) || 0,
  }
}
