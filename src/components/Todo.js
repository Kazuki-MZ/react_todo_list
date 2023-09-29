import React, { useContext, useState } from 'react'
import { EditTodo } from './EditTodo';
import { Todos } from '../App';

export const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(Todos);
  const [editForm, setEditForm] = useState(false);
  const [editTodoText, setEditTodoText] = useState("");

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
      } else {
        return todo;
      }
    }));
  };

  const deleteTodo = (id) => {
    if (window.confirm("本当に削除してもいいですか？")) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const openEditForm = (name) => {
    setEditForm(true)
    setEditTodoText(name)
  }

  const style = {
    container: {
      display: 'flex',
      padding: '3px',
    },
    checkbox : {
      width: '1.5vw'
    },
    name: {
      flexGrow: '1',
      textAlign: 'left',
      fontSize: '3.5vw',
    },
    button : {
      margin: '0 12px',
      borderRadius: '7px',
      fontSize: '2.5vw',
    }
  };

  return (
    <div style={style.container}>
      <input type="checkbox" style={style.checkbox} checked={todo.completed} onChange={() => {toggleTodo(todo.id)}} readOnly></input>
        {editForm ? (
          <>
            <EditTodo
              todo={todo}
              editTodoText={editTodoText}
              setEditTodoText={setEditTodoText}
              setEditForm={setEditForm}
            />
          </>
        ): (
          <>
            <span style={style.name}>{todo.name}</span>
            <button style={style.button} onClick={() => {openEditForm(todo.name)}}>編集</button>
            <button style={style.button} onClick={() => {deleteTodo(todo.id)}}>削除</button>
          </>
        )}
    </div>
  );
};