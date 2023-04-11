import React from 'react';

const Catagory = ({data}) => {
    // console.log(data)
    const {name, picture, title}=data;
    return (
        <div className='bg-violet-50 rounded-lg w-64 h-64 p-8'>
            <img className='bg-violet-200 rounded-lg mb-2' src={picture} alt="" />
            <h2 className='text-xl font-bold'>{name}</h2>
            <p>{title}</p>
        </div>
    );
};

export default Catagory;