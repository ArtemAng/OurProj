import React from 'react';
import MainTable from './mainTable';
import InfoDate from './infoDate';

const TableColumns = ["Вкл", "Водитель", "Дата вызова", "Номер рейса", "Номер заказа", "Дата поставки"];
const TableData = [
    { isOn: false, name: "qwerty", date: "asdasd", numR: 1111, numOrder: 111, dateBack: "asad" },
    { isOn: false, name: "qwerty1", date: "asdasd", numR: 1111, numOrder: 111, dateBack: "asad" },
    { isOn: false, name: "qwerty2", date: "asdasd", numR: 1111, numOrder: 111, dateBack: "asad" },
    { isOn: false, name: "qwerty3", date: "asdasd", numR: 1111, numOrder: 111, dateBack: "asad" }
];

const Main = () => {
    return (
        <div className="Main">
            <InfoDate />
            <MainTable columns={TableColumns} tableData={TableData} />
        </div>
    );
};

export default Main;