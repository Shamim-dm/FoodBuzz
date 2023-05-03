import React from 'react';
import { BeakerIcon, BookmarkIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Card = ({data}) => {
    const {id, name, photo_url, recipes_numbers, experience_years, likes, recipes   } = data;
    
    
    return (
        <div>

{
    recipes.map(g => console.log(g))
}

            <div className="col glass rounded-md">
            <img className='rounded-md h-72 w-full' src={photo_url} />
                <div className="p-3">
                    <h2 className="card-title"><span className='text-red-800'>Chef</span>: {name}</h2>

                    <div className='grid grid-cols-1 md:grid-cols-3 justify-between mt-3'>
                  
                    <p className='flex items-center gap-1'> <span>  <HandThumbUpIcon className="h-5 w-5 text-sky-600" /></span><span className='text-sky-800'>{likes}</span> Likes</p>
                    <p><span className='text-red-800'>Recipe:  </span>{recipes_numbers} items</p>
                    <p><span className='text-red-800'>Expeerience:  </span> {experience_years } Years</p>
                    </div>

                    <div className="flex justify-between mt-3 ">
                    <Link to={`${id}`}><button className="text-sm bg-sky-500 text-white ">View Datails</button></Link>
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