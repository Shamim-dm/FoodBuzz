import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from './Recipes';







const Details = () => {
    // const details = useLoaderData();
    // const {id} = useParams()

    // const detail = details.find(d => d.id === id)
    // const {name, description, recipes_numbers, experience_years, likes,recipes, photo_url} = detail;
    // console.log(details)



          
    const fakeDataAll = useLoaderData()
    let { id } = useParams()
    const users =  fakeDataAll.find(jobs => jobs.id === id)
    const { name, photo_url, description, experience_years, likes, recipes_numbers, recipes    } = users;




    return (
        <div className=''>
           {/* <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='' src={photo_url} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title"><span className='text-red-400 font-bold'> Chef-Name: </span>{name}</h2>
                <p className='text-slate-100'><span className='text-red-400 font-bold'> Short-Description: </span>{description}</p>
                <p className='text-purple-200'><span className='text-red-400 font-bold'> Total Recipes: </span>{recipes_numbers} items</p>
                <p className='text-purple-200'><span className='text-red-400 font-bold'> Experience: </span>{ experience_years} Years</p>
                <p className=' flex gap-2' ><span className='text-red-400 font-bold'> Total-Likes: </span> <span className='flex gap-1 text-purple-200'>{ likes} </span> </p>
                                    
            </div>
            </div>


                <h2 className='text-white  text-4xl text-center font-bold p-3'>Some Recipes of <span className='text-sky-400'> {name}</span> </h2>
           
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-between mt-5'>
            {
                recipes.map(recipe => <Recipes recipe={recipe} key={recipe.id} ></Recipes>)
            }
            </div> */}



        <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 mx-auto">
            <figure><img className='' src={photo_url} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title"><span className='text-red-800 font-bold'> Chef-Name: </span>{name}</h2>
                <p className='text-slate-600'><span className='text-red-800 font-bold'> Short-Description: </span>{description}</p>
                <p className='text-slate-600'><span className='text-red-800 font-bold'> Total Recipes: </span>{recipes_numbers} items</p>
                <p className='text-slate-600'><span className='text-red-800 font-bold'> Experience: </span>{ experience_years} Years</p>
                <p className='text-slate-600 flex gap-2'><span className='text-red-800 font-bold'> Total-Likes: </span> <span className='flex gap-1'>{ likes}</span> </p>
                                    
            </div>
            </div>


                <h2 className='text-red-700 text-4xl text-center font-bold p-3'>Some Recipes of <span className='text-sky-600'> {name}</span> </h2>
           
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-between mt-5 w-11/12 mx-auto '>
            {
                recipes.map(recipe => <Recipes recipe={recipe} key={recipe.id} ></Recipes>)
            }
            </div>








        </div>
    );
};

export default Details;