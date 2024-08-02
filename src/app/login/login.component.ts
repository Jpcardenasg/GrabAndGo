import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {
	@ViewChild('container') container!: ElementRef;

	toggleSignIn() {
		this.container.nativeElement.classList.add('active');
	}

	toggleSignUp() {
		this.container.nativeElement.classList.remove('active');
	}
}
