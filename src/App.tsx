import React from 'react';
import './App.css';
import ToDoList,{Tasks} from "./ToDoList";

function App() {
    const title_1= "Title 1";
    const title_2= "Title 2";

    const isDoneDataArray_1=[
        {id:1, checked:true,spanTitle:"React"},
        {id:1, checked:true,spanTitle:"Redux"},
        {id:1, checked:false,spanTitle:"MobX"},
    ]
    const isDoneDataArray_2=[
        {id:1, checked:true,spanTitle:"Vanilla JS"},
        {id:1, checked:false,spanTitle:"Vue.js"},
        {id:1, checked:false,spanTitle:"Angular"},
    ]
  return (
   <div className="App">
     <ToDoList title={title_1} isDone={isDoneDataArray_1}/>
     <ToDoList title={title_2} isDone={isDoneDataArray_2}/>
   </div>
  );
}

export default App;
