import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LostComponent } from './lostform/lostform.component';
import { FoundComponent } from './foundform/foundform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssuesComponent } from './issues/issues.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'lostform', component: LostComponent },
  { path: 'findform', component: FoundComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'issues', component: IssuesComponent},
  { path: '**', redirectTo: 'dashboard' }
];
