import { Component, Input } from '@angular/core';

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

  setWidth(): string {
    if (this.width) {
      return this.width;
    }
    return '330px';

  }
}
