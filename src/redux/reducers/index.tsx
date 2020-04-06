import { combineReducers } from 'redux';
import menuReducer from '@/redux/reducers/menuReducer';

/**
 * 合并所有的reducer
 * 
 * @author David
 * @version 1.0
 */
const reducer = combineReducers({
    // 对象形式存储 reducer
    menuReducer
});
  
export default reducer;