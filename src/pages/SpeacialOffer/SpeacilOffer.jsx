import React from 'react';
import './SpecialOffer.css'
import Marquee from "react-fast-marquee";

const SpeacilOffer = () => {
    return (
        <div>
             <div className='offerContainer  align-middle  w-full '>
                <Marquee speed={100}>
            <div className=' bg-white bg-opacity-60 border rounded-md mx-auto align-middle md:w-10/12 w-12/12  '>
                <h4 className='font-bold text-center pt-2 mb-4'>Our Special Offer:</h4>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center '>
                    <div>
                        <h6 className='text-2xl font-bold mb-3 italic'> 1 for 10$</h6>
                        <hr />
                        <h6 className='text-2xl font-bold mb-3 italic'>Choise of 2:</h6>
                        <hr />
                        <p className='mt-2'>Soup</p>
                        <p>1/2 Aci Bowl</p>
                        <p>1/2 Sandwise</p>
                    </div>

                    <div>
                        <h6 className='text-2xl font-bold mb-1 italic'>1 Day free</h6>
                        <hr />
                        <h6 className='text-2xl font-bold mb-1 italic'>7 day Delux</h6>
                        <p className=' font-semibold'>Cleanse program:</p>
                        <hr />
                       <p className='mt-1'> Include 1/2 Acai bowl or smoothie</p>
                       <p>7 day plans startind A $42</p>
                    </div>

                </div>
                

            </div>
           </Marquee>
        </div>
        </div>
    );
};

export default SpeacilOffer;