import { createContext, useEffect, useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { InputTodo } from './components/InputTodo';
import { TodoCount } from './components/TodoCount';

export const Todos = createContext();

function App() {
  const style = {
    textAlign: 'center'
  };

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div style={style} >
      <h1>Todo List</h1>
      <Todos.Provider value={{todos, setTodos}}>
        <InputTodo />
        <TodoCount />
        <TodoList />
      </Todos.Provider>
    </div>
  );
}

export default App;
