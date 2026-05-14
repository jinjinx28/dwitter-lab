import * as repository from '../repository/tweets.js';

export const getMyTweets = async (req, res) => {
    try {
        const rows = await repository.getMyTweets(req.user.id);
        // const [rows] = await pool.query(
        // `${TWEET_SELECT} WHERE t.user_id = ? ORDER BY t.created_at DESC`,
        // [req.user.id]
        // );
        res.json(rows);
    } catch (err) {
        console.error('[GET /tweets/my]', err);
        res.status(500).json({ message: '서버 오류' });
    }
}