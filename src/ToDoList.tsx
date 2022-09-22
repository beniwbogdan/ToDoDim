
import { FilterValuesType } from './App';
import React, { ChangeEvent } from 'react';
import ItemForm from './components/item-form/ItemForm';
import EditableSpan from './components/item-form/EditableSpan';
import styles from "./ToDoList.module.css"
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Delete } from '@mui/icons-material';
import { Grid } from '@mui/material';

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
    removeToDoList: (todolistid: string) => void,
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
        props.removeToDoList(props.id)
    }
    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }
    return (
        <div className={styles.allToDoList}>
            <h3><EditableSpan title={props.title} editMode={false} onChange={changeToDoListTitle} />
                <Button color='error' endIcon={<DeleteForeverIcon />} onClick={() => deleteTask()} variant="outlined" >
                    DELETE TASK
                </Button>
                {/* <button >X</button> */}</h3>
            <div>
                <Grid style={{ padding: "10px" }}><ItemForm addItem={addTask} /></Grid>
            </div>

            <div className={styles.allList}>
                {
                    props.tasks.map(w => {
                        const onClickHandler = () => { props.removeTask(w.id, props.id) }
                        const onChangeTitleHandler = (newValue: string) => { props.changeTaskTitle(w.id, newValue, props.id) };

                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => { props.changeTaskStatus(w.id, e.currentTarget.checked, props.id) }
                        return (
                            <div key={w.id} className={styles.listOfTasksUnits}>
                                <Checkbox
                                    // type="checkbox"
                                    checked={w.isDone}
                                    onChange={onChangeStatusHandler} />
                                <EditableSpan title={w.spanTitle} editMode={false} onChange={onChangeTitleHandler} />
                                <Button onClick={onClickHandler}  >
                                    <Delete />
                                </Button>
                                {/* <button onClick={onClickHandler}>X</button> */}
                            </div>
                        );
                    })

                }
            </div>
            <div className={styles.buttons}>
                <Grid style={{ padding: "10px" }}>
                    <ButtonGroup aria-label="outlined primary button group">
                        <Button variant={props.filter === "all" ? "contained" : "text"}
                            onClick={onAllClickHandler}>All</Button>
                        <Button color='success' variant={props.filter === "active" ? "contained" : "text"}
                            onClick={onActiveClickHandler}>Active</Button>
                        <Button color='error' variant={props.filter === "completed" ? "contained" : "text"}
                            onClick={onCompletedClickHandler}>Completed</Button>
                    </ButtonGroup>
                </Grid>
                {/* <button
                    className={props.filter === "all" ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
                <button
                    className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active</button>
                <button
                    className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed</button> */}
            </div>
        </div >
    );
}

export default ToDoList;