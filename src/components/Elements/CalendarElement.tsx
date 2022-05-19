import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

interface Props {}

const CalendarElement : React.ComponentType<Props> = (
    {}) => {
    const [value, onChange] = useState(new Date());

    const dates = [
        new Date(2022, 4, 28),
        new Date(2022, 4, 20),
        new Date(2022, 4, 25),
        new Date(2022, 4, 23),
    ];

    const handleBooking = (event : any) => {
        console.log(event);
    }

    return (
        <Calendar
            onChange={onChange}
            defaultValue={dates}
            defaultActiveStartDate={new Date()}
            showNeighboringMonth
            selectRange={false}
            onClickDay={handleBooking}
            minDate={new Date()}
        />
    );
}

export default CalendarElement;