import React from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';


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
      <div className="heading">taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))} */}
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    
  );
}

export default App;
