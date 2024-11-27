// 
import React,{useState} from "react";
import TodoItem from "./TodoItem";
const TodoList = ()=>
{

  const[todos,setTodo]=useState([]);
  const[newtodo,setNewtodo]=useState('');
  const addtodo=()=>
  {
    if(newtodo.trim())
    {
      setTodo([...todos,newtodo])
      setNewtodo('')
    }

  } 
  const deletetodo=(index)=>
  {
    setTodo(todos.filter((_,i)=> i!==index));
  }

  return(
    <div>
      <h1>ToDoList</h1>
      <input type ="text" placeholder=" add new todo" value={newtodo} onChange={(e)=>setNewtodo(e.target.value)}/>
      <button onClick={addtodo}>add</button>
      <div>
        {
        todos.map((todo,index)=>(
        <TodoItem key={index} text={todo} onDelete={()=>deletetodo(index)}/>
        )
        )
         }   
      </div>
    </div>
  )

}
export default TodoList;