import React, { useContext } from 'react'
import { Todo } from './Todo'
import { Todos } from '../App';

export const TodoList = () => {
  const { todos } = useContext(Todos)

  const style = {
    li: {
      listStyle: 'none',
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li style={style.li} key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

