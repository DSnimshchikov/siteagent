import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
///здесь будет производиться вычисление значени блока номер2
@Injectable()
export class MainBlockTwoService {
    constructor(private http: Http) {
    }

    private data: Number[] = [512,617];

    getMainBlock() {

        return this.data;
    }


}