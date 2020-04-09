import { combineReducers } from 'redux';
import siderReducer from '@/redux/reducer/siderReducer';
import authorityReducer from '@/redux/reducer/authorityReducer';

/**
 * 合并所有的reducer
 * 
 * @author David
 * @version 1.0
 */
const reducer = combineReducers({
    // 对象形式存储 reducer
    authorityReducer,
    siderReducer
});
  
export default reducer;