import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { BorrowersComponent } from './borrowers.component';
import { LoansComponent } from './loans.component';
import { PropertiesComponent } from './properties.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'borrowers',
    component: BorrowersComponent
  },
  {
    path: 'loans',
    component: LoansComponent
  },
  {
    path: 'properties',
    component: PropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, BorrowersComponent, LoansComponent, PropertiesComponent];
