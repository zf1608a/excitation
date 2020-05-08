import HttpRequest from '@/communication/myFetch';

/**
 * 更改用户密码
 * 
 * @author David
 * @version 1.0
 */
const httpRequest = new HttpRequest();

export interface IResponse {
    code: number;
    message: string;
    total: number;
    rowList: [];
}

/**
 * 更改用户密码
 * @param url 地址
 * @param method 请求方式
 * @param params 参数
 */
export async function changePasswordFetch(url: string, params: any): Promise<IResponse> {
    return await httpRequest.methodFetch(url, 'PATCH', params);
}