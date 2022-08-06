import React, { useState } from 'react';
import TodoList from './TodoList';

// function component
const TodoApp = () => {
  // REACT HOOKS
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }


  const addToList = () => {
    setTodos([...todos, newTodo]); // add new todo to the list
    setNewTodo('');
  }

  const deleteItem = (itemIndex) => {
    console.log('delete item index: ', itemIndex);
    const filteredData = todos.filter((item, index) => index !== itemIndex);
    setTodos(filteredData);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input value={newTodo} onChange={handleChange} type="text" placeholder="Add new todo" />
      <button onClick={addToList}>Add to List</button>
      {/* <p>New todo: {newTodo}</p> */}
      {/* passing props */}
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
