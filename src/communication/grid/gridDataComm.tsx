import HttpRequest from '@/communication/myFetch';

/**
 * 列表数据查询通讯
 * 
 * @author David
 * @version 1.0
 */
const httpRequest = new HttpRequest();

export interface IResponse {
    code: number;
    message: string;
    total: number;
    rowList: IData[];
}

export interface IData {
    id: number;
    code: string;
    magicCode: string;
    content: string;
    description: string;
    misc: string;
}

/**
 * 列表查询option
 * @param url 地址
 * @param method 请求方式
 * @param params 参数
 */
export async function gridDataFetch(url: string, params: any): Promise<IResponse> {
    return await httpRequest.getFetch(url, params);
}