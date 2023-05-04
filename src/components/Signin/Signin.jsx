import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app)
const Signin = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // validation 
        setError('')
        setSuccess('')
        // if (!/(?=.[A-Z].[A-Z])/.test(password)) {
        //     setError('please added two Uppercase letter')
        //     return;
        // }
        // else if (!/(?=.[!@#$&])/.test(password)) {
        //     setError('use one special character')
        //     return;
        // }

       
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const userLogined = result.user;
                console.log(userLogined)
                if(!userLogined.emailVerified){

                }
                setSuccess('user login successful')
                setError('');
                sendverificationEmail(result.user)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                
            })

    }

    const sendverificationEmail = (user)=>{
        sendEmailVerification(user)
        .then(result=>{
            console.log(result)
            alert('please verify your email address')
        })
       }

     const handleResetPassword = event =>{
         const email = emailRef.current.value;
         if(!email){
            alert("please provide your email address to reset password")
         }
         sendPasswordResetEmail(auth, email)
         .then(()=>{
            alert('please check your email')
         })

         .catch(error =>{
            console.log(error);
            setError(error.message)
         })
     }  
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label className='mb-2' htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" ref={emailRef} name="email" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label className='mb-2' htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" required />
                </div>
                <button type="submit" className="my-3 btn btn-primary">Login</button>
                <p><small> New to this website  ? please <Link to='/register'>register</Link></small></p>
                <p className='text-danger'>{error}</p>
                <p className='text-primary'>{success}</p>
            </form>
            <p><small>Forget Password ? Please <button onClick={handleResetPassword} className='btn btn-link'> Reset password</button></small></p>
        </div>
    );
};

export default Signin;