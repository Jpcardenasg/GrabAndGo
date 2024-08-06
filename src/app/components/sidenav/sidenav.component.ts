import { Component } from '@angular/core';
import { sideNavbarData } from './nav-data';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [],
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.css'
})
export class SideNavComponent {

	isCollapsed = false;
	navData = sideNavbarData;

	closeSidenav(): void {
		this.isCollapsed = true;
	}

	toggleSidenav(): void {
		this.isCollapsed = !this.isCollapsed;
	}

}
