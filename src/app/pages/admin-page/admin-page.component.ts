import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
	@ViewChild('sidebarContainer', { static: false }) sidebarContainer!: ElementRef;

	isCollapsed = false;

	constructor(private renderer: Renderer2) { }

	toggleSidebar() {
		this.isCollapsed = !this.isCollapsed;
	}
}
