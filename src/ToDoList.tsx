import React from 'react';

export type Task = {
    id: number,
    checked: boolean,
    spanTitle: string
}

export type ToDoListPropsType = {
    title: string,
    tasks: Array<Task>,
    removeTask: Function
}
const ToDoList = (props: ToDoListPropsType) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>

            <ul>
                {
                    props.tasks.map(w => {
                        return (
                            <li>
                                <input type="checkbox" checked={w.checked} />
                                <span>{w.spanTitle}</span>
                                <button onClick={() => { props.removeTask(w.id) }}>X</button>
                            </li>
                        );
                    })

                }
            </ul>
            <div className="buttons">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div >
    );
}

export default ToDoList;