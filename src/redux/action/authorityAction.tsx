import * as constants from '@/redux/constant/authorityConstant'
import { IStore } from '@/redux/type/storeType'
/**
 * 菜单折叠action
 * 
 * @author David
 * @version 1.0
 */

export interface IAuthorityIn {
    data: IStore;
    type: constants.AUTHORITY_IN;
}

export interface IAuthorityOut {
    type: constants.AUTHORITY_OUT;
}

export type AuthorityAction = IAuthorityIn | IAuthorityOut;

export function authorityInFun(data: IStore): IAuthorityIn {
    return {
        data,
        type: constants.AUTHORITY_IN
    }
}

export function authorityOutFun(): IAuthorityOut {
    return {
        type: constants.AUTHORITY_OUT
    }
}