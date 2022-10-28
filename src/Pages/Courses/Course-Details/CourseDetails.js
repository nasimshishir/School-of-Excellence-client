import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import ReactPrint from 'react-to-print';
import { useRef } from 'react';

const CourseDetails = () => {

    const courseDetailes = useLoaderData();

    const { id, image, duration, instructor, price, rating, classes, title, details, overview } = courseDetailes;

    const ref = useRef();
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-4 gap-4 pt-20'>
                {/* Details */}

                <div ref={ref} className='card-body rounded-lg shadow-lg col-span-4 lg:col-span-3  bg-white mb-16'>
                    <div className='lg:flex justify-between mb-5'>
                        <h2 className='text-3xl font-bold mb-3'>{title}</h2>

                    </div>
                    <img className='w-full rounded-sm' src={image} alt="" />
                    <div className='lg:flex justify-between mt-10'>
                        <div>
                            <p className='mb-3'><span className='font-medium'>Classes: </span><span> {classes}</span></p>
                            <p className='mb-3'><span className='font-medium'>Duration: </span><span>{duration}</span></p>
                            <p className='mb-3'><span className='font-medium'>Faculty: </span><span>{instructor}</span></p>
                        </div>
                        <div>

                            <p className='mb-3'><span className='font-medium'>Cost: </span><span>{price} /per year</span></p>
                            <p className='mb-3'><span className='font-medium'>Rating: </span><span>{rating}</span></p>
                        </div>

                    </div>
                    <div>
                        <p className='font-medium'>Course Details:</p>
                        <p>{overview}</p>
                        <p>{details}</p>
                    </div>
                </div>

                {/* Sidebar */}
                <div className='card-body rounded shadow-lg col-span-4 lg:col-span-1 mb-16'>
                    <ReactPrint trigger={() => <button className='btn btn-outline btn-sm'><FaDownload className='mr-2' />Download Details</button>}
                        content={() => ref.current} />
                    <button className='btn btn-outline btn-sm'><Link to={`/checkout/${id}`}>Get Premium Access</Link></button>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;