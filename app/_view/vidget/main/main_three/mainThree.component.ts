import {Component, OnInit} from '@angular/core';
import {MainBlockThreeService} from '../../../../_services/index';
@Component({
    moduleId: module.id,
    selector: 'mainThree',
    templateUrl: 'mainThree.component.html'
})

export class MainThreeComponent  implements OnInit {
    items: Number[] = [];
    constructor(private mainBlock: MainBlockThreeService){}

    ngOnInit(){
        this.items = this.mainBlock.getMainBlock();

    }
}