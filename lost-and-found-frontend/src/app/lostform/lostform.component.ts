import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lostform', 
  standalone: true,
  imports: [FormsModule, CommonModule, SidebarComponent],
  templateUrl: './lostform.component.html',
  styleUrls: ['./lostform.component.css']
})
export class LostComponent {
  constructor(private router: Router) {}
  itemname = '';
  description = '';
  location = '';
  contact = '';
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  onSubmit(form: any) {
    if (form.invalid) {
      alert('⚠️ Please fill all required fields correctly!');
      return;
    }

    Swal.fire({
        title: "✅ Report Submitted!",
        text: "We’ll help you find it real soon 🤝✨",
        icon: "success",
        confirmButtonText: "Okay",
        backdrop: true
      });
    form.reset();
    this.router.navigate(['/dashboard']);
  }
  allowOnlyPlusAndNumbers(event: KeyboardEvent) {
  const char = String.fromCharCode(event.charCode);
  // Allow digits (0-9) and '+' only if it's the first character
  if (!(/[0-9]/.test(char) || (char === '+' && (event.target as HTMLInputElement).selectionStart === 0))) {
    event.preventDefault();
  }
}

  onFileSelected(event: any): void {
  const file = event.target.files[0];
  if (file) {
    // save the selected file
    this.selectedFile = file;

    // for image preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

}
