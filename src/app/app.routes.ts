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
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminHomeComponent } from './pages/admin-page/admin-home/admin-home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'customer', component: CustomerPageComponent },
    {
        path: 'admin', component: AdminPageComponent, children: [
            { path: '', component: AdminHomeComponent },
            { path: 'products', component: ProductManagementComponent, data: { title: 'Product' } },
            { path: 'customers', component: CustomerManagementComponent, data: { title: 'Customer' } },
            { path: 'orders', component: OrderManagementComponent, data: { title: 'Order' } },
            { path: 'payments', component: PaymentManagementComponent, data: { title: 'Payment' } },
            { path: 'employees', component: EmployeeManagementComponent, data: { title: 'Employee' } },
            { path: 'entities', component: EntityManagementComponent, data: { title: 'Entity' } },
        ]
    },
    { path: 'aboutUs', component: AboutUsComponent }



];
