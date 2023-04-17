import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { JobAllotmentComponent } from './components/job-allotment/job-allotment.component';
import { MachinecomponentComponent } from './components/machinecomponent/machinecomponent.component';
import { MachinesComponent } from './components/machines/machines.component';
import { SummaComponent } from './summa/summa.component';
import { DCComponent } from './components/dc/dc.component';



const routes: Routes = [
  {path:'entry',component:FormsComponent},
  {path:'mach/:id',component:MachinesComponent},
  {path:'dash',component:DashboardComponent},
  {path:'allot',component:JobAllotmentComponent},
  {path:'report/:id',component:MachinecomponentComponent},
  {path:'summa',component:SummaComponent},
  {path:'DC',component:DCComponent},
  {path:"",redirectTo:'summa'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
