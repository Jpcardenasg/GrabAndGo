import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin-page', component: AdminPageComponent },
    { path: 'customer-page', component: CustomerPageComponent },

];
