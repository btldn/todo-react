import { useState } from "react";

type TodoProps = {
    id: string;
    task: string;
    completed?: boolean;
    toggleTodoCompleted: (id: string) => void;
    deleteTask: (id: string) => void;
    editTask: (id: string, newName: string) => void;
}

import styles from './Todo.module.css'

function Todo(props: TodoProps) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        props.editTask(props.id, newName)
        setNewName("")
        setEditing(false)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewName(e.target.value);
    }

    const editingTemplate = (
        <form className={styles.todo__taskEditText} onSubmit={handleSubmit}>
            <div className={styles.todo__taskEditWrapper}>
                <input id={props.id}
                    className={styles.todo__taskEditInput}
                    placeholder="Rename task..."
                    type="text"
                    value={newName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.todo__taskEditButtons}>
                <button className={styles.todo__taskEditDeny} type="button" onClick={() => setEditing(false)} >Cancel</button>
                <button className={styles.todo__taskEditApprove} type="submit">Save</button>
            </div>
        </form>
    )

    const viewTemplate = (
        <>
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
                <button className={styles.todo__taskEditBtn} onClick={() => setEditing(true)}>chg</button>
            </div>
        </>
    )

    return (
        <li className={styles.todo__task}>{isEditing ? editingTemplate : viewTemplate}</li>
    )
}

export default Todo;