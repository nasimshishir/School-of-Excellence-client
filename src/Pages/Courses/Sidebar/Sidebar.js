import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ courses }) => {
    return (
        <div className=''>
            {
                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}><p>{course.title}</p></Link>)
            }
        </div >
    );
};

export default Sidebar;