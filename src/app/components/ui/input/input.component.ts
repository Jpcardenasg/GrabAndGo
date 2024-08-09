import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css'
})
export class InputComponent {

    @Input() label?: string;
    @Input() type?: string;
    @Input() name?: string;
    @Input() inputId?: string;
    @Input() width?: string;

    @Output() valueChange = new EventEmitter<string>();

    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.valueChange.emit(input.value);
    }

    setWidth(): string {
        if (this.width) {
            return this.width;
        }
        return '330px';

    }
}
