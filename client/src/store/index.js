import { combineReducers } from "redux";
import isLoggedin from "./isLoggedIn";
import info from "./info";

// 루트 리듀서
export default combineReducers({
  isLoggedin,
  info,
  // 다른 리듀서를 만들면 여기에 넣어서 합쳐줌,
});

/*
  들어오게되는 초기값 : 

  {
      counter: {
          isLoggedin: false,
      },
      // 합치면 초기값이 여기에 객체 형태로 들어옴
  }
*/
