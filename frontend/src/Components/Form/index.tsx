import React from "react";

interface IInputText {
  setInputText: React.Dispatch<React.SetStateAction<any>>;
  todos: any 
  setTodos: React.Dispatch<React.SetStateAction<any>>;
  inputText: string
  setStatus: React.Dispatch<React.SetStateAction<any>>;
}

const Form: React.FC<IInputText> = ({setInputText, todos, setTodos, inputText, setStatus}) => {

  const inputTextHandler = (e: any) => {
    setInputText(e.target.value)
  
  }
  const submitTodoHandler = (e: any) => {
    e.preventDefault()
    setTodos([...todos,{text: inputText, completed: false, id: Math.random() * 1000}])
    setInputText("");
  }

  const statusHandler = (e:any) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
