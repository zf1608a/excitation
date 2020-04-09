import "whatwg-fetch";

/**
 * @description: 枚举出请求数据格式类型
 * @param {type} 枚举类型
 * @return: 
 */
enum ContentType {
    json = 'application/json; charset=UTF-8',
    form = 'application/x-www-form-urlencoded; charset=UTF-8'
}

/**
 * @description: 枚举request请求的method方法
 * @param {type} 枚举类型
 * @return: 
 */
enum HttpMethod {
    get = 'GET',
    post = 'POST',
    put = 'PUT',
    patch = 'PATCH',
    delete = 'DELETE'
}

/**
 * @description: 声明请求头header的类型
 * @param {type} 
 * @return: 
 */
interface IHeader {
    Accept?: string;
    'Content-Type': string;
    [propName: string]: any;
}

interface IHttp {
    getFetch<R>(url: string, param?: any, options?: RequestInit): Promise<R>;
    methodFetch<R>(url: string, method: string, params?: any): Promise<R>;
}

export default class HttpRequest implements IHttp {
    public handleUrl = (url: string) => (param: any):string => {
        if(param) {
            let paramsArray: any = [];
            Object.keys(param).forEach((key) =>
                paramsArray.push(key + "=" + encodeURIComponent(param[key]))
            );
            if (url.search(/\?/) === -1) {
                url = typeof param === "object" ? (url += "?" + paramsArray.join("&")) : url;
            } else {
                url += "&" + paramsArray.join("&");
            }
        }

        return url;
    }

    public handleMethod = (method: string) => {
        switch(method) {
            case 'post':
            case 'Post':
            case 'POST':
                return HttpMethod.post;
            case 'put':
            case 'Put':
            case 'PUT':
                return HttpMethod.put;
            case 'patch':
            case 'Patch':
            case 'PATCH':
                return HttpMethod.patch;
            case 'delete':
            case 'Delete':
            case 'DELETE':
                return HttpMethod.delete;
            default:
                return HttpMethod.get;
        }
    }

    public async getFetch<R>(url: string, param: any, options?: RequestInit): Promise<R> {
        options = {
            method: HttpMethod.get,
            credentials: 'include',
            headers: {
                'Content-Type': ContentType.json
            }
        }

        return await fetch(this.handleUrl(url)(param), options)
        .then<R>((response: any) => {
            if(response.ok) {
                return response.json();
            } else {
                // 出错
                console.log('出错啦');
            }
        }).then<R>((response: any) => {
            return response;
        }).catch<R>((error) => {
            // alert("当前网络不可用，请检查网络设置！");
            return error;
        });
    }

    public async methodFetch<R>(url: string, method: string, param: any): Promise<R> {
        let options: RequestInit = {
            method: this.handleMethod(method),
            credentials: 'include',
            headers: {
                'Content-Type': ContentType.json
            },
            body: JSON.stringify(param)
        }
        return await fetch(url, options)
        .then<R>((response: any) => {
            if (response.ok) {
                return response.json();
            } else {
                // 出错
                console.log('出错啦');
            }
        }).then<R>((response: any) => {
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            return response;
        }).catch<R>((error) => {
            // alert("当前网络不可用，请检查网络设置！");
            return error;
        });
    }
}