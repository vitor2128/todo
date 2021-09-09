import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<[]>([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo:any) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo:any) => todo.uncompleted === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Vitor Todo List</h1>
      </header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
          
        />

        <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
