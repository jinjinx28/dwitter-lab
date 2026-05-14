import * as repository from '../repository/tweets.js';

/* MyTweet Update*/
export const getMyTweetsUpdate = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  console.log(id, content, req.user.id);

// 유효성 체크는 프론트에서 진행하기 !!
//   if (!content?.trim()) {
//     return res.status(400).json({ message: '내용을 입력하세요.' });
//   }

  try {
    // const [rows] = await pool.query('SELECT * FROM tweets WHERE id = ?', [id]);
    // if (!rows.length)        return res.status(404).json({ message: '트윗을 찾을 수 없습니다.' });
    // if (rows[0].user_id !== req.user.id)
    //   return res.status(403).json({ message: '수정 권한이 없습니다.' });

    // await pool.query('UPDATE tweets SET content = ? WHERE id = ?', [content.trim(), id]);
    await repository.getUpdate(id, content, req.user.id);
    res.json({ message: '수정되었습니다.' });
  } catch (err) {
    console.error('[PUT /tweets/:id]', err);
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