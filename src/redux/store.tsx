import { applyMiddleware, compose, createStore } from 'redux';
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from '@/redux/reducers';
import thunk from 'redux-thunk';

/**
 * 创建store
 * 
 * @author David
 * @version 1.0
 */
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), devToolsEnhancer({}))
);

export default store;