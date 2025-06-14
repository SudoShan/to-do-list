import React, {useState, useEffect} from "react";
import { FaArrowUp, FaTrash, FaArrowDown } from "react-icons/fa";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const el = document.getElementById("todo-list");
    if (el) {
        el.style.border = "none";
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const newTodos = [...todos];
      [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
      setTodos(newTodos);
    }
  };

  const moveTaskDown = (index) => {
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      [newTodos[index + 1], newTodos[index]] = [newTodos[index], newTodos[index + 1]];
      setTodos(newTodos);
    }
  };

  const delTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    if (newTodos.length === 0) {
        const el = document.getElementById("todo-list");
        if (el) {
            el.style.border = "none";
        }
    }
    setTodos(newTodos);
  };

  return (
    <div id="todo-container">
      <h1 id="title">To-Do List</h1>
      <div id = "mid-section">
        <div id="todo-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
        <span id="note">Double click a task to finish it</span>
      </div>
      <div id="list-container">
        <ul id="todo-list">
            {todos.map((todo, index) => (
            <li key={index} className="todo-item">
                <span className="task">{todo}</span>
                <div id="ctls">
                    <button className="priority-btn" onClick={() => moveTaskUp(index)}><FaArrowUp/></button>
                    <button className="priority-btn" onClick={() => moveTaskDown(index)}><FaArrowDown/></button>
                    <button className="del-btn" onClick={() => delTask(index)}><FaTrash/></button>
                </div>
            </li>
                
            ))}
      </ul>
      </div>
    </div>
  );
}

export default ToDoList;