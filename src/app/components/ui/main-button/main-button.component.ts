import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-main-button',
    standalone: true,
    imports: [],
    templateUrl: './main-button.component.html',
    styleUrl: './main-button.component.css'
})
export class MainButtonComponent {

    @Input() label?: string;
    @Input() disabled = false;

    @Output() click = new EventEmitter<Event>();

    handleClick(event: Event) {
        if (!this.disabled) {
            this.click.emit(event);
        }
    }

}
