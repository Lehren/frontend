import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from '../util/error/error.component';
import {ModuleComponent} from './components/module-component/module.component';
import {ModuleOverviewComponent} from './components/module-overview-component/module-overview.component';
import {SemesterOverviewComponent} from './components/semester-overview-component/semester-overview.component';

const routes: Routes = [
  {
    path: 'moduleoverview',
    component: ModuleOverviewComponent
  },
  {
    path: 'moduleoverview/:curriculum',
    component: ModuleOverviewComponent
  },
  {
    path: 'curriculum/:curriculum/modules/:code',
    component: ModuleComponent
  },
  {
    path: 'curriculum/:curriculum/:name/semesters/:semester',
    component: SemesterOverviewComponent
  },
  {
    path: '',
    redirectTo: '/moduleoverview',
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
