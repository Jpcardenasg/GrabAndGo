import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductManagementComponent } from './product-management/product-management.component';

@Component({
	selector: 'app-admin-page',
	standalone: true,
	imports: [SidebarComponent, ProductManagementComponent],
	templateUrl: './admin-page.component.html',
	styleUrl: './admin-page.component.css'
})

export class AdminPageComponent implements AfterViewInit {
	@ViewChild('sidebarContainer', { static: false }) sidebarContainer!: ElementRef;
	isCollapsed = false;
	constructor(private renderer: Renderer2) { }

	ngAfterViewInit() {
		if (!this.sidebarContainer) {
			console.error('sidebarContainer no está inicializado');
		}
	}

	toggleSidebar() {
		this.isCollapsed = !this.isCollapsed;
	}
}
