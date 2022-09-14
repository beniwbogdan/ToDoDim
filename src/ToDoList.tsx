import React from 'react';

export type Task = {
    id: number,
    isDone: boolean,
    spanTitle: string,

}

export type ToDoListPropsType = {
    title: string,
    tasks: Array<Task>,
    removeTask: Function,
    changeFilter: Function

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
                                <input type="checkbox" checked={w.isDone} />
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