import HttpRequest from '@/communication/myFetch';

const httpRequest = new HttpRequest();

export interface IResponse {
    code: number;
    message: string;
    total: number;
    rowList: IOption[];
}

export interface IOption {
    key: number;
    value: string;
    text: string;
}

/**
 * 查询用户option
 * @param url 地址
 * @param method 请求方式
 * @param params 参数
 */
export async function userOptionFetch(url: string, params: any): Promise<IResponse> {
    return await httpRequest.getFetch(url, params);
}