import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "practice react", isCompleted: false },
    { id: 2, text: "practice next.js", isCompleted: true },
  ]);

  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2>Todos list</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="New task"
        />
        <button>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px auto" }}>
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-throgh" : "none",
              }}
            >
              {todo.text}
            </span>
            <button style={{ marginRight: "10px" }}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
