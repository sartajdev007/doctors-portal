import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51M6nq5LMkwOi8DnkER8FVSrRu1tx9K1LzbC3MblCGSBZc0G6fTc5DWkiQiAY4mgV2KjY0khlOPU5WlPNidC3jx2r00y6yesqoo');

const Payment = () => {
    const booking = useLoaderData()

    return (
        <div>
            <h3 className='text-3xl'>Payment for {booking.treatment}</h3>
            <p className='text-xl'>Please pay ${booking.price} for your appointment on {booking.selectedDate} at {booking.slot}</p>
            <div className="w-96 mt-10 border-2 p-3">
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;