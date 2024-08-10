import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InputComponent } from '../../components/ui/input/input.component';
import { SelectComponent } from '../../components/ui/select/select.component';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [InputComponent, SelectComponent, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

    signInForm!: FormGroup;

    private readonly _fb = inject(FormBuilder);
    private readonly _router = inject(Router);
    private readonly _authSvc = inject(AuthService);

    ngOnInit(): void {
        this._buildForm();
    }

    private _buildForm(): void {
        this.signInForm = this._fb.nonNullable.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onLogin(): void {
        const userLogin = this.signInForm.value;

        this._authSvc.login(userLogin).subscribe({
            next: (response) => {
                const role = response.role;

                if (role === 'ADMIN') {
                    this._router.navigate(['/admin']);
                } else if (role === 'CUSTOMER') {
                    this._router.navigate(['/customer']);
                }
            },
            error: (err) => console.error('Login failed', err)
        }
        );

    }

    @ViewChild('container') container!: ElementRef;
    toggleSignIn() {
        this.container.nativeElement.classList.add('active');
    }

    toggleSignUp() {
        this.container.nativeElement.classList.remove('active');
    }

}
