import usePostStore from '../stores/postStore'
import useAuthStore from '../stores/authStore'
import { useEffect } from 'react'
import { X } from 'lucide-react'
import postApi from '../api/postApi'


function PostPage() {
  const posts = usePostStore((state) => state.posts)
  const actionFetchPost = usePostStore((state) => state.actionFetchPost)  

  const userId = useAuthStore((state) => state.userId)

  useEffect( () => {
    actionFetchPost(userId)
  }, [])

  console.log("post", posts)

  const handleDelete = async (postId) => {
    try{
      await postApi.deletePost(userId, postId)
      await actionFetchPost(userId)

      toast.success("delete post success!!")

    }catch(error){
      toast.error("delete post invalid!!")
      console.log(error)
    }
  }

  return (
    <div className="p-8 grid grid-cols-4 gap-4">
      {posts.map( item => (
        <div className="relative" key={item.id}>
        <div className="h-80">
          <img 
          className="hover:underline h-60 w-full object-cover border-2 border-gray-200 rounded-xl mb-2" 
          src={item.imgUrl} alt="" 
          />
          
          <h1 className="font-bold bg-gray-200 h-8 rounded-xl padding-2 flex flex-col items-center mt-auto">{item.title}</h1>
          <h1 className="flex flex-col items-center">{item.content}</h1>

      
          </div>
              <div>
            <button
            onClick={() => handleDelete(item.id)}
             className="absolute top-2 right-2 bg-gray-100/30 rounded-xl cursor-pointer hover:bg-gray-100/60 duration-200 p-1">
            <X className="w-5 h-5 outline-gray-300" /></button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostPage