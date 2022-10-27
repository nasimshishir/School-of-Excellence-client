import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const AllCourses = () => {

    return (
        <div className=''>
            {/* Slider start */}

            {/* Slider End */}
            {/* Courses Section Start*/}

            <div className='container mx-auto'>
                <div className='grid grid-cols-4 gap-4 pt-20'>
                    <div className='col-span-4 lg:col-span-1'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-span-4 lg:col-span-3 px-6'>
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>

            {/* Courses Section End*/}
        </div>
    );
};

export default AllCourses;