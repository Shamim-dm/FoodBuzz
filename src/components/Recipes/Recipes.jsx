import React from 'react';
import { BeakerIcon, BookmarkIcon, HandThumbUpIcon, StarIcon} from '@heroicons/react/24/solid'
import toast, { Toaster } from 'react-hot-toast';


const Recipes = ({recipe}) => {
    console.log(recipe)

    const { chef_name, recipes_name, photo_url, cooking, ingredients, rating } = recipe;

    const favouriteHandle =()=>{
        console.log('tur nanir heda')
        const notify = () => toast('Here is your toast.');
    }

    return (
        <div>
            


            <div className="col glass rounded-md">
            <img className='rounded-md h-72 w-full' src={photo_url} />
                <div className="p-3">
                    <h2 className="card-title"><span className='text-sky-800 font-bold'> {recipes_name}</span> </h2>


                <div className='mt-3  text-slate-600'>
                    <h5 className='text-red-800 font-bold'>Cooking Methood</h5>
                    <hr/>
                    <p>1. {cooking[0]}</p>
                    <p>2. {cooking[1]}</p>
                    <p>3. {cooking[2]}</p>
                    <p>4. {cooking[3]}</p>
                    
                </div>

                <div className='mt-3  text-slate-600'>
                    <h5 className='text-red-800 font-bold'>Ingredients</h5>
                    <hr />
                    <p>1. {ingredients[0]}</p>
                    <p>2. {ingredients[1]}</p>
                    <p>3. {ingredients[2]}</p>
                    <p>4. {ingredients[3]}</p>
                    <p>5. {ingredients[4]}</p>
                </div>

                   <div className='flex mt-4'>
                   <StarIcon className='h-3 w-3'></StarIcon>
                    <StarIcon className='h-3 w-3'></StarIcon>
                    <StarIcon className='h-3 w-3'></StarIcon>
                    <StarIcon className='h-3 w-3'></StarIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>

                   </div>
                    <p className='text-sky-500 font-bold'>Rating: {rating}</p>

                    <div className="flex justify-between mt-3 ">                 
                    <div className="">
                    <button onClick={favouriteHandle} className='text-sm  bg-slate-600 text-white flex items-center gap-2'><span> Add to Favorite</span><BookmarkIcon className="h-4 w-4 text-white" /></button>
                    
                    </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Recipes;