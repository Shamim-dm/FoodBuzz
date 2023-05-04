import React from 'react';
import { BeakerIcon, BookmarkIcon, HandThumbUpIcon, StarIcon} from '@heroicons/react/24/solid'


const Recipes = ({recipe}) => {
    console.log(recipe)

    const { chef_name, recipes_name, photo_url, cooking, ingredients, rating } = recipe;

    return (
        <div>
            


            <div className="col glass rounded-md">
            <img className='rounded-md h-72 w-full' src={photo_url} />
                <div className="p-3">
                    <h2 className="card-title"><span className='text-red-800'></span> {recipes_name} </h2>


                <div>
                    <h5>Cooking Methood</h5>
                    <hr/>
                    <p>1. {cooking[0]}</p>
                    <p>2. {cooking[1]}</p>
                    <p>3. {cooking[2]}</p>
                    <p>4. {cooking[3]}</p>
                    
                </div>

                <div>
                    <h5>Ingredients</h5>
                    <hr />
                    <p>1. {ingredients[0]}</p>
                    <p>2. {ingredients[1]}</p>
                    <p>3. {ingredients[2]}</p>
                    <p>4. {ingredients[3]}</p>
                    <p>5. {ingredients[4]}</p>
                </div>

                   <div className='flex'>
                   <StarIcon className='h-3 w-3'></StarIcon>
                    <StarIcon className='h-3 w-3'></StarIcon>
                    <StarIcon className='h-3 w-3'></StarIcon>
                    <StarIcon className='h-3 w-3'></StarIcon>
                   </div>
                    <p>Rating: {rating}</p>
                    
                    <div className="flex justify-between mt-3 ">                 
                    <div className="">
                    <button className='text-sm  bg-slate-600 text-white flex items-center gap-2'><span> Add to Favorite</span><BookmarkIcon className="h-4 w-4 text-white" /></button>
                    
                    </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Recipes;