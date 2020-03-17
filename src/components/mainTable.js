import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { connect } from 'react-redux';
import * as actions from '../action';
import {bindActionCreators} from 'redux';

const MainTable = ({ columns, tableData, IT_IS_A_TRUE_YES_OKEY_DOKEY_YO }) => {
=======

const MainTable = ({ columns, tableData }) => {
>>>>>>> 242fb76683f29fcd1ba4a4dc9cf3871db55b5757
    return (
        <table className="table-striped">
            <thead>
                <tr>
                    {columns.map((item, id) =>
                        <th key={id}>
                            {item}
                        </th>)}
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, id) =>
                    <tr key={id}>
                        <td>
<<<<<<< HEAD
                            <input className={'check'}
                                type="checkbox" onChange={()=>IT_IS_A_TRUE_YES_OKEY_DOKEY_YO(id)}
                                checked={item.isOn}
                                ></input>

=======
                            {item.isOn}
>>>>>>> 242fb76683f29fcd1ba4a4dc9cf3871db55b5757
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.date}
                        </td>
                        <td>
                            {item.numR}
                        </td>
                        <td>
                            {item.numOrder}
                        </td>
                        <td>
                            {item.dateBack}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
<<<<<<< HEAD
const mapStateToProps = (state) => {
    return {
        tableData: state.TableData,
    }
}
const mapDispatchToProps = (dispatch) => {
    const {IT_IS_A_TRUE_YES_OKEY_DOKEY_YO} = bindActionCreators(actions, dispatch);
    return {
        IT_IS_A_TRUE_YES_OKEY_DOKEY_YO
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainTable);
=======

export default MainTable;
>>>>>>> 242fb76683f29fcd1ba4a4dc9cf3871db55b5757
