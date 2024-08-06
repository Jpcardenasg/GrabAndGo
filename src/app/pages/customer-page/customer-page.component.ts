import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.css'
})
export class CustomerPageComponent {

}
