import React, {useState} from 'react';
import Calendar from "react-calendar";

const CustomCalendar: React.VFC = () => {
    const [date, setDate] = useState<Date>(new Date());

    const onChangeDate = (date: Date) => {
        setDate(date)
    }

    return (<>
            <Calendar value={date}
                      onChange={onChangeDate}
                      locale={"Us"}
                      prev2Label={null}
                      next2Label={null}
            />
            {/*{alert(date.getDate())}*/}
        </>
    );
};

export default CustomCalendar;