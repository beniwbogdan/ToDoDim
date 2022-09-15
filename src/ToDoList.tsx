
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
    changeTaskStatus: (taskId: string, isDone: boolean) => void

}

const ToDoList = (props: ToDoListPropsType) => {
    const [title, setTitle] = useState("");
    const addTask = () => {
        if (title.trim() === "") {
            return;
        } else {
            props.addTask(title);
            setTitle("");
        }
    }
    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onKeyPressHundler = (e: KeyboardEvent<HTMLInputElement>) => {
        if ((e.ctrlKey && e.charCode) || (e.charCode) === 13) {
            if (title.trim() === "") {
                alert("Enter more then 0 symbols")
            } else {
                props.addTask(title);
                setTitle("");
            }

        } else { return true }
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
                />

                <button
                    onClick={() => {
                        addTask();
                    }}>+
                </button>
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
                                <span>{w.spanTitle}</span>
                                <button onClick={onClickHandler}>X</button>
                            </li>
                        );
                    })

                }
            </ul>
            <div className="buttons">
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div >
    );
}

export default ToDoList;