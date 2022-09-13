import React from 'react';

type Task = {
    id: number,
    checked: boolean,
    spanTitle: string
}

export type Tasks = {
    title: string,
    isDone: Array<Task>,
    removeTask:Function
}
const ToDoList = (props: Tasks) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

            <ul>
                {
                    props.isDone.map(w => {
                        return <li><input type="checkbox"
                                          checked={w.checked}/><span>{w.spanTitle}</span>
                            <button onClick={()=>{
                                props.removeTask(w.id);
                                console.log(w.id)}}>X</button>
                        </li>

                    })
                }


            </ul>
            <div className="buttons">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}

export default ToDoList;