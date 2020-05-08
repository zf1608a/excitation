import HttpRequest from '@/communication/myFetch';

/**
 * 菜单
 * 
 * @author David
 * @version 1.0
 */
const httpRequest = new HttpRequest();

interface IMenuExt {
    id: number;
    name: string;
    icon: string;
    link: string;
}

export interface IMenu {
    id: number;
    name: string;
    icon: string;
    link: string;
    children: IMenuExt[];
}

export interface IResponse {
    code: number;
    message: string;
    total: number;
    rowList: IMenu[];
}

/**
 * 菜单查询
 * @param url 地址
 * @param method 请求方式
 * @param params 参数
 */
export async function menuFetch(url: string, params: any): Promise<IResponse> {
    return await httpRequest.getFetch(url, params);
}