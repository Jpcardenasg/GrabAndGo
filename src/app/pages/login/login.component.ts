import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})

export class LoginComponent {
	@ViewChild('container') container!: ElementRef;

	constructor(private router: Router) { }

	toggleSignIn() {
		this.container.nativeElement.classList.add('active');
	}

	toggleSignUp() {
		this.container.nativeElement.classList.remove('active');
	}

	onLogin() {
		this.router.navigate(['/admin']);
	}
}
