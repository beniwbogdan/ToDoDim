
import React, { useState } from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import { Task } from "./ToDoList";

function App() {
    const title_1 = "Title 1";


    let initTasks: Array<Task> = [
        { id: 1, checked: true, spanTitle: "React" },
        { id: 2, checked: true, spanTitle: "Redux" },
        { id: 3, checked: false, spanTitle: "MobX" },
    ]
    let [tasks, setTasks] = useState(initTasks);

    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    return (
        <div className="App">
            <ToDoList
                removeTask={removeTask}
                tasks={tasks}
                title={title_1} />

        </div>
    );
}

export default App;
