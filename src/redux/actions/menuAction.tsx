import * as constants from '@/redux/constants/menuConstant'
import { IMenuCollapsedStroe } from '@/redux/types/storeTypes'
/**
 * 菜单折叠action
 * 
 * @author David
 * @version 1.0
 */

export interface IMenuCollapsed {
    data: IMenuCollapsedStroe;
    type: constants.MENU_COLLAPSED;
}

export type MenuAction = IMenuCollapsed;

export function menuCollapsedFun(data: IMenuCollapsedStroe): IMenuCollapsed {
    return {
        data,
        type: constants.MENU_COLLAPSED
    }
}