import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-select',
    standalone: true,
    imports: [],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: SelectComponent,
            multi: true
        }
    ],
    templateUrl: './select.component.html',
    styleUrl: './select.component.css'
})
export class SelectComponent implements ControlValueAccessor {

    @Input() label?: string;
    @Input() name?: string;
    @Input() selectId?: string;
    @Input() width?: string;

    value: string = '';
    private onChange = (value: string) => { };
    private onTouched = () => { };

    onSelectChange(event: Event): void {
        const select = event.target as HTMLSelectElement;
        this.value = select.value;
        this.onChange(this.value);
        this.onTouched();
    }

    setWidth(): string {
        return this.width ? this.width : '330px';
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
