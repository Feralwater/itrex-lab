import React, {useState} from 'react';
import Calendar from "react-calendar";
import './DatePicker.css'

const DatePicker: React.VFC = () => {
    const [date, setDate] = useState<Date>(new Date());

    return (<>
            <Calendar value={date}
                      onChange={setDate}
                      locale={"Us"}
                      prev2Label={null}
                      next2Label={null}
            />
            {/*{alert(date.getDate())}*/}
        </>
    );
};

export default DatePicker;