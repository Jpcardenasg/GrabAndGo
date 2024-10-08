import { Component } from '@angular/core';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [AboutCardComponent, NavBarComponent],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
