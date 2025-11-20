import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-found-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './found-reports.component.html',
  styleUrls: ['./found-reports.component.css']
})
export class FoundReportsComponent implements OnInit {

  foundItems: any[] = [];
  usn: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const data = localStorage.getItem('user');
    if (data) {
      const user = JSON.parse(data);
      this.usn = user.usn;
      this.loadFoundItems();
    }
  }

  loadFoundItems() {
    this.http.get<any[]>(`http://localhost:8080/api/found/user/${this.usn}`)
      .subscribe({
        next: (res) => this.foundItems = res,
        error: (err) => console.error('Error loading found items', err)
      });
  }
}
