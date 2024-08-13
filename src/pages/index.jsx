import React, { useState } from "react";
import './style.css'


const data = [
    {
        description: "1-2 sleep"
    },
    {
        description: "7-8 bath"
    },
    {
        description: "9-10 breakfast"
    },
    {
        description: "11-6 work"
    }
]

const Project = () => {

    const [todoList,setTodoList] = useState(data)
    // const [isEditing,setIsEditing] = useState({ isEditing: false, editIndex: -1})
    const [isEditing,setIsEditing] = useState(false)
    const [editIndex, setEditIndex] = useState(-1)
    const [inputValue,setInputValue] = useState()

    

    const deleteItem = (index) =>{
      const filteredItems =  todoList.filter((item,itemIndex)=>(
             index != itemIndex
        ))

        setTodoList(filteredItems)
  
    
    }

    const handleEdit = (index) => {
        setIsEditing(true)
        setEditIndex(index)
        setInputValue(todoList[index].description)
        // setIsEditing({...isEditing, editIndex:8})
    }

    const handleSave = (index) =>{
        setIsEditing(false)
      
    let item = todoList[index]
    item.description = inputValue

    setTodoList(todoList)

       
      
    }  

   

    return (
        <>
            <div className="container">

                {
                    todoList.map((item, index) => (
                        <div key={index} className="item">
                            {isEditing && editIndex == index ?
                             <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} />:
                             <div className="description">{item.description}</div> 
                            }
                            
                            <br />
                            <div className="actions">
                                {
                                    isEditing && editIndex == index ?
                                    <button onClick={()=>handleSave(index)}>save</button> :
                                    <button onClick={() => handleEdit(index)}>edit</button>

                                }
                                
                                <button onClick={()=>deleteItem(index)}>delete</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Project

