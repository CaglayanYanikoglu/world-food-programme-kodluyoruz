import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <>
          {/* props */}
          < TodoItem todo={todo} />
        </>
      ))}
    </ul>
  );
};

export default TodoList;