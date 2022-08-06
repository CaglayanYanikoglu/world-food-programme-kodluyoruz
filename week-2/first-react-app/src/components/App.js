import React from 'react';
import '../App.css';
import Card from './Card';

// class Component
class App extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      count: 0,
      name: ''
    }
    this.name = 'caglayan'

    // bind increase count
    // this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    // this.name = 'erol';
  };

/*   increaseCount() {
    this.setState({
      count: this.state.count + 1
    })
  } */

  changeName = () => {
    console.log('changeName');
    this.name = 'erol';
  };

  changeStateName = () => {
    console.log('changeStateName');
    this.setState({
      name: 'Michael Jordan'
    })
  }

  /* https://jsonplaceholder.typicode.com/posts */
  render() { /* render method: render html elements */
    return (
      <div>
        <h1 className='header-title'>App title</h1>
        <div>
          <button onClick={this.increaseCount}>Increse Count {this.state.count}</button>
          <button onClick={this.changeName}>change name</button>
          <button onClick={this.changeStateName}>change state name</button>
          <p>Count: {this.state.count}</p>
          <p>Name : {this.name}</p>
          <p>State Name : {this.state.name}</p>
        </div>
      </div>
    )
  }
}

export default App;
