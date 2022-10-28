import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import CourseCard from '../Courses-Card/CourseCard';

const AllCourses = () => {
    const courses = useLoaderData();

    return (
        <div className=''>
            {/* Slider start */}

            {/* Slider End */}
            {/* Courses Section Start*/}

            <div className='container mx-auto'>
                <div className='grid grid-cols-4 gap-4 pt-20'>
                    <div className='col-span-4 lg:col-span-1'>
                        {<div className=''>
                            {
                                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}><p className='rounded-md shadow-md p-3 my-3 hover:'>{course.title}</p></Link>)
                            }
                        </div >}
                    </div>
                    <div className='col-span-4 lg:col-span-3 px-6'>
                        <div>
                            {
                                courses.map(course => <CourseCard
                                    key={course.id}
                                    course={course}
                                ></CourseCard>)
                            }
                        </div>
                    </div>

                </div>
            </div>

            {/* Courses Section End*/}
        </div>
    );
};

export default AllCourses;