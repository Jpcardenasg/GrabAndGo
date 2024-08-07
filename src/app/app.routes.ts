import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { ProductManagementComponent } from './pages/admin-page/product-management/product-management.component';
import { CustomerManagementComponent } from './pages/admin-page/customer-management/customer-management.component';
import { OrderManagementComponent } from './pages/admin-page/order-management/order-management.component';
import { PaymentManagementComponent } from './pages/admin-page/payment-management/payment-management.component';
import { EmployeeManagementComponent } from './pages/admin-page/employee-management/employee-management.component';
import { EntityManagementComponent } from './pages/admin-page/entity-management/entity-management.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'customer', component: CustomerPageComponent },
    {
        path: 'admin', component: AdminPageComponent, children: [
            { path: 'products', component: ProductManagementComponent },
            { path: 'customers', component: CustomerManagementComponent },
            { path: 'orders', component: OrderManagementComponent },
            { path: 'payments', component: PaymentManagementComponent },
            { path: 'employees', component: EmployeeManagementComponent },
            { path: 'entities', component: EntityManagementComponent },
        ]
    },


];
