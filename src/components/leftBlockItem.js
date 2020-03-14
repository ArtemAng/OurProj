import React from 'react';
import Icon from "../images/open.png"

const LeftBlockItem = ({leftTableTitle}) => {
    return (
        <div className="LeftBlockItem">
            <img className="ImgLeftItem" src={Icon} alt="icon" />
            <div className="Title">
                {leftTableTitle}
            </div>
        </div>

    );
};

export default LeftBlockItem;