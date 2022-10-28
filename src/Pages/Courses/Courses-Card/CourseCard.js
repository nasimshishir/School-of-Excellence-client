import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {

    const { id, image, duration, instructor, price, rating, classes, title, overview } = course;
    return (
        <div className='col-span-3 lg:col-span-1'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title.substring(0, 23)}...</h2>
                    <p>{overview.substring(0, 90)}<Link className='font-medium #3730a3' to={`/courses/${id}`}> ...Read More</Link></p>
                    <div className='flex'>
                        <span className='font-medium text-base mr-2'>Faculty:</span><span className='text-blue-600'>{instructor}</span>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline"><Link to={`/courses/${id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;