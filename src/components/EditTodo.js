import React, { useContext } from 'react'
import { Todos } from '../App';

export const EditTodo = ({ todo, editTodoText, setEditTodoText, setEditForm }) => {
  const { todos, setTodos } = useContext(Todos);

  const onClickEditTodo = (id) => {
    if (editTodoText === "") return;
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, name: editTodoText}
      } else {
        return todo;
      }
    }));
    setEditForm(false);
    setEditTodoText("");
  };

  const style = {
    saveButton: {
      marginLeft: '5px',
      borderRadius: '5px',
      fontSize: '2.5vw'
    },
    input : {
      fontSize: '2.5vw',
      width: '50%',
      height: '3vw',
    }
  };

  return (
    <>
      <input type="text" value={editTodoText} style={style.input} onChange={(e) => setEditTodoText(e.target.value)} ></input>
      <button style={style.saveButton} onClick={() => {onClickEditTodo(todo.id)}}>保存</button>
    </>
  );
};