import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins font-semibold'>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;