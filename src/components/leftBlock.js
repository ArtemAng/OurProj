import React from 'react';
import LeftBlockItem from "./leftBlockItem";
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../action';
>>>>>>> 242fb76683f29fcd1ba4a4dc9cf3871db55b5757

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