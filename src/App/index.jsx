import React, { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';


function App() {
  const [todos, modifyItem] = useLocalStorage('tareas', []);
  const [searchValue, setSearchValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(true);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleCompleteTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    modifyItem(newTodos);
  };

  function addTodo(text){
    const todoActual = { id: Date.now(), text, isCompleted: false }
    modifyItem([...todos, todoActual]);
  };

  const deleteTodo = (id) => {
    const todosFiltrados = todos.filter((todo) => todo.id !== id);
    modifyItem(todosFiltrados);
  };

  return (
    <AppUI
      todos={todos}
      setSearchValue={setSearchValue}
      filteredTodos={filteredTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      isMinimized={isMinimized}
      setIsMinimized={setIsMinimized}
      styles={styles}
    />
  )
}

const styles = {
    container: {
      position: 'absolute', // Cambiado de 'fixed' a 'absolute'
      bottom: '20px', // Se mantiene la distancia desde la parte inferior del contenedor
      right: '20px', // Se mantiene la distancia desde la parte derecha del contenedor
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      zIndex: 1000,
      width: '300px',
    },
    minimizedContainer: {
      position: 'absolute', // Cambiado de 'fixed' a 'absolute'
      bottom: '20px', // Se mantiene la distancia desde la parte inferior del contenedor
      right: '20px', // Se mantiene la distancia desde la parte derecha del contenedor
      backgroundColor: '#fff',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
      cursor: 'pointer',
      color: '#007bff',
      fontSize: '24px',
    },
    toggleButton: {
      fontSize: '24px',
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
    appContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  };
// const styles = {
//   container: {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     backgroundColor: '#fff',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     padding: '20px',
//     zIndex: 1000,
//     width: '300px',
//   },
//   minimizedContainer: {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     backgroundColor: '#fff',
//     borderRadius: '50%',
//     width: '60px',
//     height: '60px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     zIndex: 1000,
//     cursor: 'pointer',
//     color: '#007bff',
//     fontSize: '24px',
//   },
//   toggleButton: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     backgroundColor: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//   },
//   appContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
// };

export default App;
