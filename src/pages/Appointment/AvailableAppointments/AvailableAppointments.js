import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [options, setOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appointmentOpts.json')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])


    return (
        <section className='my-28'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid mt-5 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    options.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment && <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;