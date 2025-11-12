import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LostItemService {

  private apiUrl = 'http://localhost:8080/api/lost'; // Your Spring Boot URL

  constructor(private http: HttpClient) {}

  addLostItem(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getLostItemsForUser(usn: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${usn}`);
  }
}
