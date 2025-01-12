import React from 'react';
import './index.css';

function TodoSearch({ placeholder = 'Buscar tareas...', onSearch }) {
  return (
    <div className="todo-search-container">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeholder}
        className="todo-search-input"
      />
    </div>
  );
}

export { TodoSearch };