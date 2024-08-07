import { Component, Input } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';

interface Product {
  name: string;
  dimensions: string;
  gamma: string;
  description: string;
  supplier: string;
  stock: number;
  sellPrice: number;
  supplierPrice: number;
}

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [ManagementBarComponent],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent {

  @Input() title?: string;

  products: Product[] = [
    { name: 'Producto 1', dimensions: 'Regular', gamma: 'No sé', description: 'Ok', supplier: 'Angelinic', stock: 346, sellPrice: 3400, supplierPrice: 1400 }
  ];


  addProduct() {
    console.log('Add');

  }

  deleteProduct() {
    console.log('Del');

  }

  editProduct() {
    console.log('Edit');

  }
}
