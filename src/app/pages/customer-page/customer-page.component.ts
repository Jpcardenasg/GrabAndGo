import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SideNavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [ProductCardComponent, NavBarComponent, SideNavComponent],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.css'
})
export class CustomerPageComponent {

}
