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
    signUpForm!: FormGroup;

    private readonly _fb = inject(FormBuilder);
    private readonly _router = inject(Router);
    private readonly _authSvc = inject(AuthService);

    ngOnInit(): void {
        this._buildSignInForm();
        this._buildSignUpForm();
    }

    private _buildSignInForm(): void {
        this.signInForm = this._fb.nonNullable.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    private _buildSignUpForm(): void {
        this.signUpForm = this._fb.nonNullable.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', Validators.required],
            idNumber: ['', Validators.required],
            telephone: ['', Validators.required],
            address: ['', Validators.required],
            country: ['', Validators.required],
            region: ['', Validators.required],
            city: ['', Validators.required],
            postalCode: ['', Validators.required],
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

    onRegister(): void {
        const newUser = this.signUpForm.value;
        console.log(newUser);


    }



    @ViewChild('container') container!: ElementRef;
    toggleSignIn() {
        this.container.nativeElement.classList.add('active');
    }

    toggleSignUp() {
        this.container.nativeElement.classList.remove('active');
    }

}
