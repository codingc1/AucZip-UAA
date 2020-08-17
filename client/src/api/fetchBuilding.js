import axios from "axios";
// const baseUrl = "http://localhost:3040";
// const baseUrl = "http://54.180.105.165:3040";
const baseUrl = process.env.REACT_APP_AXIOS_URL;
const awsUrl = "http://54.180.105.165:3040";
const instance = axios.create({
  timeout: 1000,
});
//빌딩정보 api
export function fetchBuildingInfo() {
  return axios.get(awsUrl + "/building/info");
}
//login
export function fetchSignIn(userInfo) {
  // const userInfo = {
  //   email,
  //   password,
  // };
  console.log(baseUrl, "baseUrl");
  return axios.post(baseUrl + "/user/signin", userInfo);
}
