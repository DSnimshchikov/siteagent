import {Component, OnInit} from '@angular/core';
import {ProgressService} from "../../../../_services/progress.service";
import {HeaderMain} from "../../../../_models/headerMane";

@Component({
    moduleId: module.id,
    selector: 'mainHeader',
    templateUrl: 'mainHeader.component.html'
})

export class MainHeaderComponent   implements OnInit {
    items: HeaderMain;
    prog: number;
    constructor(private mainBlock: ProgressService){}

    ngOnInit(){
        this.items = this.mainBlock.getHeader();
        this.prog=this.items.progress;
    }
}