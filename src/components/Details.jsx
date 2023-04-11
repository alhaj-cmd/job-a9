import React from 'react';
import { MapPinIcon, CurrencyDollarIcon,  LinkIcon, PhoneIcon,DocumentIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Details = ({data, handleAddToCart}) => {
    const  {salary, address, title, id, email, phone, respons, description, education,exprience} = data;
    return (
        <div className='lg:py-16 lg:px-16  sm:px-2 flex flex-col items-center gap-4 justify-between lg:flex-row'>
           <div className=''>
           <h4 className='py-4'><span className='font-bold'>Job Description: </span>{description}</h4>
             <p className='py-4'><span className='font-bold'>Job Responsibility: </span>{respons}</p>
             <p className='py-4'><span className='font-bold'>Educational Requirements: <br /></span>{education}</p>
             <p className='py-4'><span className='font-bold'>Experiences: <br /></span>{exprience}</p>

           </div>
          <div>
          <div className='border bg-violet-50 lg:py-10  px-4'>
            {/* <h2>{address}</h2> */}
            <p  className='font-bold border-b-[3px]'>Job <br /> Details</p>
            <p className='mr-6 flex py-2'><CurrencyDollarIcon className="h-6 text-violet-300  w-6" />  <span  className='font-semibold'>Salary :</span>{salary}</p>
            <p><span  className='font-semibold mr-6 flex py-2'> <DocumentIcon className="h-6 text-violet-300 w-6" />Job Title :{title}</span></p>
            <p className='font-bold border-b-[3px]'>Contact <br /> Information</p>
            <p className=''><span className='font-semibold flex mr-6 py-2'><PhoneIcon className="h-6 text-violet-300  w-6" /> Phone : {phone}</span></p>
            <p><span className='font-semibold mr-6 flex py-2'> <LinkIcon className="h-6 text-violet-300  w-6" />Email: </span>{email}</p>
            <h2 className='mr-6 flex py-2'><MapPinIcon className="h-6 text-violet-300  w-6" /> <span className='font-semibold'>Address :</span>{address}</h2>
            
           </div>
           <Link to="/job">
           <button onClick={() => handleAddToCart(data)} className='bg-gradient-to-r text-white w-full font-bold rounded-lg mt-2 px-4 py-3 from-sky-500 to-indigo-400'>Apply Now</button>
           </Link>
          </div>

        </div>
    );
};

export default Details;