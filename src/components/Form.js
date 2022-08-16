import React from "react"

function Form({setInputText, todos, setTodos, inputText}) {

  const inputTextHandler = (event) => {

    console.log(event.target.value);
    setInputText(event.target.value);
  };
  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
    ])
    setInputText(""); //resets state
  }

  return (

<form>
  <input
   value={inputText} //updates states dynamically
   onChange={inputTextHandler}
   type="text" className="todo-input"
  />
  <button onClick ={submitTodoHandler} className="todo-button" type="submit">
    <i className="fa fa-plus-square"></i>
  </button>
  <div className="select">
    <select name="todos" className="filter">
      <option value="all">All</option>
      <option value="completed">Incomplete</option>
    </select>
  </div>
</form>
  );
}

export default Form;
