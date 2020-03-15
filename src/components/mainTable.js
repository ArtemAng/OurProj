import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainTable = ({ columns, tableData }) => {
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
                            {item.isOn}
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

export default MainTable;