import pool from "../db.js";

export const getLogin = async(username) => {
  const sql = `
        select  count(username) as count,
            (select id from users where username = ?) as id,
            (select username from users where username = ?) as username,
            (select password from users where username = ?) as password,
            (select avatar_url from users where username = ?) as avatar_url
      from users
        where username=?
  `;
  const [rows] = await pool.execute(sql, [username, username, username, username, username]);
  return rows[0];
}

export const signUp = async (userData) => {
  const { userName, password, profileImage } = userData;

  const sql = `insert into users (username, password, avatar_url, created_at) 
                values (?, ?, ?, now())`;

  const [results] = await pool.execute(sql, [userName, password, profileImage]);

  return results;
};