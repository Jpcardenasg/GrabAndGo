import { Component, inject, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { MainButtonComponent } from '../../../components/ui/main-button/main-button.component';
import { AsyncPipe } from '@angular/common';
import { Product, ProductField, ProductResults } from '../../../interfaces/Product';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-product-management',
    standalone: true,
    imports: [AsyncPipe, ManagementBarComponent, ModalComponent, InputComponent, MainButtonComponent],
    templateUrl: './product-management.component.html',
    styleUrl: './product-management.component.css'
})
export class ProductManagementComponent implements OnInit {

    @Input() title?: string;

    productForm!: FormGroup;

    private readonly _fb = inject(FormBuilder);
    public productList$!: Observable<ProductResults>;
    public selectedProduct: Product | null = null;
    public modalLabel: string = "Save";

    constructor(private service: ProductService) { };

    ngOnInit(): void {
        this.productList$ = this.service.getProductList();
        this._buildProductForm();

    }

    private _buildProductForm(): void {
        this.productForm = this._fb.nonNullable.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
            gamma: ['', Validators.required],
            description: ['', Validators.required],
            img: ['', Validators.required],
            sellPrice: ['', Validators.required],
            supplierPrice: ['', Validators.required],
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

    handleDelete() {
        if (this.selectedProduct) {
            this.service.deleteProduct(this.selectedProduct.id).subscribe({
                next: () => {
                    this.productList$ = this.service.getProductList();
                    this.selectedProduct = null;
                },
                error: (err) => console.error('Error deleting Product:', err)
            });
        } else {
            alert('Please select a Product to delete.');
        }
    }

    saveProduct() {

        if (this.productForm.valid) {
            const formData = this.productForm.value;

            const productData = {
                id: formData.id,
                name: formData.name,
                gamma: formData.gamma,
                description: formData.description,
                img: formData.img,
                sellPrice: formData.sellPrice,
                supplierPrice: formData.supplierPrice,
            };

            console.log(productData);
            if (this.selectedProduct) {
                if (this.modalLabel === "Save") {
                    this.service.saveProduct(this.selectedProduct).subscribe({
                        next: () => {
                            this.productList$ = this.service.getProductList();
                            this.closeModal();
                        },
                        error: (err) => console.error('Error saving Product:', err)
                    });
                } else if (this.modalLabel === "Edit") {
                    this.service.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe({
                        next: () => {
                            this.productList$ = this.service.getProductList();
                            this.closeModal();
                        },
                        error: (err) => console.error('Error updating product:', err)
                    });
                }
            }
        }
    }

    getFieldValue(product: Product | null, fieldName: string): any {

        return product ? product[fieldName as keyof Product] : '';
    }

    selectProduct(product: Product) {
        this.selectedProduct = product;

    }

    productFields: ProductField[] = [
        { header: "ID", type: "number", name: "id" },
        { header: "Name", type: "string", name: "name" },
        { header: "Gamma", type: "string", name: "gamma" },
        { header: "Description", type: "string", name: "description" },
        { header: "Supplier", type: "string", name: "supplier" },
        { header: "Sell Price", type: "number", name: "sellPrice" },
        { header: "Supplier Price", type: "number", name: "supplierPrice" }
    ];

}
