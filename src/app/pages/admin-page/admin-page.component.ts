import { Component, Input } from '@angular/core';
import { ProductManagementComponent } from './product-management/product-management.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SideNavComponent } from '../../components/sidenav/sidenav.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin-page',
    standalone: true,
    imports: [
        RouterLink,
        RouterOutlet,
        ProductManagementComponent,
        NavBarComponent,
        SideNavComponent,

    ],
    templateUrl: './admin-page.component.html',
    styleUrl: './admin-page.component.css'
})

export class AdminPageComponent {
    @Input('title') title?: string;


}
