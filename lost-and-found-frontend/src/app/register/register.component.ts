import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
selector: 'app-register',
standalone: true,
imports: [FormsModule, HeaderComponent, FooterComponent, CommonModule, MatSnackBarModule],
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {}

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

showSnack(message: string, panelClass: string = 'default-snackbar') {
this.snackBar.open(message, '×', {
duration: 3000,
horizontalPosition: 'right',
verticalPosition: 'bottom',
panelClass: [panelClass]
});
}

onSubmit(form: NgForm) {
if (form.invalid) {
this.showSnack('⚠️ Please fill all required fields!', 'error-snackbar');
return;
}

if (this.password !== this.confirmPassword) {
  this.showSnack('❌ Passwords do not match!', 'error-snackbar');
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
  next: (res: any) => {
    // Show success snackbar
    this.showSnack('✅ Registration successful!', 'success-snackbar');

    form.reset();
    this.router.navigate(['/login']);
  },
  error: (err) => {
    console.error('❌ Registration failed:', err);
    this.showSnack('Registration failed. Check console for details.', 'error-snackbar');
  }
});

}
}
