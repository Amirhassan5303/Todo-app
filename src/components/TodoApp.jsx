import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "practice react", isCompleted: false },
    { id: 2, text: "practice next.js", isCompleted: true },
  ]);

  const [inputValue, setInputValue] = useState("");

  function handleAddTodo() {
    if (inputValue.trim === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleDeleteTodo(id) {
    const updatedTodo = todos.filter((todo) => todo.id != id);
    setTodos(updatedTodo);
  }

  function handleToggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "tahoma",
      }}
    >
      <h2>Todos list</h2>
      <div>
        <input
          style={{ padding: "8px", width: "200px" }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="New task"
        />
        <button
          onClick={handleAddTodo}
          style={{ padding: "8px 15px", marginRight: "5px" }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              margin: "10px 0",
              backgroundColor: "#f4f4f4",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <span
              onClick={() => {
                handleToggleTodo(todo.id);
              }}
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
