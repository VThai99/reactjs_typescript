import API from "../configAPI/API";
const controller = new AbortController();
const baseURL = "api/user";
const getUser = () => {
  return API.get(`${baseURL}`, { signal: controller.signal });
};
const signup = (data: any) => {
  return API.post(`${baseURL}`, data, { signal: controller.signal });
};
const cancelled = (): void => {
  controller.abort();
};
export const User = {
  getUser,
  signup,
  cancelled,
};
