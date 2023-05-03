import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'

import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';



const auth =  getAuth(app)
const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        setSuccess('')
        setError('')
        const email = event.target.email.value
        const password = event.target.password.value
        const name = event.target.name.value
        console.log(email, password , name)

        // validation 
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please added at least one uppercase')
            return
        }

        // create user in firebase 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const userLogin = result.user;
                console.log(userLogin)
                setError('')
                event.target.reset();
                updateUserData(result.user, name)
                setSuccess('user has been created successfully')
            })

            .catch(error => {
                console.log(error.message)
                setError(error.message)

            })
    }



    const handleEmaildChange = (event) => {
        console.log(event.target.value)
        // setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        console.log(event.target.value)
    }
  
    const updateUserData = (name, user)=>{
        updateProfile(user, {
            displayName: name
        })
        .then(()=>{
            console.log('user name updated')
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return (
        <div>
            <h3>Please Register</h3>

            <form onSubmit={handleSubmit} >
                <input className='my-2 ps-2'  type="text" name="name" id="name" placeholder='type your name' required /><br></br>

                <input className='my-2 ps-2' onChange={handleEmaildChange} type="email" name="email" id="email" placeholder='type your email' required /><br></br>
                
                <input className='ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='type your password' required /><br></br>

                <input className='btn btn-primary my-2' type="submit" value="Register" />
            </form>
            <p><small> Already have you an account ? please <Link to='/login'>login</Link></small></p>
            <p className='text-center text-danger'>{error}</p>
            <p className='text-center text-primary'>{success}</p>
        </div>
    );
};

export default Register;