import axios from "axios"

const authApi = {}

const BASEURL = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1"

authApi.register = (input) => {
  return axios.post(`${BASEURL}/auth/register`, input)
}
authApi.login = (input) => {
  return axios.post(`${BASEURL}/auth/login`, input)
}
authApi.getMe = () => {
  return axios.get(`${BASEURL}/auth/me`)
}

export default authApi;