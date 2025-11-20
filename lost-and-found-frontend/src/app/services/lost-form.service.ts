import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LostItemService {

  private apiUrl = 'http://localhost:8080/api/lost';

  constructor(private http: HttpClient) { }

  addLostItem(item: any, file?: File) {
    const formData = new FormData();
    formData.append('itemName', item.itemName);
    formData.append('description', item.description);
    formData.append('location', item.location);
    formData.append('contact', item.contact);
    formData.append('usn', item.usn);  // <-- USN from frontend

    if (file) {
      formData.append('image', file);
    }

    return this.http.post(this.apiUrl, formData);
  }
}
