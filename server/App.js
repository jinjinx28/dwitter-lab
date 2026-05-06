// 1. express 라이브러리 임포트
//const express = require('express'); -- type = commonjs
import express from 'express';
import cors from 'cors';

// 2. express 객체 생성
const PORT = 9000;
const app = express();

// 3. 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

// 4. 라우팅 
//http://localhost:9000/
app.get("/", (req, res, next) => {
    // res.send("서버 실행 테스트!!");
    res.json({"msg" : "서버 실행 테스트!!"});
});

// 5. 서버 시작
app.listen(PORT, () => {
    console.log(`서버 실행 ==>> ${PORT}`);  
})