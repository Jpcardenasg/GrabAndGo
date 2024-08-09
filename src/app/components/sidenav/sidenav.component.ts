import { Component } from '@angular/core';
import { sideNavbarData, entityData } from './nav-data';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.css'
})
export class SideNavComponent {

	isCollapsed = false;
	isEntityListVisible = false;
	navData = sideNavbarData;
	entities = entityData;

	closeSidenav(): void {
		this.isCollapsed = true;
		if(!this.isEntityListVisible) {
			this.isEntityListVisible = true;
		}
	}

	toggleSidenav(): void {
		this.isCollapsed = !this.isCollapsed;
	}

	closeEntity(): void {
		this.isEntityListVisible = true;
	}

	toggleEntityList(): void {
		
		
		if (this.isCollapsed && this.isEntityListVisible) {
			this.isCollapsed = false;
		}
		
		
		this.isEntityListVisible = !this.isEntityListVisible;
		
		if (!this.isCollapsed && this.isEntityListVisible) {
			this.isCollapsed = true;
		}
		
	}
	

}
