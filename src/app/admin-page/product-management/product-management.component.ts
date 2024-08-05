import { Component } from '@angular/core';

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
  imports: [],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent {

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
