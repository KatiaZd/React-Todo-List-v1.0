import React from "react";
import { Todo, toggleTodo } from '../../types';


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: toggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  
  return <li>
    <label 
    // className="TodoListItem__complete"
    style={{textDecoration: todo.complete ? 'line-through' : 'none'}}
    >
        <input type="checkbox" checked={todo.complete} 
        onClick={() => {
            toggleTodo(todo);
        }}
        /> {''}
        {todo.text} 
    </label>
  </li>;

};