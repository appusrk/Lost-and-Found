import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private router: Router) {}
  editMode: boolean = false;
  user: any = {};

  ngOnInit(): void {
    // Example: If you stored user in localStorage after login
    const userData: any = localStorage.getItem('loggedInUser');

    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
  logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}
openEdit() {
  this.editMode = true;
}
saveChanges() {
  localStorage.setItem('loggedInUser', JSON.stringify(this.user));
  alert("Profile updated!");
  this.editMode = false;
}


}


