import { MenuAction } from '@/redux/actions/menuAction';
import { MENU_COLLAPSED } from '@/redux/constants/menuConstant';
import { IStore } from '@/redux/types/storeTypes';

/**
 * 菜单栏控制器
 * 
 * @author David
 * @version 1.0
 */
const defaultState: IStore = {
    hasAuthority: false,
    collapsed: false,
    user: '-',
    department: '-',
    userGroup: '-'
}

export default function menuReducer(state = defaultState, action: MenuAction) {
    switch(action.type) {
        case MENU_COLLAPSED:
            return {
                ...state,
                collapsed: !action.data.collapsed
            }
        default:
            return state
    }
}