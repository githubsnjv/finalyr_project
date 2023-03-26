import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { MachinecomponentComponent } from './components/machinecomponent/machinecomponent.component';
import { MachinesComponent } from './components/machines/machines.component';
import { ReportReportComponent } from './components/report-report/report-report.component';

const routes: Routes = [
  {path:'entry',component:FormsComponent},
  {path:'mach/:id',component:MachinesComponent},
  {path:'dash',component:DashboardComponent},

  {path:'report/:id',component:MachinecomponentComponent},
  {path:"",redirectTo:'dash'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
