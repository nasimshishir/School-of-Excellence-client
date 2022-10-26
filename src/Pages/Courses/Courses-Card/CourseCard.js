import React from 'react';

const CourseCard = ({ course }) => {

    const { id, image, duration, instructor, price, rating, classes, title } = course;
    return (
        <div className='my-3'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;