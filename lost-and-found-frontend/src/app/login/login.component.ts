import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login.component',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}
  usn='';
  password='';
onSubmit(form: any) {
    console.log('Form submitted:', form.value);
    alert('🎉 User logged in successfully!');
    this.router.navigate(['/dashboard']);
  }
}
