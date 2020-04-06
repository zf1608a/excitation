/**
 * 定义store数据类型
 * 
 * @author David
 * @version 1.0
 */
export interface IStore {
    hasAuthority: boolean;
    collapsed: boolean;
    user: String;
    department: String;
    userGroup: String;
}

export interface IMenuStore {
    menuReducer: IMenuCollapsedStroe;
}

export interface IMenuCollapsedStroe {
    collapsed: boolean;
}