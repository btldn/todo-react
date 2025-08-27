import { useState } from 'react'
import { nanoid } from "nanoid";

import './App.css'

import Input from './components/Input'
import Todo from './components/Todo'
import FilterButton from './components/FilterButton';

type DataProps = {
  tasks: Task[]
}

type Task = {
  id: string;
  task: string;
  completed: boolean;
}

const FILTER_MAP = {
  All: () => true,
  Active: (todo: Task) => !todo.completed,
  Completed: (todo: Task) => todo.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props: DataProps) {
  const [todos, setTodos] = useState(props.tasks)
  const [filter, setFilter] = useState("All");

  const taskList = todos.filter(FILTER_MAP[filter]).map((todo) => (
      <Todo
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        key={todo.id}
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
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

  function editTask(id: string, newName: string) {
    const editedTodoList = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, task: newName };
      }
      return todo;
    });
    setTodos(editedTodoList);
  }

  return (
    <>
      <div className="todo__wrapper">
        <Input onSubmit={addTask} />
        <div className="todo__headerFilters">
          {filterList}
        </div>
        <ul className="todo__listWrapper" aria-labelledby="list-heading">
          {taskList}
        </ul>

      </div>
    </>
  )
}

export default App
