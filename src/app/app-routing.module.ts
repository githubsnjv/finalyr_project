import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { MachinesComponent } from './components/machines/machines.component';

const routes: Routes = [
  {path:'entry',component:FormsComponent},
  {path:'mach',component:MachinesComponent},
  {path:'dash',component:DashboardComponent},
  {path:"",redirectTo:'dash'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
