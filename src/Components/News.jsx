import React from 'react';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navbar';
import RightsideNav from './RightsideNaav/RightsideNav';

const News = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 gap-2'>
                <div className='col-span-3 border-2'>

                </div>
                <div className='border-2'>
                    <RightsideNav></RightsideNav>
                </div>

            </div>
           
        </div>
    );
};

export default News;