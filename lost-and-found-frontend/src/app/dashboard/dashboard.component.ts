import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SidebarComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 showButtons = true;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const current = this.router.url;

      // Routes where buttons should be visible
      const HOME_BUTTONS = ['/', '/dashboard'];

      // Show buttons only on dashboard home
      this.showButtons = HOME_BUTTONS.includes(current);
    });
  }  
  ngOnInit(): void {
  const isLoggedIn = localStorage.getItem('userUSN');
  if (!isLoggedIn) {
    this.router.navigate(['/login']);
  }
}



}
