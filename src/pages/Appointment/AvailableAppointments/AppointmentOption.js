import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Not Available'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p></p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;