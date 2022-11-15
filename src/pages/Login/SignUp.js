import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signInUser, updateUser } = useContext(AuthContext)
    const [signUpErr, setSignUpErr] = useState('')

    const handleSignUp = data => {
        console.log(data)
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('Registration successful')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.error(err))

            })
            .catch(err => {
                console.error(err)
                setSignUpErr(err.message)
            })
    }


    return (
        <div className='h-[800px] flex items-center justify-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name")} />
                    </div>
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
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Must Be 6 Characters' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong' }
                            })} />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-5' type="submit" value='SignUp' />
                    <Toaster></Toaster>
                    <div>
                        {signUpErr && <p>{signUpErr}</p>}
                    </div>

                </form>
                <p className='pt-5'>Already a member? <Link className='text-secondary' to='/login'>Log In</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;