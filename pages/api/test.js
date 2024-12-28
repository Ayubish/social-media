import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const result = await query('SELECT NOW() AS current_time');
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed', details: error.message });
  }
}
