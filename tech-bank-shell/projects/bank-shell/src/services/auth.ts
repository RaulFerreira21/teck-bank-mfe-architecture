import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginResponse {
  id: number;
  username: string;
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private baseUrl = 'https://dummyjson.com/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, {
      username,
      password,
    });
  }
}
