import React from 'react';
import LeftBlockItem from "./leftBlockItem";
import { connect } from 'react-redux';

const LeftBlock = ({ leftTable }) => {
    return (
        <div className="LeftBlock">
            {leftTable.map((item, id) => <LeftBlockItem leftTableTitle={item} key={id} />)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        leftTable: state.currentLeftTable
    }
};

export default connect(mapStateToProps)(LeftBlock);