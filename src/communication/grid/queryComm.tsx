import HttpRequest from '@/communication/myFetch';

/**
 * 列表查询通讯
 * 
 * @author David
 * @version 1.0
 */
const httpRequest = new HttpRequest();

export interface IResponse {
    code: number;
    message: string;
    total: number;
    rowList: IOption[];
}

export interface IOption {
    field: string;
    title: string;
    width: string;
}

/**
 * 列表查询option
 * @param url 地址
 * @param method 请求方式
 * @param params 参数
 */
export async function gridQueryFetch(url: string, params: any): Promise<IResponse> {
    return await httpRequest.getFetch(url, params);
}