import React from 'react';

const InfoDate = () => {
    const date = new Date();
    return (
        <div className="InfoDate" >
            <span>date:</span>
            {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}
        </div>
    );
};

export default InfoDate;