import React, { useState } from 'react'
import { Todo } from '../model';
import { Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
//import type { CheckboxChangeEvent } from 'antd/es/checkbox';
//import todoList from './TodoList';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

  const [edit, setEdit] = useState<boolean>(false); //keeps track of edit mode
  const [editTodo, setEditTodo] = useState<string>(todo.todo); //empty by default
  
  const handleDone = (id: number) => { 
    console.log('checkbox pressed.');
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone:!todo.isDone} : todo));
  }

  const handleDelete = (id: number) => { // only show the ones of which the ids don't match
    console.log('delete logo pressed.');
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleEdit = (e: React.FormEvent, id: number) => { 
    e.preventDefault();
    console.log('edit logo pressed.');
    if(!edit && !todo.isDone){
      console.log("set edit.");
      setEdit(!edit);
    }
    setTodos(todos.map((todo) => (
      todo.id===id?{...todo, todo:editTodo} : todo
    )));

    setEdit(false);
  }

  return (
    <form className="single-todo" onSubmit={(e)=>handleEdit(e, todo.id)}>
      <Checkbox  onChange={() => handleDone(todo.id)} />
      {edit ? (<input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />) : 
      todo.isDone ? (
        <s className="single-todo-text"> {todo.todo} </s>
      )
       : (
        <span className="single-todo-text"> {todo.todo} </span>
      )}
      <DeleteOutlined onClick={() => handleDelete(todo.id)} />
      <EditOutlined onClick={(e) => handleEdit(e, todo.id)} />
    </form>
  )
}

export default SingleTodo