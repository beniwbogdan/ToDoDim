import React from 'react';
import './App.css';
import ToDoList,{Tasks} from "./ToDoList";

function App() {
    const title_1= "Title 1";
    const title_2= "Title 2";

    const task_1=[
        {id:1, checked:true,spanTitle:"React"},
        {id:2, checked:true,spanTitle:"Redux"},
        {id:3, checked:false,spanTitle:"MobX"},
    ]
    const task_2=[
        {id:1, checked:true,spanTitle:"Vanilla JS"},
        {id:2, checked:false,spanTitle:"Vue.js"},
        {id:3, checked:false,spanTitle:"Angular"},
    ]
  return (
   <div className="App">
     <ToDoList title={title_1} isDone={task_1}/>
     <ToDoList title={title_2} isDone={task_2}/>
   </div>
  );
}

export default App;
