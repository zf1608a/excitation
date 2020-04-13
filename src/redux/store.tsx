import { applyMiddleware, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from '@/redux/reducer';
import thunk from 'redux-thunk';

import { IStore } from '@/redux/type/storeType';

/**
 * 创建store
 * 
 * @author David
 * @version 1.0
 */
const defaultState: IStore | any = {
    authorityReducer: {
        hasAuthority: false,
        id: 0,
        name: '匿名用户'
    },
    siderReducer: {
        hasCollapsed: false
    }
}

const store = createStore(
    reducer,
    defaultState,
    compose(applyMiddleware(thunk), devToolsEnhancer({}))
);

export default store;