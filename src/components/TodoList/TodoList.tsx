import { FunctionComponent } from "react";
import { Task } from "../Inputs/Inputs";


interface Props {
  tasks: Task[]
}

export const TodoList: FunctionComponent<Props> = ({tasks}) => {
  return (
    <ul>
      {tasks.map((task, id) => (
        <li key={id}>
          <span>{task.title}:</span>
          <span>{task.description}</span>
        </li>
      ))}
    </ul>
  )
}