import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  // LOGIN
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  // FIXED REGISTER (NO JSON.stringify)
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
