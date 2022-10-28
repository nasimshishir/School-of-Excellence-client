import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { title, price } = useLoaderData();

    return (
        <div className='container mx-auto p-5'>

            <h2 className='text-center text-6xl font-bold py-16'>Checkout</h2>

            <div className='card-body rounded-lg shadow-lg bg-white  text-center w-full'>
                <p className='text-2xl font-bold'>{title}</p>
                <p className='text-lg'><span className='font-medium'>Initial Price: </span><span>{price}</span> for 1 year</p>
                <div className=''>
                    <button className='btn btn-outline btn-sm'><Link>Proceed</Link></button>
                </div>

            </div>


        </div>
    );
};

export default CheckOut;