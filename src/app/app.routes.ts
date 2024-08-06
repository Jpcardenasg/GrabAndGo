import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin', component: AdminPageComponent },
    { path: 'customer', component: CustomerPageComponent },
    { path: 'sidenav', component: SideNavComponent },
];
