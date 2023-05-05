import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Header from '../pages/Share/Header/Header';
import Footer from '../pages/Share/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;