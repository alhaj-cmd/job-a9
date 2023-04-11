import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Features = ({ feature }) => {
    // console.log(feature)
    const { name, title, picture, salary, address, length, job } = feature;
    return (
        <div>
            <div className="feature border overflow-hidden  px-6 py-4">
                <img className='h-48 w-60' src={picture} alt="" />
                <div className='py-2'>
                    <h2 className='text-2xl'>{name}</h2>
                    <p className='py-1'>{title}</p>
                    <div className='flex py-1'>
                        <button className='mr-4 border py-1 px-4 text-violet-600'>{job}</button>
                        <button className='ml-4 border py-1 px-4 text-violet-600'>{length}</button>
                    </div>
                    <p className='mr-6 flex py-2'> <MapPinIcon className="h-6 text-gray-300 w-6" /> {address}<span className='ml-16 inline-flex' ><CurrencyDollarIcon className="h-6 text-gray-300 w-6" /> salary: {salary}</span></p>
                </div>
                <Link to={`/feature/${feature.id}`}> <button className='bg-gradient-to-r text-white font-bold rounded-lg mt-2 px-4 py-3 from-sky-500 to-indigo-400'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Features;