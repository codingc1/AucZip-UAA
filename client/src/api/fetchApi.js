import axios from "axios";
// const aa ="http://ec2-54-180-105-165.ap-northeast-2.compute.amazonaws.com:3040";
// axios.defaults.withCredentials = true
const baseUrl = "http://localhost:3040";
// const baseUrl = "http://54.180.105.165:3040";
const instance = axios.create({
  timeout: 1000,
});
//빌딩정보 api
export function fetchBuildingInfo() {
  return axios.get("http://54.180.105.165:3040/building/info");
}
//login
export function fetchSignIn(userInfo) {
  // const userInfo = {
  //   email,
  //   password,
  // };
  return axios.post(baseUrl + "/user/signin", userInfo);
}
export function fetchSignUp(userInfo) {
  return axios.post(baseUrl + "/user/signup", userInfo);
}
//googleLogin
export function googleSignin(userInfo) {
  return axios.post(baseUrl + "/user/googleSignin", userInfo);
}
export function googleSignup(userInfo) {
  return axios.post(baseUrl + "/user/googleSignin", userInfo);
}
//USER INFO
export function fetchUserInfo(token) {
  // const userInfo = {
  //   email,
  //   password,
  // };

  return axios.get(baseUrl + "/user/info", {
    headers: { Authorization: "Bearer " + token },
  });
}

//4weeks
export function fetchUserInfoGet() {
  return axios.get(baseUrl + "/users/info");
}
export function putUserInfo(username) {
  //유저정보 수정
  const userInfo = {
    username,
  };
  return axios.put(baseUrl + "/users/info", userInfo);
}

export function postSignOut() {
  return axios.post(baseUrl + "/users/signOut", {});
}

export function fetchJudicial(keyword) {
  //키워드로 검색
  const obj = {
    keyword,
  };
  return axios.post(baseUrl + "/search/post", obj);
}

export function lawgo(keywords) {
  //키워드로 검색
  const number = Number(keywords);
  return axios.get(
    `http://www.law.go.kr/LSW/precInfoP.do?precSeq=${number}&mode=0`
  );
}
export function fetchKeqyWords() {
  return axios.get(baseUrl + "/keyword/get");
}
