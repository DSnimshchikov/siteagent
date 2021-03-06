import {Component, OnInit} from '@angular/core';


import { UserService } from '../../../_services/index';
import {User} from "../../../_models/user";
@Component({
    moduleId: module.id,
    selector: 'contentNav',
    templateUrl: 'contentNav.component.html'
})

export class ContentNavComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}