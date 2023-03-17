import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MachinesComponent } from './components/machines/machines.component';
import { FormsComponent } from './components/forms/forms.component';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule,} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MachinesComponent,
    FormsComponent,
    NavbarComponent,
    SidenavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [
    {provide:   MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
