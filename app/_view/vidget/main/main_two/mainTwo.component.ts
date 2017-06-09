import {Component, OnInit} from '@angular/core';
import {MainBlockTwoService} from "../../../../_services/mainBlockTwo.service";

@Component({
    moduleId: module.id,
    selector: 'mainTwo',
    templateUrl: 'mainTwo.component.html'
})

export class MainTwoComponent  implements OnInit {
    items: Number[] = [];
    constructor(private mainBlock: MainBlockTwoService){}

    ngOnInit(){
        this.items = this.mainBlock.getMainBlock();

    }
}