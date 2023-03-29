import { useState } from 'react';
import './App.css';
import { Todo } from './types';
import { TodoList } from './components/TodoList/todoList';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';


const initialTodos: Todo[] = [

  { 
    text: 'Apprendre React', complete: true 
  },
  { 
    text: 'Commencer nouveau projet', complete: false 
  },

];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };


  return(
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />;
      <AddTodoForm addTodo={addTodo} />
    </>

  );
  
}

export default App;
