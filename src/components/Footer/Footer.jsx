import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-zinc-900  text-slate-600  '> 
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 pt-12 mb-8 text-slate-600 justify-between list-none'>
                <div>
                    <h3 className='text-2xl text-white pb-6'>FoodBuzz</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div>
                    <h3 className='text-2xl text-white pb-6'>Company </h3>
                    <li><a>About Us</a></li>
                    <li><a>Work</a></li>
                    <li><a href='#'>Latest News </a></li>
                    <li><a href='#'>Careers </a></li>

                </div>
                <div>
                    <h3 className='text-2xl text-white pb-6'>Products</h3>
                    <li><a href='#'>Phototype</a></li>
                    <li> <a href='#'>Plan & Pricing </a></li>
                    <li><a href='#'>Customers </a></li>
                    <li><a href='#'>Integrations  </a></li>
                </div>
                <div>
                    <h3 className='text-2xl text-white pb-6'>Support </h3>
                    <li><a href='#'> Help  Dask  </a></li>
                    <li> <a href='#'>Become a Partner  </a></li>
                    <li><a href='#'>Decelopers </a></li>
                </div>
                <div>
                    <h3 className='text-2xl text-white pb-6'>Contact</h3>
                    <li><a href='#'>524, Broadaway, NYC </a></li>
                    <li><a href='#'>+1777-5557-0987 </a></li>
                </div>

            </div>
            <hr className=' text-slate-600  ' />

            <div className=' grid grid-cols-1 md:grid-cols-2 justify-between mt-5 pb-12'>
                <p>@2023 CareerHub , All Rights Resurved </p>
                <p>Powered by FoodBuzz </p>
            </div>
        </div>
    );
};

export default Footer;