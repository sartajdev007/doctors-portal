import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn, googleLogin } = useContext(AuthContext)
    const [logInErr, setLogInErr] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        console.log(data)
        setLogInErr('')
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user
                data.reset()
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => setLogInErr(err.message))
    }

    const handleGoogleLogIn = () => {
        googleLogin()
    }

    return (
        <div className='h-[800px] flex items-center justify-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Must Be 6 Characters' } })} />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value='Login' />
                    <div>
                        {logInErr && <p className='text-red-600'>{logInErr}</p>}
                    </div>
                </form>
                <p className='pt-5'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create An Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;