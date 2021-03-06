import { createStore, combineReducers, applyMiddleware } from 'redux';
import { jsPlumb } from 'jsplumb';
import { initConfig, connectConfig } from './jsplumb.config';

/**
 * @file store
 * 负责数据 state 管理
 * 保留全局属性 jsp instance & containment
 */

const initEntitys = [{
    id: 'e1',
    type: 'ENTITY-MESSAGE',
    title: '消息单元',
    top: 200,
    left: 120,
    options: [{id: 'p1', text: '今天星期几'}, {id: 'p2', text: '明天又是星期几'}]
}, {
    id: 'e2',
    type: 'ENTITY-MESSAGE',
    title: '消息单元',
    top: 200,
    left: 600,
    options: [{id: 'p3', text: '哦哦哦，假期呢'}, {id: 'p4', text: '说好的下雨呢'}]
}, {
    id: 'e3',
    type: 'ENTITY-ASK',
    title: '提问单元',
    top: 450,
    left: 300,
    options: [{id: 'p5', text: '我就试试'}]
}, {
    id: 'e4',
    type: 'ENTITY-ASK',
    title: '提问单元',
    top: 450,
    left: 700,
    options: [{id: 'p6', text: 'ccccccc'}]
}];

const initConnections = [{from: 'p1', to: 'e2'}, {from: 'p3', to: 'e3'}, {from: 'p5', to: 'e4'}];

const initUI = {
    openEditor: false
};

/**
 * 画布实体控制
 */
function entitysReducer(state = initEntitys, action) {
    let newState;

    switch (action.type) {
        case 'ADD_ENTITY':
            return state.concat([action.payload]);
        case 'DEL_ENTITY':
            const id = action.payload;
            newState = state.filter(data => data.id != id);
            return newState;
        default:
            return state;
    }
}

/**
 * 实体关联控制
 */
function connectionsReducer(state = initConnections, action) {
    let newState;
    let id;

    switch (action.type) {
        case 'ADD_CONNECTION':
            newState = state.concat([action.payload]);
            return newState;
        case 'DEL_CONNECTION':
            const item = action.payload;
            newState = state.filter(data => data.from != item.from && data.to != item.to);
            console.log(newState)
            return newState;
        default:
            return state;
    }
}

/**
 * ui 交互相关
 */
function uiReducer(state = initUI, action) {
    let newState;

    switch (action.type) {
        case 'OPEN_EDITOR_UI':
            newState = {...state, openEditor: true};
            return newState;
        case 'CLOSE_EDITOR_UI':
            newState = {...state, openEditor: false};
            return newState;
        default:
            return state;
    }
}

const reducers = combineReducers({
    entitys: entitysReducer,
    connections: connectionsReducer,
    ui: uiReducer
});

// @TODO: 优化以下事件绑定
initConfig.ConnectionOverlays[0][1]['events'].click = function (overlay, originalEvent) {
    store.onOverlayClick(overlay, originalEvent);
};

initConfig.ConnectionOverlays[0][1]['events'].mouseout = function (overlay, originalEvent) {
    store.onOverlayOut(overlay, originalEvent);
};

connectConfig.events.mouseover = function (conn, originalEvent) {
    store.onConnectionOver(conn, originalEvent);
};

connectConfig.events.mouseout = function (conn, originalEvent) {
    store.onConnectionOut(conn, originalEvent);
};

// trick 携带两个全局属性
const store: any = createStore(reducers);
store.jsp = jsPlumb.getInstance(<any>initConfig);;
store.containment = '_canvas';

export default store;