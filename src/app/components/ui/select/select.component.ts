import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {

  @Input() label?: string;
  @Input() name?: string;
  @Input() selectId?: string;
  @Input() width?: string;

  setWidth(): string {
    if (this.width) {
      return this.width;
    }
    return '330px';

  }
}
