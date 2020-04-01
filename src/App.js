import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from './store/actions/index'

function App() {

  const todos = useSelector(state => state.todos)
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()


  const changeTitle = ((event) => {
    setTitle(event.target.value)
  })

  const submitTodo = ((event) => {
    event.preventDefault()
    dispatch(allActions.setTodo(title))
  })

  return (
    <div>
      Todo App
      <p>List TODO: </p>
      <form onSubmit={submitTodo}>
        <input value={title} onChange={changeTitle}/>
        <input type="submit"/>
      </form>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.key}>
              {todo.title}
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default App