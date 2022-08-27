import React, { useContext } from 'react';
import Main from '../../components/Main';
// import ThemeContext from '../../context/ThemeContext';
import Header from '../../components/Header';

const Home = () => {
    /* const context = useContext(ThemeContext);
    console.log('context:', context.theme); */
    return (
        <>
            <Header projectName="Kodluyoruz" />
            <Main projectName="kodluyoruz" />
        </>
    );
};

export default Home;
