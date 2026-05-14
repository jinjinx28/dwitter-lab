import express from 'express';
import pool from '../db.js';
import authMiddleware from '../middleware/auth.middleware.js';
import * as controller from '../controller/tweets.js';
import { getMyTweets } from '../repository/tweets.js';

const router = express.Router();

const TWEET_SELECT = `
  SELECT
    t.id,
    t.content,
    t.created_at,
    u.id       AS user_id,
    u.username,
    u.avatar_url
  FROM tweets t
  JOIN users u ON t.user_id = u.id
`;

/**
 * GET /api/tweets
 * 전체 트윗 (최신순)
 */
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(`${TWEET_SELECT} ORDER BY t.created_at DESC`);
    res.json(rows);
  } catch (err) {
    console.error('[GET /tweets]', err);
    res.status(500).json({ message: '서버 오류' });
  }
});

/**
 * GET /api/tweets/my
 * 내 트윗 (인증 필요)
 * 반드시!! 로그인 인증이 완료된 후 실행됨
 */
router.get('/my', authMiddleware, controller.getMyTweets);

/**
 * POST /api/tweets
 * 트윗 작성 (인증 필요)
 */
router.post('/', authMiddleware, controller.createMyTweet);

/**
 * PUT /api/tweets/:id
 * 트윗 수정 (인증 + 본인만)
 */
router.put('/:id', authMiddleware, controller.getMyTweetsUpdate);

/**
 * DELETE /api/tweets/:id
 * 트윗 삭제 (인증 + 본인만)
 */
router.delete('/:id', authMiddleware, controller.getMyTweetsDelete);

export default router;