import React,{useState} from "react";
import {useLocalStorage} from "./useLocalStorage";

function TodoProvider({children}){

    const {item:todos, modifyItem,error,loading} = useLocalStorage('tareas', []);
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
        <TodoContext.Provider value={{error,loading,todos,searchValue,setSearchValue,filteredTodos,toggleCompleteTodo,addTodo,deleteTodo,isMinimized,setIsMinimized}}>
            {children}
        </TodoContext.Provider>
    )
}   

const TodoContext= React.createContext();

export {TodoProvider, TodoContext};