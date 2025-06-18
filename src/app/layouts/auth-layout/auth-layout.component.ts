import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from "../../modules/auth/login/login.component";

@Component({
    selector: 'app-auth-layout',
    template: `
        <app-login></app-login>
    `,
    imports: [CommonModule, LoginComponent],
})
export class AuthLayoutComponent {
}