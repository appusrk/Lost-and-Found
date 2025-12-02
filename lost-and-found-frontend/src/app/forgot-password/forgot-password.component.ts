
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
selector: 'app-forgot-password',
standalone: true,
imports: [FormsModule, CommonModule, MatSnackBarModule],
templateUrl: './forgot-password.component.html',
styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

emailOrUsn = '';
showOtpForm = false; // Step 2 flag
otp = '';
newPassword = '';
confirmPassword = '';

constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}
verifyOtpAndResetPassword(form: NgForm) {
  if (form.invalid) {
    this.showSnack(' Please fill all fields!', 'error-snackbar');
    return;
  }

  if (this.newPassword !== this.confirmPassword) {
    this.showSnack('Passwords do not match!', 'error-snackbar');
    return;
  }

  const payload = {
    emailOrUsn: this.emailOrUsn,
    otp: this.otp,
    newPassword: this.newPassword
  };

  this.authService.verifyOtpAndResetPassword(payload).subscribe({
    next: (res: any) => {
      this.showSnack('✅ Password reset successful!', 'success-snackbar');
      form.reset();
      this.showOtpForm = false;
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.error(' OTP verification failed:', err);
      this.showSnack('OTP invalid or expired. Try again.', 'error-snackbar');
    }
  });
}


showSnack(message: string, panelClass: string = 'default-snackbar') {
this.snackBar.open(message, '×', {
duration: 3000,
horizontalPosition: 'center',
verticalPosition: 'bottom',
panelClass: [panelClass]
});
}

sendOtp(form: NgForm) {
if (form.invalid) {
this.showSnack('⚠️ Please enter your email or USN!', 'error-snackbar');
return;
}


this.authService.sendOtp({ emailOrUsn: this.emailOrUsn }).subscribe({
  next: (res: any) => {
    this.showSnack('✅ OTP sent! Check your email.', 'success-snackbar');
    this.showOtpForm = true; // Show OTP + password form
  },
  error: (err) => {
    console.error(' Error sending OTP:', err);
    this.showSnack('Failed to send OTP. Check email', 'error-snackbar');
  }
});

}
cancel() {
  this.router.navigate(['/login']);

}
}

