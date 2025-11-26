import { SidebarComponent } from '../sidebar/sidebar.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [FormsModule, CommonModule, SidebarComponent],
  templateUrl: './issuesform.component.html',
  styleUrls: ['./issuesform.component.css']
})
export class IssuesformComponent {
  constructor(private router: Router) {}
  showOther =false;
  dept = '';
  location = '';
  contact = '';
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  issueDept: string | null = null;

  other: any;
  issueLocation: any

  
  onSubmit(form: any) {
    if (form.invalid) {
      alert('⚠️ Please fill all required fields correctly!');
      return;
    }

    Swal.fire({
        title: "✅ Report Submitted!",
        text: "We will try to get it resolved soon 🤝✨",
        icon: "success",
        confirmButtonText: "Okay",
        backdrop: true
      });
    form.reset();
    this.router.navigate(['/dashboard']);
  }
  onDeptChange() {
    if(this.issueDept === 'other')
    this.showOther = true;
  else{
    this.showOther = false;
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
