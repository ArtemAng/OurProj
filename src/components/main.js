import React from 'react';
import MainTable from './mainTable';
import InfoDate from './infoDate';
import ToolsPanel from './ToolsPanel';
import { connect } from 'react-redux';
import TabsTable from './TabsTable';


const Main = ({ TableColumns }) => {
    return (
        <div className="Main">
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