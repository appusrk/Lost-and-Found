import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SidebarComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  user: any = {};  // <-- REQUIRED

  showButtons = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const current = this.router.url;

      const HOME_BUTTONS = ['/', '/dashboard'];
      this.showButtons = HOME_BUTTONS.includes(current);
    });
  }

  ngOnInit(): void {

   
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      // redirect if not logged in
      this.router.navigate(['/login']);
    }
  }
}
