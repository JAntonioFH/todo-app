import React, { useState } from 'react';

function CreateTodoButton({ onCreate }) {
  const [newTodoText, setNewTodoText] = useState('');

  const handleInputChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleCreateTodo = () => {
    if (newTodoText.trim() === '') return; // No crear si el campo está vacío
    onCreate(newTodoText); // Llamar a la función onCreate con el nuevo texto
    setNewTodoText(''); // Limpiar el campo de texto
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Nuevo TODO"
        value={newTodoText}
        onChange={handleInputChange}
        style={styles.input}
      />
      <button
        style={styles.button}
        onClick={handleCreateTodo}
      >
        +
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px', // Ajuste para separarlo de la parte superior
  },
  input: {
    width: '200px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  button: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export { CreateTodoButton };