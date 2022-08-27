import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import ErrorBoundary from '../../components/ErrorBoundary';

const Home = () => {
    const user = {

    }
    // console.log(user.asda.sda)
    return (
        <div>
            <h2>Home</h2>
            <ErrorBoundary componentName="Header">
                <Header />
            </ErrorBoundary>
            <ErrorBoundary componentName="Main">
                <Main />
            </ErrorBoundary>
        </div>
    );
};

export default Home;
