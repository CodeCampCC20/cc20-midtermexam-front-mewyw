
const todoItems = [
  {id: 1, text: "Learn CSS"},
  {id: 2, text: "Learn React"},
  {id: 3, text: "Learn JavaScript"},
]

function CreatePostPage(props) {
  const {handleChange, item} = props
  return(
    <div>
      <form className="bg-gray-500">
     <input
     className="text-white"
      type="checkbox"
      id={`item-${item.id}`}
      checked={item.completed}
      onChange={() => handleChange(item.id)}
      
      />

      </form>

    </div>

  )

}


export default CreatePostPage