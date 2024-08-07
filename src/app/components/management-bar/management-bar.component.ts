import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-management-bar',
  standalone: true,
  imports: [],
  templateUrl: './management-bar.component.html',
  styleUrl: './management-bar.component.css'
})
export class ManagementBarComponent {

  @Input() title?: string;

}
