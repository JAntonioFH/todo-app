import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({todos,setSearchValue,filteredTodos,toggleCompleteTodo,addTodo,deleteTodo,isMinimized,setIsMinimized,styles}) { 
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
export { AppUI };