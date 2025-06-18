import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-main-layout',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
    `,
    imports: [CommonModule, RouterOutlet, HeaderComponent],
})
export class MainLayoutComponent {

}