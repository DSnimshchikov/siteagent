import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
///здесь будет производиться вычисление значени блока номер3
@Injectable()
export class MainBlockThreeService {
    constructor(private http: Http) {
    }

    private data: Number[] = [3457,79,237,674,122,90,453,0];

    getMainBlock() {

        return this.data;
    }


}