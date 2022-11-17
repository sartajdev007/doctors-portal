import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatName, slots } = treatment
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)

    const handleBooking = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const slot = form.slot.value

        const booking = {
            selectedDate: date,
            treatment: treatName,
            patient: name,
            slot,
            email, phone,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking accepted')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })

        console.log(booking)
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10"'>
                        <input type="text" value={date} className="input w-full input-bordered" readOnly />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered" defaultValue={user?.displayName} readOnly />
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered" defaultValue={user?.email} readOnly />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered" />
                        <br />
                        <input type="submit" value="Submit" className='w-full max-w-xm btn btn-accent' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;