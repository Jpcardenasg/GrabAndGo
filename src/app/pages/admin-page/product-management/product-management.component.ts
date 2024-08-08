import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { MainButtonComponent } from '../../../components/ui/main-button/main-button.component';
import { AsyncPipe } from '@angular/common';
import { ProductField, ProductResults } from '../../../interfaces/Product';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/product.service';

@Component({
    selector: 'app-product-management',
    standalone: true,
    imports: [AsyncPipe, ManagementBarComponent, ModalComponent, InputComponent, MainButtonComponent],
    templateUrl: './product-management.component.html',
    styleUrl: './product-management.component.css'
})
export class ProductManagementComponent implements OnInit {

    @Input() title?: string;

    public productList$!: Observable<ProductResults>;
    constructor(private service: ProductService) { };

    ngOnInit(): void {
        this.productList$ = this.service.getProductList();
    }

    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    productFields: ProductField[] = [
        { header: "ID", type: "number", name: "productId" },
        { header: "Name", type: "string", name: "name" },
        { header: "Dimensions", type: "string", name: "dimensions" },
        { header: "Gamma", type: "string", name: "gamma" },
        { header: "Description", type: "string", name: "description" },
        { header: "Supplier", type: "string", name: "supplier" },
        { header: "Stock Quantity", type: "number", name: "stock" },
        { header: "Sell Price", type: "number", name: "sellPrice" },
        { header: "Supplier Price", type: "number", name: "supplierPrice" }
    ];

}
