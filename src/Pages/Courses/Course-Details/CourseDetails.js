import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetailes = useLoaderData();

    const { id, image, duration, instructor, price, rating, classes, title } = courseDetailes;
    return (
        <div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    );
};

export default CourseDetails;