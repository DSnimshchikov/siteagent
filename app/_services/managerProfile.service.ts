import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Curator} from '../_models/index';
///здесь будет выполняться запросы Ваш менеджера
@Injectable()
export class   ManagerService {
    constructor(private http: Http) { }
    private manager: Curator =
        { name:"Иван Олегович Иванов", number: "+7 495 785 82 22 (доб. 3127)", email:"iv.ivanov@homecredit.com"};

    getManager(){

        return this.manager;
    }


}