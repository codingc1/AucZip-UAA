// 액션 타입 정의
const INFO = "info/INFO";

// 액션 생성함수 정의
export const putAcc = (obj) => ({
  type: INFO,
  obj,
});

// 초기상태 정의
const initialState = {
  info: {},
};

// 리듀서 작성
export default function accModule(state = initialState, action) {
  switch (action.type) {
    case INFO:
      return {
        ...state,
        info: action.obj,
      };

    default:
      return state;
  }
}
