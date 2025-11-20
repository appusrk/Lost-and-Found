import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lost-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lost-reports.component.html',
  styleUrls: ['./lost-reports.component.css']
})
export class LostReportsComponent implements OnInit {

  lostItems: any[] = [];
  usn: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const data = localStorage.getItem('user');
    if (data) {
      const user = JSON.parse(data);
      this.usn = user.usn;
      this.loadLostItems();
    }
  }

  loadLostItems() {
    this.http.get<any[]>(`http://localhost:8080/api/lost/user/${this.usn}`)
      .subscribe({
        next: (res) => this.lostItems = res,
        error: (err) => console.error('Error loading lost items', err)
      });
  }
}
