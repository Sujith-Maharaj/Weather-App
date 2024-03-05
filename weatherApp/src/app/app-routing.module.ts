import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WeatherreportComponent} from './components/weatherreport/weatherreport.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "",
    component: WeatherreportComponent
  },
  {
    path: ":locationName",
    pathMatch: 'full',
    component: WeatherreportComponent
  },
  {
    path: '**',
    component: ErrorpageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
