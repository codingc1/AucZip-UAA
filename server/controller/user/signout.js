const jwt = require("jsonwebtoken");

module.exports = {
  get: (req, res) => {
    // res.clearCookie('token',{path: '/'});
    // res.redirect('/');
    res.end();
  },
};
//만료토큰을 데이터베이스에서 삭제
//로그인: 액세스토큰 - 원래대로 발행
//갱신 토큰: 2주일로 발행
//갱신 토큰: 데이터베이스 저장 - 유저: refresh
