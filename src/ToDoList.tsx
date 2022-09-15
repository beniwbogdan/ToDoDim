
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { FilterValuesType } from './App';

export type Task = {
    id: string,
    isDone: boolean,
    spanTitle: string,

}

export type ToDoListPropsType = {
    title: string,
    tasks: Array<Task>,
    removeTask: (taskId: string) => void,
    changeFilter: (value: FilterValuesType) => void,
    addTask: (title: string) => void,
    changeTaskStatus: (taskId: string, isDone: boolean) => void,
    filter: FilterValuesType,

}

const ToDoList = (props: ToDoListPropsType) => {
    const [title, setTitle] = useState("");
    const [error, setError] = useState<string | null>(null);
    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim());
            setTitle("");
            setError(null);
        } else {
            setError("Title is required");
        }


    }
    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onKeyPressHundler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if ((e.ctrlKey && e.charCode) || (e.charCode) === 13) { addTask(); } else { return true }
    }
    const onAllClickHandler = () => { props.changeFilter("all") }
    const onActiveClickHandler = () => { props.changeFilter("active") }
    const onCompletedClickHandler = () => { props.changeFilter("completed") }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={onNewTitleChangeHandler}
                    onKeyPress={onKeyPressHundler}
                    placeholder="Enter..."
                    className={error ? "error" : ""}
                />

                <button onClick={addTask}>+</button>
                <div>
                    {
                        error && <div className="error-message">{error}</div>
                    }
                </div>

            </div>

            <ul>
                {
                    props.tasks.map(w => {
                        const onClickHandler = () => { props.removeTask(w.id) }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { props.changeTaskStatus(w.id, e.currentTarget.checked) }
                        return (
                            <li key={w.id}>
                                <input

                                    type="checkbox"
                                    checked={w.isDone}
                                    onChange={onChangeHandler} />
                                <span className={w.isDone ? "is-done" : ""}>{w.spanTitle}</span>
                                <button onClick={onClickHandler}>X</button>
                            </li>
                        );
                    })

                }
            </ul>
            <div className="buttons">
                <button
                    className={props.filter === "all" ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
                <button
                    className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active</button>
                <button
                    className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div >
    );
}

export default ToDoList;