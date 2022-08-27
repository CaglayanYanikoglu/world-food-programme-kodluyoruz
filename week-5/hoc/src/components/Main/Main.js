import React from 'react';
import withUser from '../../hocs/withUser';
// import withTheme from '../../hocs/withTheme';

const Main = (props) => {
    console.log('main proops, ', props);
    return (
        <div>
         {/*    <h2>Main</h2>
            <p>Project name: {props.projectName}</p> */}
        </div>
    )
};

// export default Main;
// export default withTheme(Main);
export default withUser(Main);
