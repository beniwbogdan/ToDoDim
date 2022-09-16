
import React, { useState } from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import v1 from "react-uuid"

export type FilterValuesType = "all" | "completed" | "active";
type ToDoListType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodoList] = useState<Array<ToDoListType>>([
        { id: todolistId1, title: "task 1", filter: "active" },
        { id: todolistId2, title: "task 2", filter: "completed" },
    ]);

    let [tasksObj, setTasks] = useState({

        [todolistId1]: [
            { id: v1(), isDone: true, spanTitle: "React ", },
            { id: v1(), isDone: true, spanTitle: "Redux", },
            { id: v1(), isDone: false, spanTitle: "MobX", },],
        [todolistId2]: [
            { id: v1(), isDone: true, spanTitle: "HTML ", },
            { id: v1(), isDone: true, spanTitle: "JS", },
            { id: v1(), isDone: false, spanTitle: "CSS", },]
    });

    const removeTask = (id: string, todolistid: string) => {
        let tasks = tasksObj[todolistid];
        let filteredTasks = tasks.filter(t => t.id !== id);
        tasksObj[todolistid] = filteredTasks;
        setTasks({ ...tasksObj });
    }

    const addTask = (title: string, todolistid: string) => {
        let newTask = { id: v1(), isDone: false, spanTitle: title, }
        let tasks = tasksObj[todolistid];
        let newTasks = [newTask, ...tasks];
        tasksObj[todolistid] = newTasks;
        setTasks({ ...tasksObj });


    }
    const changeStatus = (taskId: string, isDone: boolean, todolistid: string) => {
        let tasks = tasksObj[todolistid];
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasks({ ...tasksObj });
        }


    }
    const changeFilter = (value: FilterValuesType, todolistid: string) => {
        let todolist = todolists.find(tl => tl.id === todolistid);
        if (todolist) {
            todolist.filter = value;
            setTodoList([...todolists]);
        }
    }
    const deleteTask = (todolistid: string) => {
        let filteredToDoList = todolists.filter(t => t.id !== todolistid);
        setTodoList(filteredToDoList);
        delete tasksObj[todolistid];
        setTasks({ ...tasksObj });
    }


    return (
        <div className="App">

            {


                todolists.map(tl => {


                    let tasksForToDoList = tasksObj[tl.id];


                    if (tl.filter === "completed") {
                        tasksForToDoList = tasksForToDoList.filter(t => !t.isDone);
                    } else if (tl.filter === "active") {
                        tasksForToDoList = tasksForToDoList.filter(t => t.isDone);
                    }

                    return <ToDoList
                        key={tl.id}
                        id={tl.id}
                        removeTask={removeTask}
                        tasks={tasksForToDoList}
                        title={tl.title}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        deleteTask={deleteTask}
                    />
                })}



        </div>
    );
}

export default App;
