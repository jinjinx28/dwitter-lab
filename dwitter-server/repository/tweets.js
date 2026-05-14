import pool from '../db.js';


export const getTweet = async(id) => {
    const sql = `
        SELECT
            t.id,
            t.content,
            t.created_at,
            u.id       AS user_id,
            u.username,
            u.avatar_url
        FROM tweets t
        INNER JOIN users u ON t.user_id = u.id
        WHERE t.id = ?
    `;
    const [result] = await pool.execute(sql, [id]);
    return result[0];
}


export const create = async(content, user_id) => {
    const sql = `INSERT INTO tweets (user_id, content) VALUES (?, ?)`;
    const [result] = await pool.execute(sql, [user_id, content]);
    return result;
}


export const getDelete = async(id, user_id) => {
    const sql = `delete from tweets where id= ? and user_id = ?`;
    const [result] = await pool.execute(sql, [id, user_id]);
    return result.affectedRows;
}


export const getUpdate = async(id, content, user_id) => {
    const sql = `UPDATE tweets SET content = ? WHERE id = ? and user_id = ?`;
    const [result] = await pool.execute(sql, [content, id, user_id]);
    return result.affectedRows;    
}


export const getMyTweets = async(id) => {
    const sql = `
        SELECT
            t.id,
            t.content,
            t.created_at,
            u.id AS user_id,
            u.username,
            u.avatar_url
        FROM tweets t
        INNER JOIN users u ON t.user_id = u.id
        WHERE t.user_id = ? ORDER BY t.created_at DESC    
    `;
    const [rows] = await pool.execute(sql, [id]);
    
    return rows;    
}