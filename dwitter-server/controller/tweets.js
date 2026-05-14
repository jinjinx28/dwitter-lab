import * as repository from '../repository/tweets.js';

/* MyTweet Create */
export const createMyTweet = async (req, res) => {
  const { content } = req.body;

  console.log(content, req.user.id);
  
//   if (!content?.trim()) {
//     return res.status(400).json({ message: '내용을 입력하세요.' });
//   }

  try {
    const [result] = await pool.query(
      'INSERT INTO tweets (user_id, content) VALUES (?, ?)',
      [req.user.id, content.trim()]
    );
    const [rows] = await pool.query(
      `${TWEET_SELECT} WHERE t.id = ?`,
      [result.insertId]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('[POST /tweets]', err);
    res.status(500).json({ message: '서버 오류' });
  }
};


/* MyTweet Update */
export const getMyTweetsUpdate = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    await repository.getUpdate(id, content, req.user.id);
    res.json({ message: '수정되었습니다.' });
  } catch (err) {
    console.error('[PUT /tweets/:id]', err);
    res.status(500).json({ message: '서버 오류' });
  }
};

/* MyTweet Delete*/
export const getMyTweetsDelete = async (req, res) => {
  const { id } = req.params;

 try {
    const rows = await repository.getDelete(id, req.user.id);
    res.json({ message: '삭제되었습니다.' });
  } catch (err) {
    console.error('[DELETE /tweets/:id]', err);
    res.status(500).json({ message: '서버 오류' });
  }
};

/* MyTweets */
export const getMyTweets = async (req, res) => {
    try {
        const rows = await repository.getMyTweets(req.user.id);
        res.json(rows);
    } catch (err) {
        console.error('[GET /tweets/my]', err);
        res.status(500).json({ message: '서버 오류' });
    }
}