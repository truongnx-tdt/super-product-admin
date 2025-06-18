import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsComponent } from "./shared/settings/settings.component";
import { NotificationComponent } from './shared/notification/notification.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, SettingsComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'super-product-admin';
  
}
