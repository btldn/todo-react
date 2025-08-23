import { useState } from 'react'
import { nanoid } from "nanoid";

import './App.css'

import Input from './components/Input'
import Todo from './components/Todo'

type DataProps = {
  tasks: Task[]
}

type Task = {
  id: string;
  task: string;
  completed: boolean;
}

function App(props: DataProps) {
  const [todos, setTodos] = useState(props.tasks)

  const taskList = todos?.map((todo) => (
    <Todo
      id={todo.id}
      task={todo.task}
      completed={todo.completed}
      key={todo.id}
    />
  ));

  function addTask(task: string) {
    let newTodo = {id: `todo-${nanoid()}`, task, completed: false}
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <div className="todo__wrapper">
        <Input onSubmit={addTask} />
        <ul className="todo__listWrapper" aria-labelledby="list-heading">
          {taskList}
        </ul>

      </div>
    </>
  )
}

export default App
