import React from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';
import Nav from './nav/Nav';


const App : React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todo);

  function handleAdd(e: React.FormEvent): any {
    e.preventDefault();
    
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
    console.log(todos);
  }

  return (
    <div className="App">
      <Nav />
      <div className="heading">taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    
  );
}

export default App;
