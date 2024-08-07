import { Component, Input } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';

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
    selector: 'app-entity-management',
    standalone: true,
    imports: [ManagementBarComponent, ModalComponent, InputComponent],
    templateUrl: './entity-management.component.html',
    styleUrl: './entity-management.component.css'
})
export class EntityManagementComponent {

    @Input() title?: string;

    products: Product[] = [
        { name: 'Producto 1', dimensions: 'Regular', gamma: 'No sé', description: 'Ok', supplier: 'Angelinic', stock: 346, sellPrice: 3400, supplierPrice: 1400 }
    ];

    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

}
