import React from 'react';
import ShoppingItem from './ShoppingItem';
import { ListWrapper } from './StyledComponents/ScShopping';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    /* this.state = {
      projectName: 'Shopping',
      memberCount: 28
    } */
    console.log(this);
  }

  // LifeCycle Methods
  componentWillMount() {
    console.log('component will mounth');
  }

  // Lifecycle Methods
  componentWillReceiveProps(nextProps) {
    console.log('component will receive props', nextProps);
    if (nextProps.search !== this.props.search) {
      console.log('search changed');
    }
  }

  // Lifecycle methods
  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update', nextProps, nextState);
    if (nextProps.search !== this.props.search) {
      return true; // update component or not
    } else {
      return false;
    }
  }

  // LifeCycle Methods
  componentDidMount() { // useEffect empty array
    // fetching, side effect
    // console.log('shopping list is mounted');,
    console.log('component did mount');
  }

  // LifeCycle Methods
  componentDidUpdate(prevProps, prevState) {
    // console.log('shopping list is updated');
    console.log('component did update');
  }


  // LifeCycle Methods
  componentWillUnmount() { // before unmounting/deleting
    // console.log('shopping list is unmounted');
    console.log('component will unmount');
  }

  render() {
    /* const { projectName, memberCount } = this.state; */
    return (
      <div className="shopping-list">
        {/* <h1>{projectName} ({memberCount})</h1> */}
        {/* <p>My name is {this.props.name}</p> */}
        <ListWrapper>
          {this.props.data.map(item => (
            <ShoppingItem key={item.id} item={item} />
          ))}
        </ListWrapper>
        {/* <h1>Children: {this.props.children}</h1> */}
      </div>
    );
  }
}

export default ShoppingList;
