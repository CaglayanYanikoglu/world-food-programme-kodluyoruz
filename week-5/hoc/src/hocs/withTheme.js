import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const withTheme = WrappedComponent => {
    return props => {
        const { theme, toggleTheme } = useContext(ThemeContext);
        return (
            <WrappedComponent
                theme={theme}
                toggleTheme={toggleTheme}
                {...props}
            />
        );
    };
};
export default withTheme;