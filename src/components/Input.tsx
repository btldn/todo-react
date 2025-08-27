import { useState } from 'react'
import styles from './Input.module.css'

type InputProps = {
    onSubmit: (task: string) => void;
}

function Input(props: InputProps) {

    const [task, setTask] = useState("")

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.onSubmit(task);
        setTask("")
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTask(event.target.value)
    }

    return (
        <div className={styles.todo__headerWrapper}>
            <h1 className={styles.todo__headerTitle}>ToDo App</h1>
            <form className={styles.todo__headerForm} onSubmit={handleSubmit}>
                <input className={styles.todo__headerInput} 
                    id="task" 
                    name="task" 
                    type="text" value={task} 
                    onChange={handleChange} 
                    placeholder='New task...' 
                    autoComplete="off" 
                    required>
                </input>
                <button className={styles.todo__headerAddButton} type='submit'>+</button>
            </form>
        </div>
    )
}

export default Input;
