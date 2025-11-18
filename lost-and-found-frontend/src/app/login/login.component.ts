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
    if (form.invalid) {
      alert("Please fill all fields.");
      return;
    }

    const loginData = {
      usn: this.usn,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: (res) => {
        console.log("Login Response:", res);

        if (res.status === "success") {
          alert("Login successful! 💖");

          // Save user details if needed
          localStorage.setItem("userUSN", res.usn);
          localStorage.setItem("userName", res.name);
          localStorage.setItem("userLevel", res.userLevel);

          this.router.navigate(['/dashboard']);
        } else {
          alert("Invalid login.");
        }
      },
      error: (err) => {
        console.log("Login error:", err);
        alert(err.error?.message || "❌ Wrong USN or password");
      }
    });
  }
}
