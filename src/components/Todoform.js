import React from 'react'

function Todoform({handleSubmit,editId,todo,setTodo}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input
            value={todo}
            type="text"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button  type="submit">
            {editId ? (
              <i class="fa-solid fa-pen"></i>
            ) : (
              <i class="fa-solid fa-plus"></i>
            )}
          </button>
        </form>
    </div>
  )
}

export default Todoform
