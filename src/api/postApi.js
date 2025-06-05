import axios from "axios"

const postApi{}

const BASEURL = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1"

postApi.createPost = (input, id) =>{
    return axios.post(`${BASEURL}/posts/${id}`,input)
}

postApi.deletePost = (userId, postId) => {
  return axios.delete(`${BASEURL}/posts/${userId}/${postId}`)
}

export default postApi