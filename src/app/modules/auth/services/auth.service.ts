import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginResponse, User } from '../interfaces/user';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../../core/models/apiresponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  doLogin(req: User): Observable<ApiResponse<LoginResponse>> {
    return this.httpClient.post<ApiResponse<LoginResponse>>(`${this.apiUrl}/api/login`, req);
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token') || '';
  }

  setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  refreshToken(): Observable<string> {
    const refreshToken = localStorage.getItem('refresh_token');
    return this.httpClient.post<{ access_token: string }>('/api/refresh', { refresh_token: refreshToken }).pipe(
      map(res => res.access_token)
    );
  }

  logout() {
    localStorage.clear();
    // điều hướng đến trang login
  }
}
