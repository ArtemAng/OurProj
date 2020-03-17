import React from 'react';
import filt from '../images/toolsPanelIcons/filt.png';
import excelbw from '../images/toolsPanelIcons/excelbw.png';
import groupchange from '../images/toolsPanelIcons/groupchange.png';
import pivot from '../images/toolsPanelIcons/pivot.png';
import quantity from '../images/toolsPanelIcons/quantity.png';
import reportbw from '../images/toolsPanelIcons/reportbw.png';
import sum from '../images/toolsPanelIcons/sum.png';
import update from '../images/toolsPanelIcons/update.png';
import userPreferences from '../images/toolsPanelIcons/userPreferences.png';

import { Tooltip } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../action';

const ToolsPanel = ({ ONCHANGEALL, quantityRows }) => {
    return (
        <div className="ToolsPanel">
            <Tooltip title={"Сортировка"}>
                <img className="ToolsPanelItem" alt={'filt'} src={filt} />
            </Tooltip>
            <Tooltip title={"Экспорт в эксель "}>
                <img className="ToolsPanelItem" alt={'excelbw'} src={excelbw} />
            </Tooltip>
            <Tooltip title={"Группировка "}>
                <img className="ToolsPanelItem" alt={'groupchange'} onClick={ONCHANGEALL} src={groupchange} />
            </Tooltip>
            <Tooltip title={"Сводная таблица"}>
                <img className="ToolsPanelItem" alt={'pivot'} src={pivot} />
            </Tooltip>
            <Tooltip title={"Колличество записей: " + quantityRows}>
                <img className="ToolsPanelItem" alt={'quantity'} src={quantity} />
            </Tooltip>
            <Tooltip title={"Печать"}>
                <img className="ToolsPanelItem" alt={'reportbw'} src={reportbw} />
            </Tooltip>
            <Tooltip title={"Посчитать суму ячейки "}>
                <img className="ToolsPanelItem" alt={'sum'} src={sum} />
            </Tooltip>
            <Tooltip title={"Обновить "}>
                <img className="ToolsPanelItem" alt={'update'} src={update} />
            </Tooltip>
            <Tooltip title={"Пользовательские настройки "}>
                <img className="ToolsPanelItem" alt={'userPreferences'} src={userPreferences} />
            </Tooltip>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        //По сути нах и не нужен
        //А нет, нужен
        quantityRows: state.TableData.length
    }
}

const mapDispatchToProps = (dispatch) => {
    const { ONCHANGEALL } = bindActionCreators(actions, dispatch)
    return {
        ONCHANGEALL
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToolsPanel);