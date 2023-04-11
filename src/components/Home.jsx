import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';
import { useLoaderData } from 'react-router-dom';
import Features from './Features';

const Home = () => {
    const loadFeatures = useLoaderData()

    const [datas, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true)
    }
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    // console.log(features)
    return (
        <div>
            <div className='bg-violet-50 lg:py-6 lg:px-8 sm:px-2 flex flex-col items-center justify-between lg:flex-row'>
                <div className='mb-10 lg:max-w-lg   lg:pr-2 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>
                        <h2 className='max-w-lg mb-6 font-sans md:text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            What is the job <br /> of a tech? <br />
                            <span className='inline-block text-blue-400'>See More</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            A tech job is one that deals with computer programs, hardware, software, networking, and maintaining systems.
                        </p>
                        <button className='bg-gradient-to-r text-white font-bold rounded-lg mt-2 px-4 py-3 from-sky-500 to-indigo-400'>Get Started</button>
                    </div>
                </div>

                <div className='relative lg:w-1/2 '>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56 md:pt-6  sm:h-96'>
                        <img className='md:h-96 rounded-lg' src="img.png" alt="" />
                    </div>
                </div>
            </div>


            {/* Job Category List */}

            <div className='py-8'>
                <div className='text-center'>
                    <h2 className='md:text-4xl font-bold mb-2'>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className='flex flex-col px-4 py-4 sm:items-center justify-between lg:flex-row'>
                    {
                        datas.map((data) => <Catagory
                            key={data.id}
                            data={data}
                        ></Catagory>)
                    }
                </div>

                <div >
                    <div className='grid grid-cols-2 gap-4 px-4 py-4 sm:items-center'>
                        {
                            loadFeatures.slice(0, showAll ? 6 : 4).map(feature => <Features
                                key={feature.id}
                                feature={feature}
                            ></Features>)
                        }
                    </div>
                    <p className='flex justify-center' onClick={handleShowAll}>
                        <button className='bg-gradient-to-r text-white font-bold rounded-lg mt-2 px-4 py-3 from-sky-500 to-indigo-400'>See All Jobs</button>
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Home;