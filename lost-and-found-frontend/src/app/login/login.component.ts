import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usn = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    this.authService.login(form.value).subscribe({
      next: (res) => {
        alert("Login successful!");
        localStorage.setItem("userUSN", res.usn);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert("❌ Wrong USN or password");
      }
    });
  }
}
