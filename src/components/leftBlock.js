import React from 'react';
import LeftBlockItem from "./leftBlockItem";

const LeftBlock = ({ leftTable }) => {
    return (
        <div className="LeftBlock">
            {leftTable.map((item, id) => <LeftBlockItem leftTableTitle={item} key={id}/>)}
        </div>
    );
};

export default LeftBlock;