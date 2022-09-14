import React from 'react';

export type Task = {
    id: string,
    isDone: boolean,
    spanTitle: string,

}

export type ToDoListPropsType = {
    title: string,
    tasks: Array<Task>,
    removeTask: Function,
    changeFilter: Function,
    addTask: Function

}
const ToDoList = (props: ToDoListPropsType) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text" className="form-control" placeholder="Enter..." />
                <button onClick={() => props.addTask()}>+</button>
            </div>

            <ul>
                {
                    props.tasks.map(w => {

                        return (
                            <li key={w.id}>
                                <input type="checkbox" checked={w.isDone} onChange={() => { }} />
                                <span>{w.spanTitle}</span>
                                <button onClick={() => { props.removeTask(w.id) }}>X</button>
                            </li>
                        );
                    })

                }
            </ul>
            <div className="buttons">
                <button onClick={() => { props.changeFilter("all") }}>All</button>
                <button onClick={() => { props.changeFilter("completed") }}>Active</button>
                <button onClick={() => { props.changeFilter("active") }}>Completed</button>
            </div>
        </div >
    );
}

export default ToDoList;