import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Curator} from '../_models/index';
///здесь будет выполняться запросы Ваш куратор
@Injectable()
export class CuratorService {
    constructor(private http: Http) { }
    private curator: Curator =
        { name:"Ирина Сергеевна Ильина", number: "+7 920 219 87 77", email:"ira.serg@homecredit.com"};

    getCurator(){

     return this.curator;
    }


}