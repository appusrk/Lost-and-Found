import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) {}
  name = '';
  usn = '';
  department = '';
  userLevel = '';
  email = '';
  password = '';
  confirmPassword = '';

  onSubmit(form: any) {
    if (form.invalid) {
      alert('⚠️ Please fill all required fields correctly!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('❌ Passwords do not match!');
      return;
    }

    console.log('Form submitted:', form.value);
    alert('🎉 User created successfully!');
    form.reset();
    this.router.navigate(['/login']);
  }
}
