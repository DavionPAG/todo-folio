
import React from "react";


const Form = ({ inputText, setInputText, todo, setTodo }) => {

  const inputHdlr = (e) => {
    setInputText(e.target.value)
  }

  const submitHdlr = (e) => {
    e.preventDefault()
    setTodo([
      ...todo, { text: inputText, completed: false, id: Math.random() * 1000 }
    ])
    setInputText('')
  }

  return (
    <form>
      <input value={inputText} onChange={inputHdlr} type="text" className="todo-input" />
      <button onClick={submitHdlr} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Pending</option>
        </select>
      </div>
    </form>
  )
}

export default Form;