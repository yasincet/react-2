import { useState,useEffect } from "react"
import TodoAdd from "./TodoAdd"
import TodoList from "./TodoList"
import "./styles.css"


export default function Todos(){
    const[todos, setTodos] = useState([
        { "id":1,"title": "todo1" },
        {"id":2,"title": "todo2" },
        {"id":3,"title": "todo3"},
        {"id":4,"title": "todo4"},
    ])
    
    useEffect(()=>{
        console.log(todos)
    },[todos])

   

return(

   <section  className="todoapp" >
   <TodoAdd setTodos={setTodos} todos={todos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
   
    </section>
)}