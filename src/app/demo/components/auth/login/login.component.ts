import {Component} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .p-password input {
            width: 100%;
            padding: 1rem;
        }

        :host ::ng-deep .pi-eye {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    email!: string;
    rememberMe: boolean = false;

    constructor(public layoutService: LayoutService,
                private authService: AuthService,
                private router: Router) {
    }

    onSubmit() {
        this.authService.login(this.email, this.password).subscribe({
            next: (res: any) => {
                if (this.rememberMe) {
                    localStorage.setItem('token', res.token);
                } else {
                    sessionStorage.setItem('token', res.token);
                }
                this.router.navigate(['/home']);
            },
            error: () => {
                alert('Invalid credentials');
            }
        });
    }


}
