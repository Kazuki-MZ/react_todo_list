import React, { useContext, useState } from 'react'
import { Todos } from '../App';

export const InputTodo = () => {
  const [todoText, setTodoText] = useState("");
  const { todos, setTodos } = useContext(Todos);

  const onClickAddTodo = () => {
    if (todoText === "") return;
    const lastItem = todos.slice(-1)[0];
    let newId = 0;
    if (lastItem) {
    newId = lastItem.id + 1;
    }
    setTodos([
      ...todos, { id: newId, name: todoText, completed: false }
    ]);
    setTodoText("");
  };

  const style = {
    container: {
      marginBottom: '5px'
    },
    input: {
      fontSize: '2.5vw',
      width: '50%',
      height: '3vw',
    },
    addButton: {
      borderRadius: '7px',
      fontSize: '2.5vw',
      marginLeft: '5px',
    }
  };

  return (
    <div style={style.container}>
      <input type="text" style={style.input} value={todoText} onChange={(e) => setTodoText(e.target.value)}></input>
      <button type="button" style={style.addButton} onClick={onClickAddTodo}>追加</button>
    </div>
  );
};