import Icon0 from '../images/dashboard.png';
import Icon1 from '../images/catalog.png';
import Icon2 from '../images/purchase.png';
import Icon3 from '../images/stock.png';
import Icon4 from '../images/sale.png';
import Icon5 from '../images/retail.png';
import Icon6 from '../images/finance.png';
import Icon7 from '../images/priceList.png';
import Icon8 from '../images/machinery.png';
import Icon9 from '../images/transport.png';
import Icon10 from '../images/customs.png';
import Icon11 from '../images/manufacturing.png';
import Icon12 from '../images/wms.png';
import Icon13 from '../images/chat.png';
import Icon14 from '../images/lock.png';
import Icon15 from '../images/search.png';
import Icon16 from '../images/bi.png';

const initialState = {
    MenuList: [
        {
            title: "Рабочий стол", Icon: Icon0, leftTable: ["Продажа", "Выписка накладных",
                "Обработка внутренних заказов", "Розничная торговля", "Кассовые операции",
                "POS", "Печать ценников ТСД", "Обработка Z-отчетов", "Переоценка", "Подарочные сертификаты",
                "Закупка", "Заказы по потребностям", "Графики заказов", "Заказы по графику", "Приемка по заказам",
                "Обновление розничных цен", "Цены", "Управление ценами", "Текущие цены", "Розничные цены",
                "Задолженности", "Управление задолженностями", "Разнесение документов", "Неоплаченные документы",
                "Маркетинг", "Договоры маркетинга", "Акты на оплату", "Группы складов", "Шаблоны", "Производство",
                "Перемещение на цех производства", "Реест перемещений в цех производства", "WMS", "Перемещение по заказам"
            ]
        },
        {
            title: "Справочники", Icon: Icon1, leftTable: ["Сотрудники", "Организации", "Товар", "Товары", "Товарные группы",
                "Единицы измерения", "Типы дополнительных групп", "Дополнительные группы", "Настройка атрибутов", "Атрибуты товаров",
                "Списки SKU", "Бренды", "Региональные параметры", "Языки", "Перевод", "Словари", "Страны", "Выходные дни",
                "Шаблоны", "Шаблоны Exel", "Шаблоны Word", "Валюты и курсы", "Валюты", "Курсы валют", "Нумераторы", "Тип подакции", "Тип промо"
            ]
        },
        {
            title: "Закупки", Icon: Icon2, leftTable: ["Закупки", "Заказы", "Параметры автозаказа", "Накладные", "Акты расхождений",
                "Возвраты", "Заказы", "Накладные", "Акты расхождений", "Справочники", "Операции", "Отчеты", "Регистр поступлений", "Исполнение заявок",
                "Отчет по поступлениям", "Поступления по неделям"]
        },
        { title: "Склад", Icon: Icon3, leftTable: ["Поступления", "Поставки", "Затраты", "", "", ""] },
        { title: "Продажи", Icon: Icon4, leftTable: ["frfwff"] },
        { title: "Розничная торговля", Icon: Icon5, leftTable: ["fergergef"] },
        { title: "Финансы", Icon: Icon6, leftTable: ["fdbdbrbdtgef"] },
        { title: "Цены", Icon: Icon7, leftTable: ["asdsdad"] },
        { title: "Оборудование", Icon: Icon8, leftTable: ["asadasadd"] },
        { title: "Транспорт", Icon: Icon9, leftTable: ["asdsadadd"] },
        { title: "ВЭД", Icon: Icon10, leftTable: ["sdwddas"] },
        { title: "Производство", Icon: Icon11, leftTable: ["sdadaasdsd"] },
        { title: "WMS", Icon: Icon12, leftTable: ["afads"] },
        { title: "Чат", Icon: Icon13, leftTable: ["sdasdasad"] },
        { title: "Учетная запись", Icon: Icon14, leftTable: ["frfwff"] },
        { title: "Поиск", Icon: Icon15, leftTable: ["frfwff"] },
        { title: "BI", Icon: Icon16, leftTable: ["frfwff"] }
    ],
    isClicked: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLICK":
            return {...state, isClicked: [{ title: "Продажи", Icon: Icon4, leftTable: ["frfwff"] }]};    
        default:
           return state;
    }
}
// export default reducer;