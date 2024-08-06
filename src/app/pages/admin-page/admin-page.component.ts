import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
	selector: 'app-admin-page',
	standalone: true,
	imports: [SidebarComponent, ProductManagementComponent, NavBarComponent],
	templateUrl: './admin-page.component.html',
	styleUrl: './admin-page.component.css'
})

export class AdminPageComponent {

}
