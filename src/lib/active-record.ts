import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface MethodHttp {
    query: string;
    update: string;
    insert: string;
    delete: string;
    [method: string]: string;
}
export interface IBApiConfig {
    urlAPI: string;
    headers: any;
    methods: MethodHttp;
}
export class ApiConfig {
    config: any;
    urlAPI: string;
    headers: any;
    methods: MethodHttp;
    defaultMethods: MethodHttp = {
        query: 'get',
        update: 'put',
        insert: 'post',
        delete: 'delete'
    };

    constructor(config?: any) {
        this.config = config || {};
        this.urlAPI = this.config.urlAPI || 'http://localhost:3456/api/';
        this.headers = this.config.headers || {};
        this.methods = this.config.methods || {};
        let method: string;
        for (method in this.defaultMethods) {
            if (method !== undefined) {
                this.methods[method] = this.methods[method] || this.defaultMethods[method];
            }
        }
    }
    getConfig() {
        return {
            urlAPI: this.urlAPI,
            headers: this.headers,
            methods: this.methods
        };
    }
}
export class ActiveRecord<T> {
    public api_url: string;
    private _config: IBApiConfig;
    constructor(public options: ApiConfig, public httpService: any, protected table_name: string) {
        this._config = options.getConfig();
        this.api_url = this._config.urlAPI + '' + table_name;
    }
    // Ex:[GET] /${table_name}?page=1&sort=title
    findAll(params: any = { page: 1, sort: '' }): Promise<T[]> {
        return this.httpService[this._config.methods.query](this.api_url + this.generateParam(params))
            .toPromise()
            .then((res: Response) => this.processData(res))
            .catch(this.handleError);
    }
    // Ex:[GET] /${table_name}/search?title=abc&page=1&sort=title
    search(data: any, api_search_name: string = ''): Promise<T[]> {
        return this.httpService[this._config.methods.query](this.api_url + '/' + api_search_name + this.generateParam(data))
            .toPromise()
            .then((res: Response) => this.processData(res))
            .catch(this.handleError);
    }
    // Ex:[GET] /${table_name}/${id}
    find(id: any): Promise<T> {
        return this.httpService[this._config.methods.query](this.api_url + '/' + id)
            .toPromise()
            .then((res: Response) => this.processData(res))
            .catch(this.handleError);
    }
    // Ex:[GET] /${table_name}/${id}
    update(id: any, data: any) {
        const body = JSON.stringify(data);
        if (!this._config.headers['Content-Type']) {
            this._config.headers['Content-Type'] = 'application/json';
        }
        const headers = new Headers(this._config.headers);
        const options = new RequestOptions({ headers: headers });
        return this.httpService[this._config.methods.update](this.api_url + '/' + id, body, options)
            .toPromise()
            .then((res: Response) => this.processData(res))
            .catch(this.handleError);
    }
    // Ex:[GET] /${table_name}
    insert(data: any) {
        const body = JSON.stringify(data);
        if (!this._config.headers['Content-Type']) {
            this._config.headers['Content-Type'] = 'application/json';
        }
        const headers = new Headers(this._config.headers);
        const options = new RequestOptions({ headers: headers });
        return this.httpService[this._config.methods.insert](this.api_url, body, options)
            .toPromise()
            .then((res: Response) => this.processData(res))
            .catch(this.handleError);
    }
    // Ex:[GET] /${table_name}/${id}
    delete(id: any) {
        const headers = new Headers(this._config.headers);
        const options = new RequestOptions({ headers: headers });
        return this.httpService[this._config.methods.delete](this.api_url + '/' + id, options)
            .toPromise()
            .then((res: Response) => this.processData(res))
            .catch(this.handleError);
    }
    protected generateParam(params: any = {}): string {
        const params_arr: Array<string> = [];
        for (const key in params) {
            if (params[key]) {
                params_arr.push(key + '=' + params[key]);
            }
        }
        return '?' + params_arr.join('&');
    }
    protected processData(res: Response) {
        return <T>res.json();
    }
    protected handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
