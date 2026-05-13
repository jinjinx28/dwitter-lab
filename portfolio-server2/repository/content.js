import db from '../db/connection.js';    

export const getHome = async () => {
    const sql = `select home from portfolio`;
    const [results] = await db.execute(sql, []);
    return results[0]?results[0].home : null;
}

export const getAbout = async () => {
    const sql = `select about from portfolio`;
    const [results] = await db.execute(sql, []);
    return results[0]?results[0].about : null;
}

export const getSkills = async () => {
    const sql = `select skills from portfolio`;
    const [results] = await db.execute(sql, []);
    return results[0]?results[0].skills : null;
}

export const getWork = async () => {
    const sql = `select work from portfolio`;
    const [results] = await db.execute(sql, []);
    return results[0]?results[0].work : null;
}

export const getTestimonials = async () => {
    const sql = `select testimonials from portfolio`;
    const [results] = await db.execute(sql, [])
    return results[0]?results[0].testimonials : null;
}

export const getProject = async () => {
    const sql = `select project from portfolio`;
    const [results] = await db.execute(sql, []);
    return results[0]?results[0].project : null;
}