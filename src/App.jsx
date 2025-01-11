import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Aprender React', isCompleted: false },
    { id: 2, text: 'Hacer ejercicio', isCompleted: true },
    { id: 3, text: 'Leer un libro', isCompleted: false },
  ]);
  const [searchValue, setSearchValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(true);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleCompleteTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, isCompleted: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={isMinimized ? styles.minimizedContainer : styles.container}>
      <button
        style={styles.toggleButton}
        onClick={() => setIsMinimized(!isMinimized)}
      >
        {isMinimized ? '+' : '−'}
      </button>

      {!isMinimized && (
        <div style={styles.appContent}>
          <TodoCounter
            total={todos.length}
            completed={todos.filter((todo) => todo.isCompleted).length}
          />
          <TodoSearch onSearch={setSearchValue} />
          <TodoList>
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
