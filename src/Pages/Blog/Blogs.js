import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto px-6'>
            <div className='mt-10'>
                <li className='fs-5 fw-semibold text-primary'>How does React work?</li>
                <p className='text-secondary'><small>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</small>
                </p>
            </div>

            <div className='mt-4'>
                <li className='fs-5 fw-semibold text-primary'>What are differences between props and states?</li>
                <p className='text-secondary'><small>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</small>
                </p>
            </div>

            <div className='mt-4'>
                <li className='fs-5 fw-semibold text-primary'>What are the use of useEffect?</li>
                <p className='text-secondary'><small>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</small>
                </p>
            </div>
        </div>
    );
};

export default Blogs;