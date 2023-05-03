import React from 'react';
import { BeakerIcon, BookmarkIcon } from '@heroicons/react/24/solid'

const Card = () => {
    return (
        <div>
            
        <div className='grid grid-cols-2 gap-4 justify-between mt-5'>

            <div className="col glass rounded-md">
            <img className='rounded-md' src="https://www.touchbistro.com/wp-content/uploads/2019/10/famous-chefs-marucs-samuelsson.jpg" />
                <div className="p-3">
                    <h2 className="card-title">Name</h2>
                    <p>How to park your car at your garage?</p>

                    <div className='flex justify-between mt-3'>
                    <p><span className='text-sky-800'>1200</span> Likes</p>
                    <p>items of chef</p>
                    <p><span className='text-red-800'>Expeerience: </span></p>
                    </div>

                    <div className="flex justify-between mt-3 ">
                    <button className="text-sm bg-sky-500 text-white ">View Datails</button>
                    {/* <div className="">
                    <button className='text-sm  bg-slate-600 text-white flex items-center gap-2'><span> Add to Favorite</span><BookmarkIcon className="h-4 w-4 text-white" /></button>
                    
                    </div> */}
                    </div>
                </div>
            </div>


            <div className=" col  glass">
            <figure><img src="https://www.touchbistro.com/wp-content/uploads/2019/10/famous-chefs-marucs-samuelsson.jpg" alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>

            
            <div className="col  glass">
            <figure><img src="https://www.touchbistro.com/wp-content/uploads/2019/10/famous-chefs-marucs-samuelsson.jpg" alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>

        </div>

        </div>
    );
};

export default Card;