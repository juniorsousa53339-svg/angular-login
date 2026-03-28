import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation())
  ]
};