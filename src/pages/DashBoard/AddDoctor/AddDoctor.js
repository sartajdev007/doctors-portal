import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgHostKey = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate()

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-sartajdev007.vercel.app/appointmentspecialty')
            const data = await res.json()
            return data
        }
    })

    const handleAddDoctor = data => {
        const img = data.img[0]
        const formData = new FormData()
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgData.data.url
                    }

                    // save doctor info
                    fetch('https://doctors-portal-server-sartajdev007.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} added to the dispensary`)
                            navigate('/dashboard/managedoctors')
                        })

                }
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='w-96 p-7'>
            <h1 className='text-4xl'>Add A Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register("specialty")}
                        className="select select-ghost w-full max-w-xs input-bordered">
                        <option disabled selected>Pick Specialty</option>

                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }


                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        placeholder="Photo"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: "Photo Is Required"
                        })} />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-5' type="submit" value='Add Doctor' />
                <Toaster></Toaster>
                {/* <div>
                    {signUpErr && <p>{signUpErr}</p>}
                </div> */}
            </form>
        </div>
    );
};

export default AddDoctor;