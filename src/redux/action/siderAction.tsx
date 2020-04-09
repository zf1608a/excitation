import * as constants from '@/redux/constant/siderConstant'
import { IStore } from '@/redux/type/storeType'

/**
 * 菜单折叠action
 * 
 * @author David
 * @version 1.0
 */

export interface ISiderCollapsed {
    data: IStore;
    type: constants.SIDER_COLLAPSED;
}

export type SiderAction = ISiderCollapsed;

export function siderCollapsedFun(data: IStore): ISiderCollapsed {
    return {
        data,
        type: constants.SIDER_COLLAPSED
    }
}