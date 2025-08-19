import { useState } from 'react'
import styles from './Input.module.css'

function Input() {

    return (
        <div className={styles.todo__headerWrapper}>
            <h1 className={styles.todo__headerTitle}>ToDo App</h1>
            <form className={styles.todo__headerForm}>
                <input className={styles.todo__headerInput} id="task" name="task" type="text" placeholder='New task...' autoComplete="off" required></input>
                <button className={styles.todo__headerAddButton} type='submit'>+</button>
            </form>
            <div className={styles.todo__headerFilters}>
                <button className={styles.todo__headerFilterBtn__active} type="button" aria-pressed="true">All</button>
                <button className={styles.todo__headerFilterBtn} type="button" aria-pressed="false">Active</button>
                <button className={styles.todo__headerFilterBtn} type="button" aria-pressed="false">Completed</button>
            </div>
        </div>
    )
}

export default Input;
