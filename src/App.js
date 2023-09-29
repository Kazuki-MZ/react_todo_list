import { createContext, useEffect, useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { InputTodo } from './components/InputTodo';
import { TodoCount } from './components/TodoCount';

export const Todos = createContext();

function App() {
  const style = {
    container : {
      textAlign: 'center'
    },
    title : {
      fontSize : '6vw'
    }
  };

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div style={style.container} >
      <h1 style={style.title}>Todo List</h1>
      <Todos.Provider value={{todos, setTodos}}>
        <InputTodo />
        <TodoCount />
        <TodoList />
      </Todos.Provider>
    </div>
  );
}

export default App;
