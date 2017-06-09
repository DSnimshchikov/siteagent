import {Component, OnInit} from '@angular/core';
import {Curator} from '../../_models/index';
import {CuratorService, ManagerService} from '../../_services/index';
@Component({
    moduleId: module.id,
    selector: 'menuComponent',
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {

    curator: Curator;
    manager: Curator;
    constructor(private curatorService: CuratorService, private managerService: ManagerService ){}
    ngOnInit(){
        this.curator = this.curatorService.getCurator();
        this.manager = this.managerService.getManager();
    }

}