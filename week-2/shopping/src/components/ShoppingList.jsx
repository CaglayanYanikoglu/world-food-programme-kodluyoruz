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
  componentDidMount() { // useEffect empty array
    console.log('shopping list is mounted');
  }

  // LifeCycle Methods
  componentDidUpdate(prevProps, prevState) {
    console.log('shopping list is updated');
  }

  // LifeCycle Methods
  componentWillUnmount() { // before unmounting/deleting
    console.log('shopping list is unmounted');
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
