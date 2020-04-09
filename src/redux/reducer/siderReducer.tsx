import { SiderAction } from '@/redux/action/siderAction';
import { IStore } from '@/redux/type/storeType';
import * as contents from '@/redux/constant/siderConstant';

/**
 * 菜单栏控制器
 * 
 * @author David
 * @version 1.0
 */
export const initState: IStore = {
    authorityReducer: {
        hasAuthority: true
    },
    siderReducer: {
        hasCollapsed: false
    }
}

export default function siderReducer(state: IStore, action: SiderAction) {
    switch(action.type) {
        case contents.SIDER_COLLAPSED:
            return {
                ...state,
                hasCollapsed: !action.data.siderReducer.hasCollapsed
            }
        default:
            return state === undefined ? initState : state;
    }
}