import { create } from "zustand";
import postApi from "../api/postApi";

const usePostStore = create( ()=>({
  posts: [],

  actionFetchPosts: async(userId) => {
    const res = await postApi.getAllPostByID(userId)
    setImmediate( { posts: res.data.posts })
  },
}))

export default usePostStore;