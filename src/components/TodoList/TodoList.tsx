import { FunctionComponent } from "react";
import { Task } from "../Inputs/Inputs";


interface Props {
  tasks: Task[]
  onDelete: (id: number) => void
}

export const TodoList: FunctionComponent<Props> = ({tasks, onDelete}) => {
  
  return (
    <ul>
      {tasks.map((task, id) => (
        <li key={id}>
          <span>{task.title}:</span>
          <span>{task.description}</span>
          <button onClick={() => onDelete(id)}>x</button>
        </li>
      ))}
    </ul>
  )
}