import React from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    
    const fakeDataAll = useLoaderData()
    let { id } = useParams()
    const users =  fakeDataAll.find(jobs => jobs.id === id)
    const { name, photo_url, description, experience_years, likes, recipes_numbers,    } = users;
  


    

    
        
    

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
                <p className='text-slate-600'><span className='text-red-800 font-bold'> Total-Likes: </span>{ likes} Years</p>
                                    
            </div>
            </div>




        </div>
    );
};

export default Details;