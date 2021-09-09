import React from "react";

import Todo from "../Todo";

interface ITodo {
  todos: []
  setTodos: React.Dispatch<React.SetStateAction<any>>;
}

const TodoList: React.FC<ITodo> = ({todos, setTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo:any) => (
          <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
