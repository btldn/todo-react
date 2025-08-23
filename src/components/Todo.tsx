type TodoProps = {
    id: string;
    task: string;
    completed?: boolean;
    toggleTodoCompleted: (id: string) => void;
    deleteTask: (id: string) => void;
}

import styles from './Todo.module.css'

function Todo(props: TodoProps) {
    return (
        <div className={styles.todo__task}>
            <div className={styles.todo__taskTitleWrapper}>
                <input 
                    id={props.id} 
                    className={styles.todo__taskCheck} 
                    type="checkbox" 
                    onChange={() => props.toggleTodoCompleted(props.id)}
                    defaultChecked={props.completed}>
                </input>
                <label className={styles.todo__taskText} htmlFor={props.id}>
                    {props.task}
                </label>
            </div>
            <div className={styles.todo__taskBtnsWrapper}>
                <button className={styles.todo__taskDeleteBtn} onClick={() => props.deleteTask(props.id)}>del</button>
                <button className={styles.todo__taskEditBtn}>chg</button>
            </div>
        </div>
    )
}

export default Todo;