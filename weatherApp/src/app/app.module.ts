import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { LoginComponent } from './components/login/login.component';

// Material Components Imports
import { AngularMaterialModule } from "./angular.material.module"

import { DropdownModule } from 'primeng/dropdown'
import { CardModule, } from 'primeng/card';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeatherreportComponent } from './components/weatherreport/weatherreport.component';
import { Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorpageComponent,
    DashboardComponent,
    NavbarComponent,
    WeatherreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    CardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
