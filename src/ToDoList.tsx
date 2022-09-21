
import { FilterValuesType } from './App';
import React, { ChangeEvent } from 'react';
import ItemForm from './components/item-form/ItemForm';
import EditableSpan from './components/item-form/EditableSpan';
import styles from "./ToDoList.module.css"
export type Task = {
    id: string,
    isDone: boolean,
    spanTitle: string,

}

export type ToDoListPropsType = {
    title: string,
    tasks: Array<Task>,
    removeTask: (taskId: string, todolistid: string) => void,
    changeFilter: (value: FilterValuesType, todolistid: string) => void,
    addTask: (title: string, todolistId: string) => void,
    changeTaskStatus: (taskId: string, isDone: boolean, todolistid: string) => void,
    changeTaskTitle: (taskId: string, newTitle: string, todolistid: string) => void,
    filter: FilterValuesType,
    id: string,
    deleteTask: (todolistid: string) => void,
    changeToDoListTitle: (id: string, newTitle: string) => void

}

const ToDoList = (props: ToDoListPropsType) => {


    const changeToDoListTitle = (newTitle: string) => {
        props.changeToDoListTitle(props.id, newTitle);
    }

    const onAllClickHandler = () => { props.changeFilter("all", props.id) }
    const onActiveClickHandler = () => { props.changeFilter("active", props.id) }
    const onCompletedClickHandler = () => { props.changeFilter("completed", props.id) }
    const deleteTask = () => {
        props.deleteTask(props.id)
    }
    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }
    return (
        <div>
            <h3><EditableSpan title={props.title} editMode={false} onChange={changeToDoListTitle} />
                <button onClick={() => deleteTask()}>X</button></h3>
            <div>
                <ItemForm addItem={addTask} />


            </div>

            <ul className={styles.allList}>
                {
                    props.tasks.map(w => {
                        const onClickHandler = () => { props.removeTask(w.id, props.id) }
                        const onChangeTitleHandler = (newValue: string) => { props.changeTaskTitle(w.id, newValue, props.id) };

                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => { props.changeTaskStatus(w.id, e.currentTarget.checked, props.id) }
                        return (
                            <li key={w.id} className={styles.listOfTasksUnits}>
                                <input
                                    type="checkbox"
                                    checked={w.isDone}
                                    onChange={onChangeStatusHandler} />
                                <EditableSpan title={w.spanTitle} editMode={false} onChange={onChangeTitleHandler} />
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