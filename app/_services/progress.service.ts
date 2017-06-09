import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {HeaderMain} from "../_models/headerMane";
///здесь будет выполняться запросы Ваш менеджера
@Injectable()
export class   ProgressService {
    constructor(private http: Http) { }
    private headerMain: HeaderMain ={headerText:"До 20.12.2016 вы должны продать потребительских кредитов на 40000 р со средней ставкой не менее 28% годовых и оформить 1 договор финансовой защиты.",rub: 34750,proc: 20,ost: 5250, progress: "75%" };

    getHeader(){

        return this.headerMain;
    }


}