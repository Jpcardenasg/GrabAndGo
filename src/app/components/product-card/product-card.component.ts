import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product, ProductField, ProductResults } from '../../interfaces/Product';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  public productList$!: Observable<Product[]>;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.productList$ = this.service.getProductList();
  }

  productFields: ProductField[] = [
    { header: "ID", type: "number", name: "productId" },
    { header: "Name", type: "string", name: "name" },
    { header: "Sell Price", type: "number", name: "sellPrice" },
    { header: "Supplier Price", type: "number", name: "supplierPrice" },
    { header: "Gamma", type: "string", name: "gamma" },
  ];

}