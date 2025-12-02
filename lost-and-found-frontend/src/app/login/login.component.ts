import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
selector: 'app-login',
standalone: true,
imports: [FormsModule, CommonModule, MatSnackBarModule],
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {

usn = '';
password = '';

constructor(
private authService: AuthService,
private router: Router,
private snackBar: MatSnackBar
) {}

showSnack(message: string, panelClass: string = 'default-snackbar') {
this.snackBar.open(message, 'X', {
duration: 3000,
horizontalPosition: 'right',
verticalPosition: 'bottom',
panelClass: [panelClass]
});
}

onSubmit(form: any) {
if (form.invalid) {
this.showSnack("Please fill all fields.", "error-snackbar");
return;
}


const loginData = { usn: this.usn, password: this.password };

this.authService.login(loginData).subscribe({
  next: (res) => {
    console.log("Login Response:", res);

    if (res.status === "success") {
      this.showSnack("Login successful!", "success-snackbar");

      const userObj = {
        usn: res.usn,
        name: res.name,
        userLevel: res.userLevel,
        email: res.email,
        department: res.department
      };
      localStorage.setItem("user", JSON.stringify(userObj));

      this.router.navigate(['/dashboard']);
    } else {
      this.showSnack("Invalid login.", "error-snackbar");
    }
  },
  error: (err) => {
    console.log("Login error:", err);
    this.showSnack(
      err.error?.message || "Wrong USN or password",
      "error-snackbar"
    );
  }
});

}

onForgotPassword(event: Event) {
event.preventDefault();
console.log("Forgot Password clicked");
this.router.navigate(['/forgotpassword']);
}

onSignup(event: Event) {
event.preventDefault();
console.log("Sign Up clicked");
this.router.navigate(['/signup']);
}
}
