import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='w-10/12 lg:w-10/12 mx-auto mb-11'>
            <Header></Header>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;