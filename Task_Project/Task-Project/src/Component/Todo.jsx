import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.css'


const storageKey = "reactTodo"

const Todo = () => {
    
    const [data , setData] = useState(()=>{
        const rawTodo = localStorage.getItem(storageKey);
        if(!rawTodo) return [];
        return JSON.parse(rawTodo)
    });
    const [date , setDate] = useState("");

    

    const handleFormSubmit =(inputValue)=>{

        const {id,content,checked}=inputValue;
        // to check if the input value is or not
        if (!content)return; 

        // to check the data already exist or not 
        // if(data.includes(inputValue)){
        //     return;
        // }

        const matched = data.find((currTask)=>currTask.content===content)
        if (matched)return;
        setData((prev)=>[...prev , {id:id,content:content, checked:checked}])
        
    }

    // Date And Time 
    useEffect(()=>{
        const updateAndTime =  setInterval(()=>{
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatedTime = now.toLocaleTimeString();
            setDate(`${formatedDate} -${formatedTime}`)
        },1000)

        return ()=> clearInterval(updateAndTime)

    },[])

    // Delete

    const handledTaskDelete=(value)=>{
        const remove = data.filter((currTask)=>currTask.content!==value)
        setData(remove);
    }
   
    // chechk task

    const handleTaskCheck=(value)=>{
       const updateTask = data.map((currTask)=>{
        if (currTask.content===value) {
            return {...currTask , checked:!currTask.checked}
        }else{
            return currTask;
        }
       })
       setData(updateTask);
    }
  
    // Add Data Local Storage

    localStorage.setItem(storageKey, JSON.stringify(data))


    // clear all
    const handleClear=()=>{
        setData([])
    }


  return (
    <>
        <section className='todo-parent'>
            <header>
                <h1>To DO List <em>Add Task</em></h1>
            </header>
            <div>
                <p>{date}</p>
            </div>
            <section>
                <TodoForm toDoAdd={handleFormSubmit}/>
                <section className='task-list'>
                    {
                        data.map((currTask)=>{
                            return (
                                <>
                                   <TodoList key={currTask.id} currTask={currTask.content} handleDelete={handledTaskDelete} handleCheck={handleTaskCheck} checked={currTask.checked}/>
                                </>
                            )
                        })
                    }
                </section>
                <div className='clear'>
                    <button onClick={handleClear}>Clear All</button>
                </div>
            </section>
        </section>
    </>
  )
}

export default Todo