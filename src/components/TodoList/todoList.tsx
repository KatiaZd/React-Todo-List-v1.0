import React from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem';
// import { Todo, toggleTodo } from '';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}
export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    );
  }; 