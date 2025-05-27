"use client"

import React from 'react';
import { useState } from 'react';

import { Inputs, Task } from '@/components/Inputs/Inputs';
import { TodoList } from '@/components/TodoList/TodoList';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  const handleDeleteTask = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };
3

  return (
    <div>
      <Inputs onAdd={handleAddTask} />
      <TodoList onDelete={handleDeleteTask} tasks={tasks} />
    </div>
  )
}