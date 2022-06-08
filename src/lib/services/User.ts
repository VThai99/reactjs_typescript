import API from "../configAPI/API";
const baseURL = 'api/user'
const getUser = () => {
    return API.get(`${baseURL}`)
}

export const User = {
    getUser
}