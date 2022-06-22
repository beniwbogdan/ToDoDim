import React from 'react';

type Task={
    id:number,
    checked:boolean,
    spanTitle:string
}

export type Tasks ={
    title:string,
    isDone:Array<Task>
}
const ToDoList = (props:Tasks) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.isDone[0].checked}/><span>{props.isDone[0].spanTitle}</span></li>
                <li><input type="checkbox" checked={props.isDone[1].checked}/><span>{props.isDone[1].spanTitle}</span></li>
                <li><input type="checkbox" checked={props.isDone[2].checked}/><span>{props.isDone[2].spanTitle}</span></li>
            </ul>
        </div>
    );
}

export default ToDoList;