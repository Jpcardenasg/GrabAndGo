import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-management-bar',
    standalone: true,
    imports: [],
    templateUrl: './management-bar.component.html',
    styleUrl: './management-bar.component.css'
})
export class ManagementBarComponent {
    @Input() title?: string;

    @Output() add = new EventEmitter<void>();
    @Output() edit = new EventEmitter<void>();


    addElement() {
        this.add.emit();
    }

    editElement() {
        this.edit.emit();
    }

}
