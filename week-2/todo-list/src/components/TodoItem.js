import React from 'react';

/* const TodoItem = ({
  todo
}) => { */
const TodoItem = (props) => {
  return (
    <li>{props.todo}</li>
  );
};

export default TodoItem;