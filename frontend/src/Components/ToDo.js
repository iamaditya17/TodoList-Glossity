import React from 'react'
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"


export default function ToDo({ text, updateTask, deleteTask }) {
  return (
    <div className="toDo"> 
        <div className="text">{text}</div>
        <div className="icons">
            <BiEdit className="icon" onClick={updateTask}/>
            <AiFillDelete className="icon" onClick={deleteTask}/>
        </div>
    </div>
  )
}

//BiEdit  --> react edit icon
//AiFillDelete  --> react delete icon

//npm i react-icons ---> install react icons in the application
