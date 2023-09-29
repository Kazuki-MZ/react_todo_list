import React, { useContext } from "react";
import { Todos } from "../App";

export const TodoCount = () => {
  const { todos } = useContext(Todos);
  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "5px",
      fontSize: "2vw",
    },
    space: {
      margin: "0 10px",
    },
  };
  const allTaskCount = todos.length;
  const completedTaskCount = todos.filter(todo => todo.completed).length;
  const notCompletedTaskCount = allTaskCount - completedTaskCount;

  return (
    <div style={style.container}>
      <div style={style.space}>全てのタスク:{allTaskCount}</div>
      <div style={style.space}>完了済み:{completedTaskCount}</div>
      <div style={style.space}>未完了:{notCompletedTaskCount}</div>
    </div>
  );
};
