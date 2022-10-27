import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Sidebar = () => {

    const courses = useLoaderData();

    return (
        <div className=''>
            {
                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}><p className='rounded-md shadow-md p-3 my-3 hover:'>{course.title}</p></Link>)
            }
        </div >
    );
};

export default Sidebar;