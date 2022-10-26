import React from 'react';
import CourseCard from '../Courses-Card/CourseCard';
import Sidebar from '../Sidebar/Sidebar';

const AllCourses = () => {
    return (
        <div>
            {/* Slider start */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* Slider End */}
            {/* Courses Section Start*/}

            <div className='container mx-auto'>
                <div className='grid grid-cols-4 gap-4 mt-20'>
                    <div className=''>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-span-3 px-16'>
                        <CourseCard></CourseCard>
                    </div>

                </div>
            </div>

            {/* Courses Section End*/}
        </div>
    );
};

export default AllCourses;