import React, {useState} from 'react';
import './App.css';
import ToDoList, {Tasks} from "./ToDoList";

function App() {
    const title_1 = "Title 1";
    const title_2 = "Title 2";

    let initTasks = [
        {id: 1, checked: true, spanTitle: "React"},
        {id: 2, checked: true, spanTitle: "Redux"},
        {id: 3, checked: false, spanTitle: "MobX"},
    ]
debugger
    //  const [task_1,removeTask]=useState(true);
    let arr = useState(initTasks);
    let tasks = arr[0];
    let setTasks = arr[1];

    const removeTask = (id: number) => {
        let filteredTask = tasks.filter(w => w.id !== id)
        setTasks(filteredTask);
    }
    return (
        <div className="App">
            <ToDoList removeTask={removeTask} title={title_1} isDone={tasks}/>

        </div>
    );
}

export default App;
