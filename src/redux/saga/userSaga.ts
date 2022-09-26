import { User } from './../../lib/services/User';
import { call, put, takeEvery } from "redux-saga/effects";
import { loginSuccess, signupFailure, signupSuccess } from "../reducers/userSlice";

interface loginObject {
  emailLogin: string;
  passWordLogin: string;
}
interface signupObject{
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string
}
function* workLogin(action: {type: string; payload: loginObject}) {
  // const auth = yield call(() => fetch())
  yield put({type: loginSuccess, payload: "okeee"})
  console.log("okkk", action);
}

function* workSignup(action: {type: string; payload: signupObject}): any {
    const suData = {
      name: action.payload.name,
      email: action.payload.email,
      phone: action.payload.phone,
      password: action.payload.password,
      role: "USER"
    }
    try {
      const result = yield call(User.signup, suData)
      yield put(signupSuccess(result))
    } catch (error) {
      yield put(signupFailure(error))
    }
  }

export function* userSaga() {
  yield takeEvery("auth/login", workLogin);
  yield takeEvery("auth/signup", workSignup);
}
