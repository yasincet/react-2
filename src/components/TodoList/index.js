import { useState } from "react";
import "../styles.css";

export default function TodoList({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");


  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log("id", id);
  };
  
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  
  };
  const hiddenBtn = () => {
    const checkAllCompleted = todos.every((todo) => !todo.completed);
    return checkAllCompleted ? "hidden" : "";
  };
 



  const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : todos;

  return (
    <div className="main"style={{ display: todos.length ? 'block' : 'none' }} >
      <input className="toggle-all" type="checkbox"  />
      
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodos.map((todo, index) => {
          return (
            <li key={index}>
              <div className="view">
              <input className="toggle" type="checkbox" id={`todo-${todo.id}`} onChange={() =>
                setTodos((prevTodos) =>
                  prevTodos.map((prevTodo) =>
                  prevTodo.id === todo.id
                      ? { ...prevTodo, completed: !prevTodo.completed }
                      : prevTodo
                  )
                )
              }/>
                <label
                  htmlFor={`todo-${todo.id}`}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}
                >
                  {todo.title}
                </label>

                <button className="destroy" onClick={() => handleDeleteTodo(todo.id)} ></button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="footer">
        <span className="todo-count">
          <strong>{todos.filter((todo) => !todo.completed).length}</strong>{" "}
          items left
        </span>
        <ul className="filters">
          <li>
               <a
                className={filter === "all" ? "selected" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </a>
          </li>
          <li>
              <a
                className={filter === "active" ? "selected" : ""}
                href="#"
                onClick={() => setFilter("active")}
              >
                Active
              </a>
          </li>
          <li>
                  <a
                    className={filter === "completed" ? "selected" : ""}
                    href="#"
                    onClick={() => setFilter("completed")}
                  >
                    Completed
                  </a>
          </li>
        </ul>
        <button className={`clear-completed ${hiddenBtn()}`} onClick={handleClearCompleted}>
        Clear completed
      </button>
      </div>
    </div>
  );
}