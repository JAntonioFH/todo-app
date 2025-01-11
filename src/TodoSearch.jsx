// TodoSearch.js
import React from 'react';

function TodoSearch({ placeholder = 'Buscar tareas...', onSearch }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeholder}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px 20px',
  },
  input: {
    flex: 1,
    maxWidth: '400px',
    padding: '10px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    transition: 'box-shadow 0.2s ease',
  },
};

export { TodoSearch };
