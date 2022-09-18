import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {

  const [inputText, setInputText] = useState('')
  const [todo, setTodo] = useState([])

  return (
    <div className="App">
     <header>
      <h1>ToDo List</h1>
     </header>
     <Form setInputText={setInputText} todo={todo} setTodo={setTodo} inputText={inputText} />
     <Todo /> 
    </div>
  );
}

export default App;
