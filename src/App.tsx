import { useState } from 'react'
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
  const [todos, setTodos] = useState<Task[]>([])
  
  const taskList = props.tasks?.map((todo) => <Todo id={todo.id} task={todo.task} completed={todo.completed} key={todo.id}/>)
  console.log(taskList)

  return (
    <>
      <div className="todo__wrapper">
        <Input />
        <ul className="todo__listWrapper" aria-labelledby="list-heading">
          {/* <Todo id="todo-0" task="Eat" completed />
          <Todo id="todo-1" task="Sumka" />
          <Todo id="todo-2" task="Airplane"  /> */}
          {taskList}
        </ul>

      </div>
    </>
  )
}

export default App
