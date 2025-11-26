
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-match-history',
  imports: [CommonModule],
  templateUrl: './match-history.component.html',
  styleUrl: './match-history.component.css'
})
export class MatchHistoryComponent implements OnInit {

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
    this.http.get<any[]>(`http://localhost:8080/api/matches/user/${this.usn}`)
      .subscribe({
        next: (res) => this.foundItems = res,
        error: (err) => console.error('Error loading found items', err)
      });
  }
}
