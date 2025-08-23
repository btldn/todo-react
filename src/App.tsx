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
      toggleTodoCompleted={toggleTodoCompleted}
      deleteTask={deleteTask}
    />
  ));

  function toggleTodoCompleted(id: string) {
    const updatedTodos = todos.map((todo) => {
    if (id === todo.id) {
      return { ...todo, completed: !todo.completed };
      
    }
    return todo;
  });
    setTodos(updatedTodos);
  }

  function addTask(task: string) {
    let newTodo = { id: `todo-${nanoid()}`, task, completed: false }
    setTodos([...todos, newTodo]);
  }

  function deleteTask(id: string) {
      const remainingTasks = todos.filter((todo) => id !== todo.id);
      setTodos(remainingTasks);
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
