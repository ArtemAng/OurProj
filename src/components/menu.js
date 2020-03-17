import React from 'react';
import MenuItem from './menuItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../action';


const Menu = ({ MenuList, onClick }) => {
    return (
        <div className="Menu" >
            {MenuList.map((item, id) => <MenuItem title={item.title} Icon={item.Icon} click={() => onClick(id)} key={id} />)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        MenuList: state.MenuList,
        isClicked: state.isClicked
    }
};

const mapDispatchToProps = (dispatch) => {
    const { CLICK } = bindActionCreators(actions, dispatch)
    return {
        onClick: (id) => { CLICK(id) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);