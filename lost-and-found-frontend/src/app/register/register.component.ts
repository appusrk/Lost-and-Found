import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  studentNumber = '';
  Department = '';
  userLevel = '';
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';

  onSubmit(form: any) {
    console.log('Form submitted:', form.value);
    alert('🎉 User created successfully!');
  }
}
