import React from 'react';
import './App.css';
import InputField from './components/inputField';
import { useState } from 'react';
import { Todo } from './model';


const App : React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  console.log(todo);

  function handleAdd(e: React.FormEvent): any {
    e.preventDefault();
    console.log("I am called uwu")
    console.log(todo)
    console.log(todos)
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
    console.log(todos);
  }

  return (
    <div className="App">
      <div className="heading">taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;
