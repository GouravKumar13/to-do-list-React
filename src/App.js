import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodo = todos.map((update) =>
        update.id === editTodo.id
          ? (update = { id: update.id, todo })
          : { id: update.id, todo: update.todo }
      );
      setTodos(updatedTodo);
      setEditId(0);
      setTodo("")
      return
    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((deleteTodo) => deleteTodo.id !== id);
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>TODO LIST APP</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={todo}
            type="text"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">
            {editId ? (
              <i class="fa-solid fa-pen"></i>
            ) : (
              <i class="fa-solid fa-plus"></i>
            )}
          </button>
        </form>
        <ol className="item-box">
          {todos.map((t) => (
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
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
