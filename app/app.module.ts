import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import {NavComponent} from './_view/nav/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, CuratorService, ManagerService,MainBlockThreeService,MainBlockTwoService,MainBlockOneService,ProgressService} from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {MenuComponent} from './_view/menu/index';
import {HeaderComponent} from './_view/header/index';
import {ContentNavComponent} from './_view/vidget/contentNav/index';
import {MyMessageComponent} from './_view/vidget/mymessage/index';
import {MainTabComponent} from './_view/vidget/main/index';
import { Tabs,TabComponent} from './tab/index';
import {MainHeaderComponent} from './_view/vidget/main/main_header/index';
import {MainThreeComponent} from './_view/vidget/main/main_three/index';
import {MainOneComponent} from './_view/vidget/main/main_one/index';
import {MainTwoComponent} from './_view/vidget/main/main_two/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavComponent,
        MenuComponent,
        HeaderComponent,
        ContentNavComponent,
        MyMessageComponent,
        TabComponent,
        Tabs,
        MainTabComponent,
        MainHeaderComponent,
        MainThreeComponent,
        MainTwoComponent,
        MainOneComponent

    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CuratorService,
        ManagerService,
        MainBlockThreeService,
        MainBlockTwoService,
        MainBlockOneService,
        ProgressService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }