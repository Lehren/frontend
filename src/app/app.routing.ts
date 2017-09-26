import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from '../util/error/error.component';
import {LoginComponent} from '../fmms/login/login.component';
import {StartComponent} from '../fmms/start/start.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];


/*
Disable tracing in production
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }