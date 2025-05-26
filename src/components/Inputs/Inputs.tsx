import { FunctionComponent } from "react"
import { useState } from "react";


interface Props {
  onAdd: (task: Task) => void
}

export type Task = {
  title: string;
  description: string;
  type: string;
  done: boolean;
}


export const Inputs: FunctionComponent<Props> = ({ onAdd }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const task = {
      title,
      description,
      type,
      done: false
    };

    onAdd(task);

    setTitle('');
    setDescription('');
    setType('');
  }


  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input className="todo__input-title" placeholder="Название задачи" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="todo__input-description" placeholder="Описание задачи" value={description} onChange={(e) => setDescription(e.target.value)} />
        <select className="todo__input-type" value={type} onChange={(e) => setType(e.target.value)} >
          <option value="personal">Личное</option>
          <option value="work">Работа</option>
          <option value="important">Важно</option>
        </select>
        <button className="todo__button-approve" type="submit">Добавить</button>
      </form>
    </div>
  )
}