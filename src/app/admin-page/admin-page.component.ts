import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductManagementComponent } from './product-management/product-management.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [SidebarComponent, ProductManagementComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;

  toggleSidebar() {
    this.sidebarComponent.toggleSidebar();
  }
}
