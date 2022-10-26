import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Sidebar = () => {

    const courses = useLoaderData();

    return (
        <div className=''>
            {
                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}><p>{course.title}</p></Link>)
            }
        </div >
    );
};

export default Sidebar;