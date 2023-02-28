import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e: React.FormEvent) => void;
}

const inputField = ({todo, setTodo, handleAdd} : Props) => {
  return (
    <form className='input-form'>
        <input 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)}
            onSubmit={(e) => {
              handleAdd(e);}
            } //as soon as submit is pressed handleAdd is invoked
            type="text" 
            placeholder='add a task'
        />
        <button className='submit-btn' onClick={handleAdd} type='submit'>add task</button>
    </form>
  )
}

export default inputField