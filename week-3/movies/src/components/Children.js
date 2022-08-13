import React from 'react';

const ExampleApp = (props) => {
  console.log('props', props);
  return (
    <>
      <p>Hello name: {props.name}</p>
      <div>
        {props.children}
      </div>
    </>
  )
}

export default ExampleApp;
