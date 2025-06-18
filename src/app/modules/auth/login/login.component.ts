import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoogleIconComponent } from '../../../shared/icons';
import { SettingsComponent } from '../../../shared/settings/settings.component';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../../../shared/notification/notification.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    GoogleIconComponent,
    SettingsComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  showPassword = false;
  passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  // Injecting Services
  private authService = inject(AuthService);
  private _noti = inject(NotificationService);

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      account: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      remember: [false]
    });
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  signInWithGoogle() {
    // TODO: Implement Google Sign-In
    console.log('Google Sign-In clicked');
  }

  signInWithFacebook() {
    this._noti.error("done", "password_invalid_pattern");
    console.log('Facebook Sign-In clicked');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.doLogin(this.loginForm.value).subscribe(res => {
        console.log('Response status:', res);
        this._noti.error("done", "password_invalid_pattern");
      });
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
