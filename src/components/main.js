import React from 'react';
import MainTable from './mainTable';
import InfoDate from './infoDate';
<<<<<<< HEAD
import ToolsPanel from './ToolsPanel';
import { connect } from 'react-redux';
import TabsTable from './TabsTable';
=======

const TableColumns = ["Вкл", "Водитель", "Дата вызова", "Номер рейса", "Номер заказа", "Дата поставки"];
const TableData = [
    { isOn: false, name: "qwerty", date: "asdasd", numR: 1111, numOrder: 111, dateBack: "asad" },
    { isOn: false, name: "qwerty1", date: "asdasd", numR: 1111, numOrder: 111, dateBack: "asad" },
    { isOn: false, name: "qwerty2", date: "asdasd", numR: 1111, numOrder: 111, dateBack: "asad" },
    { isOn: false, name: "qwerty3", date: "asdasd", numR: 1111, numOrder: 111, dateBack: "asad" }
];
>>>>>>> 242fb76683f29fcd1ba4a4dc9cf3871db55b5757


const Main = ({ TableColumns }) => {
    return (
        <div className="Main">
<<<<<<< HEAD
            <div className={'topMain'}>
                <div className="text_theme">Шапка</div>
                <div className="box_theme">
                    <InfoDate />
                </div>

                <MainTable columns={TableColumns} />
                <ToolsPanel />
            </div>
            <div className={'botMain'}>
                <TabsTable
                 children={
                    <MainTable columns={TableColumns} />
                }
                 children2={
                     <MainTable columns={["ZZZ", 'xxx',"yyy", 'zzz',"xxx", 'yyy',"zzz", 'xxx']} />
                 }
                 children3={
                     <MainTable columns={["aaa", 'bbb',"aaa", 'bbb',"aaa", 'bbb',"aaa", 'bbb']} />
                 }
                >
                </TabsTable>
                <ToolsPanel />
            </div>
=======
            <InfoDate />
            <MainTable columns={TableColumns} tableData={TableData} />
>>>>>>> 242fb76683f29fcd1ba4a4dc9cf3871db55b5757
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        TableColumns: state.TableColumns,
        TableData: state.TableData
    }
}
export default connect(mapStateToProps)(Main);