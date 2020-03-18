import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const InfoDate = () => {
    const [date, setDate] = useState(new Date());

    return (
        <fieldset>
            {/* <legend className="Legend">
                Шапка
            </legend> */}
            <div className="InfoDate" >
                <div className="TextDate">
                    Дата
                </div>
                <div className="Date">
                    <DatePicker className="DatePicker" value={date} onChange={(date) => setDate(date)} />
                </div>
            </div>
        </fieldset>
    );
}
export default InfoDate;