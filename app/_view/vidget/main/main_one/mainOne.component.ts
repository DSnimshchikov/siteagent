import {Component, OnInit} from '@angular/core';
import {MainBlockOneService} from "../../../../_services/mainBlockOne.service";

@Component({
    moduleId: module.id,
    selector: 'mainOne',
    templateUrl: 'mainOne.component.html'
})


export class MainOneComponent  implements OnInit {
    items: String[] = [];
    constructor(private mainBlock: MainBlockOneService){}

    ngOnInit(){
        this.items = this.mainBlock.getMainBlock();

    }
}