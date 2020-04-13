import { AuthorityAction } from '@/redux/action/authorityAction';
import { IStore } from '@/redux/type/storeType';
import * as contents from '@/redux/constant/authorityConstant';

/**
 * 权限 reducer
 * 
 * @2018-11-15
 * @David
 */
export const initState: IStore = {
    authorityReducer: {
        hasAuthority: true,
        id: 0,
        name: '匿名用户'
    },
    siderReducer: {
        hasCollapsed: false
    }
}

export default function authorityReducer(state: IStore, action: AuthorityAction) {
    switch(action.type) {
        case contents.AUTHORITY_IN:
            return {
                ...state,
                hasAuthority: true,
                id: action.data.authorityReducer.id,
                name: action.data.authorityReducer.name
            }
        case contents.AUTHORITY_OUT:
            return {
                ...state,
                hasAuthority: false
            }
        default:
            return state === undefined ? initState : state;
    }
}