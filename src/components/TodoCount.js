import React, { useContext } from 'react'
import { Todos } from '../App';

export const TodoCount = () => {
  const { todos } = useContext(Todos)
  const style = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '5px',
      fontSize: '2vw',
    },
    space: {
      margin: '0 10px'
    }
  };

  return (
    <div style={style.container}>
      <div style={style.space}>全てのタスク:{todos.length}</div>
      <div style={style.space}>完了済み:{todos.filter((todo) => todo.completed === true).length}</div>
      <div style={style.space}>未完了:{todos.filter((todo) => todo.completed === false).length}</div>
    </div>
  );
};