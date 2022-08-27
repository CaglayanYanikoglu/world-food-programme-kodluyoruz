import React from 'react';
import withTheme from '../../hocs/withTheme';

const Header = (props) => {
    console.log('header props: ', props);
    return (
        <div className={props.theme}>
            <h1>{props.projectName}</h1>
            <p>Currenly Theme: {props.theme}</p>
            <button onClick={props.toggleTheme}>Switch Theme</button>
            {/* <WithTheme /> */}
        </div>
    )
};

// export default Header;
export default withTheme(Header);
