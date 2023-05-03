import React from 'react';
import { BeakerIcon, BookmarkIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'


const Card = ({data}) => {
    const {id, name, photo_url, recipes_numbers, experience_years    } = data;
    
    
    return (
        <div>
            
       

            <div className="col glass rounded-md">
            <img className='rounded-md' src="https://www.touchbistro.com/wp-content/uploads/2019/10/famous-chefs-marucs-samuelsson.jpg" />
                <div className="p-3">
                    <h2 className="card-title">Name: {name}</h2>

                    <div className='flex justify-between mt-3'>
                  
                    <p className='flex items-center gap-1'> <span>  <HandThumbUpIcon className="h-5 w-5 text-sky-600" /></span><span className='text-sky-800'>1200</span> Likes</p>
                    <p><span className='text-red-800'>Recipe:  </span>{recipes_numbers} items</p>
                    <p><span className='text-red-800'>Expeerience:  </span> {experience_years } Years</p>
                    </div>

                    <div className="flex justify-between mt-3 ">
                    <button className="text-sm bg-sky-500 text-white ">View Datails</button>
                    {/* <div className="">
                    <button className='text-sm  bg-slate-600 text-white flex items-center gap-2'><span> Add to Favorite</span><BookmarkIcon className="h-4 w-4 text-white" /></button>
                    
                    </div> */}
                    </div>
                </div>
            </div>
   
       

        </div>
    );
};

export default Card;