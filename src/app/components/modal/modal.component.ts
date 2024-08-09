import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainButtonComponent } from '../ui/main-button/main-button.component';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [MainButtonComponent],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css'
})
export class ModalComponent {
    @Input() title?: string;
    @Input() label?: string;
    @Output() close = new EventEmitter<void>();
    @Output() save = new EventEmitter<void>();

    closeModal() {
        this.close.emit();
    }

    saveData() {
        this.save.emit();
    }

}
