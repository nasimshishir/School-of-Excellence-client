import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa'

const CourseDetails = () => {
    const courseDetailes = useLoaderData();

    const { id, image, duration, instructor, price, rating, classes, title, details } = courseDetailes;
    return (
        <div className='container rounded shadow-lg p-5'>
            <div className='lg:flex justify-between mb-5'>
                <h2 className='text-3xl font-bold mb-3'>{title}</h2>
                <button className='btn btn-outline btn-sm'><FaDownload className='mr-2' />Download Details</button>
            </div>
            <img className='w-full rounded-sm' src={image} alt="" />
            <div className=''>
                <div>
                    <p className='mb-3'><span>{classes}</span></p>
                    <p className='mb-3'><span>{duration}</span></p>
                    <p className='mb-3'><span>{instructor}</span></p>
                </div>
                <div>
                    <p className='mb-3'><span>{ }</span></p>
                    <p className='mb-3'><span>{price}</span></p>
                    <p className='mb-3'><span>{rating}</span></p>
                </div>
                <div>
                    <p>{details}</p>
                </div>

                <button className='btn btn-outline btn-sm'><Link to={`/checkout/${id}`}>Get Premium Access</Link></button>
            </div>
        </div>
    );
};

export default CourseDetails;