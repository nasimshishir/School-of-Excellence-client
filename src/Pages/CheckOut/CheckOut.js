import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { id, title, price } = useLoaderData();

    return (
        <div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    );
};

export default CheckOut;