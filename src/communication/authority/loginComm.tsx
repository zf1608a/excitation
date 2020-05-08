import HttpRequest from '@/communication/myFetch';

/**
 * 用户登录 
 * 
 * @author David
 * @version 1.0
 */
const httpRequest = new HttpRequest();

export interface IResponse {
    code: number;
    message: string;
    total: number;
    rowList: ILogin[];
}

export interface ILogin {
    id: number;
    name: string;
    mode: string;
    misc: string;
    MarketingLevelDto: object;
    UserGroupDto: object;
    DepartmentDto: object;
}

/**
 * 查询用户option
 * @param url 地址
 * @param method 请求方式
 * @param params 参数
 */
export async function loginFetch(url: string, params: any): Promise<IResponse> {
    return await httpRequest.getFetch(url, params);
}