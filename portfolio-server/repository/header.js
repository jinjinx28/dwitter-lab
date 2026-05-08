import db from '../db/connection.js';

export const getHeader = async () => {
    const sql = `select header from portfolio;`;
    const [results, fields] = await db.execute(sql, []);
    
    return results[0] ? results[0].header : null;
}