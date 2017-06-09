import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
///здесь будет производиться вычисление значени блока номер3
@Injectable()
export class MainBlockOneService {
    constructor(private http: Http) {
    }

    private data: String[] = ["вы не продали договор финансовой защиты","16 дней и 7 часов."];

    getMainBlock() {

        return this.data;
    }


}