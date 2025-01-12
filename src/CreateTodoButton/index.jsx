import React, { useState } from 'react';
import { CreateTodoButtonUI } from './CreateTodoButtonUI';
import './index.css';

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
    <CreateTodoButtonUI
      newTodoText={newTodoText} // Pasar el estado como propiedad
      onChange={handleInputChange} // Pasar la función de cambio como propiedad
      onClick={handleCreateTodo} // Pasar la función de clic como propiedad
    />
  );
}

export { CreateTodoButton };
