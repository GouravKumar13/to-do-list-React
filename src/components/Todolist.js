import React from 'react'

function Todolist({handleDelete,handleEdit,todos}) {
  return (
    <div>
      <ol className="item-box">
          {todos.map((t) => {
              return (
                  <li>
                      <span className="p2" key={t.id}>
                          {t.todo}
                      </span>
                      <button className="p2" onClick={() => handleEdit(t.id)}>
                          <i class="fa-solid fa-pen"></i>
                      </button>
                      <button className="p2" onClick={() => handleDelete(t.id)}>
                          <i class="fa-solid fa-trash"></i>
                      </button>
                  </li>
              )
          })}
        </ol>
    </div>
  )
}

export default Todolist
