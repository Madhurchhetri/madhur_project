import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const TodoList = ( {currTask ,handleDelete,handleCheck,checked}) => {
  return (
    <>
    <div className='task-parent'>
         <p className={checked ? "checked" : 'notChecked'}> {currTask}</p>
          <span  onClick={()=>handleCheck(currTask)}><FaCheckCircle /></span>
          <span onClick={()=>handleDelete(currTask)}><MdDelete /></span>
        
        </div>
    </>
  )
}

export default TodoList