import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin-page', component: AdminPageComponent },
    { path: 'customer-page', component: CustomerPageComponent },

];
