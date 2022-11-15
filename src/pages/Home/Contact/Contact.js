import React from 'react';
import appointment from '../../../assets/images/appointment.png'


const Contact = () => {
    return (
        <div className='flex flex-col items-center rounded-lg' style={{ background: `url(${appointment})` }}>
            <div className='text-white text-center'>
                <h5 className='text-primary font-bold text-xl'>Contact Us</h5>
                <h3 className='text-3xl'>Stay connected with us</h3>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-96">
                <form>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="Name" />
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Email address" />
                    </div>
                    <div className="form-group mb-6">
                        <textarea
                            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                            id="exampleFormControlTextarea13"
                            rows="4"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn bg-gradient-to-r from-primary to-secondary text-white border-0">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;