import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-login.component',
  imports: [FormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  studentnumber='';
  password='';
onSubmit(form: any) {
    console.log('Form submitted:', form.value);
    alert('🎉 User logged in successfully!');
  }
}
