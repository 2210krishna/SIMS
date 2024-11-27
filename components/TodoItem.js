import React from "react";
const TodoItem = ({ text, onDelete }) => (
    <div>
      <span>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
  
  export default TodoItem;
  