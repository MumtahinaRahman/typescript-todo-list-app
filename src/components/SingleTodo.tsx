import React from 'react'
import { Todo } from '../model';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className="single-todo">
      <span className="single-todo-text">
      <Checkbox>{todo.todo}</Checkbox>;
      </span>
    </form>
  )
}

export default SingleTodo