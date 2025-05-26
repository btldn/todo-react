import React from 'react';
import { useState } from 'react';

import { Inputs, Task } from '@/components/Inputs/Inputs';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  return (
    <div>
      <Inputs onAdd={handleAddTask} />
      <ToDoList tasks={tasks} />
    </div>
  )
