import React,{useState} from 'react'


const TodoForm = ({toDoAdd}) => {
    const [inputValue , setInputValue]= useState({});
    const handleChange =(value)=>{
        setInputValue({id:value , content:value ,checked:false})
        // console.log(value);
        
    }
    const handleFormSubmit =(e)=>{
      e.preventDefault();
      toDoAdd(inputValue);
        setInputValue({id:"" , content:"" ,checked:""})
    }
  return (
    <>
        <form  onSubmit={handleFormSubmit}>
            <input type="text" value={inputValue.content} onChange={(e)=>handleChange(e.target.value)} />
             <button type='submit'>Submit</button>
         </form>
    </>
  )
}

export default TodoForm