import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router, private authService: AuthService) {}

  name = '';
  usn = '';
  employeeId = '';
  department = '';
  userLevel = '';
  email = '';
  password = '';
  confirmPassword = '';

  showUSN = false;
  showEmployeeId = false;

  // 🔥 Toggle fields based on role
  onRoleChange() {
    this.showUSN = this.userLevel === 'student';
    this.showEmployeeId = this.userLevel === 'faculty';
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('⚠️ Please fill all required fields!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('❌ Passwords do not match!');
      return;
    }

    const registerData = {
      name: this.name,
      usn: this.userLevel === 'student' ? this.usn : null,
      employeeId: this.userLevel === 'faculty' ? this.employeeId : null,
      department: this.department,
      userLevel: this.userLevel,
      email: this.email,
      password: this.password
    };

    console.log('📤 Sending JSON:', registerData);

    this.authService.register(registerData).subscribe({
      next: () => {
        alert('🎉 Registered successfully!');
        form.reset();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('❌ Registration failed:', err);
        alert('Registration failed. Check console for details.');
      }
    });
  }
}
