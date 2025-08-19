import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const DATA = [
  { id: "todo-0", task: "Eat", completed: true },
  { id: "todo-1", task: "Sumka", completed: false },
  { id: "todo-2", task: "Airplane", completed: false },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
)
