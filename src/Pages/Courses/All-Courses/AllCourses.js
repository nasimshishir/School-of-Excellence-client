import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const AllCourses = () => {

    const courses = useLoaderData();

    return (
        <div>
            {/* Slider start */}

            {/* Slider End */}
            {/* Courses Section Start*/}

            <div className='container mx-auto'>
                <div className='grid grid-cols-4 gap-4 mt-20'>
                    <div className=''>
                        <Sidebar courses={courses}></Sidebar>
                    </div>
                    <div className='col-span-3 px-16'>
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>

            {/* Courses Section End*/}
        </div>
    );
};

export default AllCourses;