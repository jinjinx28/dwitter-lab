import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as repository from "../repository/signUp.js";

const SECRET = 'YOUR_SECRET_KEY'; 

export const getAuth = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await repository.getLogin(username);
    const valid = user.count && await bcrypt.compare(password, user.password);

    if (!user.count || !valid) {
      return res.status(401).json({ message: '아이디 또는 비밀번호가 틀렸습니다.' });
    }

    const token = jwt.sign({
      id: user.id,
      username: user.username
    }, SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        profileImage: user.avatar_url
      }
    });
  } catch (error) {
    res.status(500).json({ message: '서버 에러' });
  }
};