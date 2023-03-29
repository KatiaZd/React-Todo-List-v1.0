import React from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { Todo, toggleTodo } from '../../types';

interface Props {
    todos: Todo[];
    toggleTodo: toggleTodo;
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