
import React, { useState } from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import { Task } from "./ToDoList";
import v1 from "react-uuid"

export type FilterValuesType = "all" | "completed" | "active";
const title_1 = "Title 1";





function App() {
    let [tasks, setTasks] = useState<Array<Task>>([
        { id: v1(), isDone: true, spanTitle: "React ", },
        { id: v1(), isDone: true, spanTitle: "Redux", },
        { id: v1(), isDone: false, spanTitle: "MobX", },
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");


    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    const addTask = (title: string) => {
        let newTask = { id: v1(), isDone: false, spanTitle: title, }
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);


    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }

    let tasksForToDoList = tasks;


    if (filter === "completed") {
        tasksForToDoList = tasks.filter(t => !t.isDone);
    } else if (filter === "active") {
        tasksForToDoList = tasks.filter(t => t.isDone);
    }
    const changeStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks]);

    }
    return (
        <div className="App">
            <ToDoList
                removeTask={removeTask}
                tasks={tasksForToDoList}
                title={title_1}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={filter}
            />

        </div>
    );
}

export default App;
