/**
 * 定义store数据类型
 * 
 * @author David
 * @version 1.0
 */
export interface IStore {
    authorityReducer: IAuthorityStore;
    siderReducer: ISiderStore;
}

export interface IAuthorityStore {
    hasAuthority: boolean;
}

export interface ISiderStore {
    hasCollapsed: boolean;
}