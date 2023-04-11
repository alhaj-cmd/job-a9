import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import {
//     Bars3BottomRightIcon,
//     XMarkIcon,
//   } from '@heroicons/react/24/solid'
  

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
       <div className="px-4 py-4 bg-violet-50 mx-auto sm:mx-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8">
         <div className='flex items-center justify-between'>
          <Link to={'/'} className="inline-flex items-center">
          <span className='ml-2 text-2xl font-bold tracking-wide '>techHero</span>
          </Link>
          {/* nav item section */}
         <ul className='items-center hidden font-semibold space-x-8 lg:flex'>
            <li>
                <NavLink
                to='/'
                className={({isActive}) =>(isActive ? 'text-gray-400' : 'default')}
                >Home</NavLink>
            </li>
            <li>
                <NavLink
                to='/statistics'
                className={({isActive}) =>(isActive ? 'text-gray-400' : 'default')}
                >Statistics</NavLink>
            </li>
            <li>
                <NavLink
                to='/job'
                className={({isActive}) =>(isActive ? 'text-gray-400' : 'default')}
                >Applied Jobs</NavLink>
            </li>
            <li>
                <NavLink
                to='/blog'
                className={({isActive}) =>(isActive ? 'text-gray-400' : 'default')}
                >Blog</NavLink>
            </li>

         </ul>
         <button className='bg-gradient-to-r text-white font-bold rounded-lg px-4 py-3 from-sky-500 to-indigo-400'>Star Applying</button>

         
          
        </div>
       </div>
    );
};

export default Header;