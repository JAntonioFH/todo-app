import React, { useContext } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodoError } from "../TodoError";
import { TodoContext } from "../TodoContext";
import "./index.css";

function AppUI() {
  const {
    error,
    loading,
    todos,
    searchValue,
    setSearchValue,
    filteredTodos,
    toggleCompleteTodo,
    addTodo,
    deleteTodo,
    isMinimized,
    setIsMinimized,
  } = useContext(TodoContext);

  return (
    <div className={isMinimized ? "minimized-container" : "app-container"}>
      <button
        className="toggle-button"
        onClick={() => setIsMinimized(!isMinimized)}
      >
        {isMinimized ? "+" : "−"}
      </button>

      {!isMinimized && (
        <div className="app-content">
          <TodoCounter
            total={todos.length}
            completed={todos.filter((todo) => todo.isCompleted).length}
          />
          <TodoSearch onSearch={setSearchValue}/>
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodoError />}
            {!loading && todos.length === 0 && <p>¡Crea tu primer TODO!</p>}
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                isCompleted={todo.isCompleted}
                onComplete={() => toggleCompleteTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))}
          </TodoList>
          <CreateTodoButton onCreate={addTodo} />
        </div>
      )}
    </div>
  );
}

export { AppUI };
