import { Component } from '@angular/core';
import { ProductManagementComponent } from './product-management/product-management.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SideNavComponent } from '../../components/sidenav/sidenav.component';

@Component({
	selector: 'app-admin-page',
	standalone: true,
	imports: [ProductManagementComponent, NavBarComponent, SideNavComponent],
	templateUrl: './admin-page.component.html',
	styleUrl: './admin-page.component.css'
})

export class AdminPageComponent {

}
