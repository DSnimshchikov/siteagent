import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { MyMessageComponent } from './_view/vidget/mymessage/index';
import {MainTabComponent} from './_view/vidget/main/index';
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'mymessage', component: MyMessageComponent},
    {path: 'regedit', component: MainTabComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);