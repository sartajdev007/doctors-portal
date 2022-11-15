
import bgImg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-6'>
            <div className="hero" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat' }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg max-w-sm shadow-2xl" alt='' />
                    <div className='mr-16 sm:w-full'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;