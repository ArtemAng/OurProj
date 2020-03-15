import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class InfoDate extends Component {
    state = {
        date: new Date()
    };

    changeDate = ( date ) => {
        console.log(date);
        this.setState({ date })
    };

    render() {
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
                        <DatePicker className="DatePicker" value={this.state.date} onChange={this.changeDate} />
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default InfoDate;


// const InfoDate = () => {
//     const date = new Date();

// };