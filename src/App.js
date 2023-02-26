import React, { useState } from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import Todoform from "./components/Todoform";

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
      setTodo("");
      return;
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
        <Todoform
          handleSubmit={handleSubmit}
          editId={editId}
          todo={todo}
          setTodo={setTodo}
        />
        <Todolist
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
