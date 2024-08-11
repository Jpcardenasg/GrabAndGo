import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputComponent,
            multi: true
        }
    ],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css'
})
export class InputComponent implements ControlValueAccessor {

    @Input() label?: string;
    @Input() type?: string;
    @Input() name?: string;
    @Input() inputId?: string;
    @Input() width?: string;
    @Input() value: string = '';

    @Output() valueChange = new EventEmitter<string>();

    private onChange = (value: string) => { };
    private onTouched = () => { };

    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
        this.onChange(this.value);
        this.valueChange.emit(this.value);
    }

    setWidth(): string {
        if (this.width) {
            return this.width;
        }
        return '330px';
    }

    writeValue(value: string): void {
        this.value = value || '';
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
    }
}
