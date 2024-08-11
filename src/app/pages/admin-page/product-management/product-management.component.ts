import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { MainButtonComponent } from '../../../components/ui/main-button/main-button.component';
import { AsyncPipe } from '@angular/common';
import { Product, ProductField, ProductResults } from '../../../interfaces/Product';
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
    public selectedProduct: Product | null = null;
    public modalLabel: string = "Save";

    constructor(private service: ProductService) { };

    ngOnInit(): void {
        this.productList$ = this.service.getProductList();
        this.productList$.subscribe({
            next: (data) => {
                console.log('Product list data:', data);
            },
            error: (err) => console.error('Error fetching product list:', err)
        });
    }

    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
        this.selectedProduct = null;
        this.modalLabel = "Save";
    }

    handleAdd() {
        this.selectedProduct = null;
        this.modalLabel = "Save";
        this.openModal();;
    }

    handleEdit() {
        if (this.selectedProduct) {
            this.modalLabel = "Edit";
            this.openModal();
        } else {
            alert('Please select a product to edit.');
        }
    }

    selectProduct(product: Product) {
        this.selectedProduct = product;
    }

    productFields: ProductField[] = [
        { header: "ID", type: "number", name: "productId" },
        { header: "Name", type: "string", name: "name" },
        { header: "Gamma", type: "string", name: "gamma" },
        { header: "Description", type: "string", name: "description" },
        { header: "Supplier", type: "string", name: "supplier" },
        { header: "Sell Price", type: "number", name: "sellPrice" },
        { header: "Supplier Price", type: "number", name: "supplierPrice" }
    ];

}
