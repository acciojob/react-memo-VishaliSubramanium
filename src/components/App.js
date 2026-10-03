import React, { useEffect, useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");

  useEffect(() => {
    document.title = `Todos: ${todos.length}`;
  }, [todos]);

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "New todo"]);
  };

  const addCustomTodo = () => {
    const trimmedTask = task.trim();

    if (trimmedTask.length > 5) {
      setTodos((prevTodos) => [...prevTodos, trimmedTask]);
      setTask("");
    }
  };

  return (
    <div className="app">
      <h1>Task Management App</h1>

      <div className="counter-section">
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment
        </button>
      </div>

      <div className="todo-section">
        <h2>Todo List</h2>

        <button onClick={addTodo}>Add Todo</button>

        <div className="input-section">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addCustomTodo}>Submit</button>
        </div>

        {task.length > 0 && task.trim().length <= 5 && (
          <p className="error">Task must be more than 5 characters.</p>
        )}

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      <UseMemo todos={todos} />
      <ReactMemo count={count} />
    </div>
  );
}

export default App;
