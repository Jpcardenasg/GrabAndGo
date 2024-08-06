import { Component } from '@angular/core';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SideNavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutCardComponent, NavBarComponent, SideNavComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
