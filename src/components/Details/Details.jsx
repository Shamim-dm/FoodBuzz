import React from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import { BeakerIcon, BookmarkIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'

const Details = () => {
    
    const fakeDataAll = useLoaderData()
    let { id } = useParams()
    const users =  fakeDataAll.find(jobs => jobs.id === id)
    const { name, photo_url, description, experience_years, likes, recipes_numbers, recipes    } = users;
  


    

    
        
    

   console.log(users)
//    console.log(fakeDataAll)
//     console.log( id)

    return (
        <div>
            

            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='' src={photo_url} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title"><span className='text-red-800 font-bold'> Chef-Name: </span>{name}</h2>
                <p className='text-slate-600'><span className='text-red-800 font-bold'> Short-Description: </span>{description}</p>
                <p className='text-slate-600'><span className='text-red-800 font-bold'> Total Recipes: </span>{recipes_numbers} items</p>
                <p className='text-slate-600'><span className='text-red-800 font-bold'> Experience: </span>{ experience_years} Years</p>
                <p className='text-slate-600 flex gap-2'><span className='text-red-800 font-bold'> Total-Likes: </span> <span className='flex gap-1'>{ likes} <HandThumbUpIcon className="h-5 w-5 text-sky-600" /></span> </p>
                                    
            </div>
            </div>

           
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-between mt-5'>
            {
                recipes.map(recipe => <Recipes recipe={recipe} key={recipe.id} ></Recipes>)
            }
            </div>

          


        </div>
    );
};

export default Details;