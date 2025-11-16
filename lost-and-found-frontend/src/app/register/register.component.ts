import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service'; // ✅ import this

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private router: Router, private authService: AuthService) {} // ✅ inject here

  name = '';
  usn = '';
  department = '';
  userLevel = '';
  email = '';
  password = '';
  confirmPassword = '';
showUSN = false;
showEmployeeId = false;

onRoleChange() {
  if (this.userLevel === 'student') {
    this.showUSN = true;
    this.showEmployeeId = false;
  } else if (this.userLevel === 'faculty') {
    this.showUSN = false;
    this.showEmployeeId = true;
  } else {
    this.showUSN = false;
    this.showEmployeeId = false;
  }
}


  onSubmit(form: any) {
    if (form.invalid) {
      alert('⚠️ Please fill all required fields correctly!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('❌ Passwords do not match!');
      return;
    }

    const registerData = {
      name: this.name,
      usn: this.usn,
      department: this.department,
      userLevel: this.userLevel,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    console.log('Sending JSON:', registerData);

    this.authService.register(registerData).subscribe({
      next: (res) => {
        alert('🎉 User registered successfully!');
        form.reset();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('❌ Registration failed. Check console for details.');
      }
    });
  }
}
