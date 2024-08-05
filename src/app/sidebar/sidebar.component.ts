import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;

  constructor(private renderer: Renderer2) { }

  toggleSidebar() {
    console.log('entra');

    const sidebar = this.sidebar.nativeElement;
    if (sidebar.classList.contains('-translate-x-full')) {
      this.renderer.removeClass(sidebar, '-translate-x-full');
    } else {
      this.renderer.addClass(sidebar, '-translate-x-full');
    }
  }

}
