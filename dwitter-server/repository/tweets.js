import pool from '../db.js';

export const getUpdate = async(id, content, user_id) => {
    const sql = `UPDATE tweets SET content = ? WHERE id = ? and user_id = ? `;
    const [result] = await pool.execute(sql,[content, id, user_id]);
    console.log('result :: ', result);
    
}

export const getMyTweets = async(id) => {
    console.log('id-->', id);

    const sql = `
        select 
            t.id,
            t.content,
            t.created_at,
            u.id as user_id,
            u.username,
            u.avatar_url
        from tweets t
        join users u on t.user_id = u.id
        where t.user_id = ? order by t.created_at desc
    `;

    const [rows] = await pool.execute(sql, [id]);
    console.log(rows);
    return rows;
}