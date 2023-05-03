import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    const [user, setUser]= useState('')
    for (const id of  data){
        setUser(id)
    }

   

    console.log(user)

    return (
        <div>
            

            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={user.name} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
                </div>
            </div>
            </div>




        </div>
    );
};

export default Details;