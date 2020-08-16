function getToken() {
  const token = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")).token
    : null;
  console.log(token, "token get!!");
  return token;
}

export default getToken;
