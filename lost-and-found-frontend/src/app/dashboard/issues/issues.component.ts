import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../../services/issues.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  imports: [CommonModule],
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issueForm!: FormGroup;
  issues: any[] = [];
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private issuesService: IssuesService
  ) {}

  ngOnInit(): void {
    this.issueForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.loadIssues();
  }

  loadIssues(): void {
    this.issuesService.getAllIssues().subscribe({
      next: (data: any[]) => this.issues = data,
      error: (err: any) => console.error('Error loading issues:', err)
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submitIssue(): void {
    if (!this.issueForm.valid) return;

    const formData = new FormData();
    formData.append('title', this.issueForm.get('title')?.value);
    formData.append('description', this.issueForm.get('description')?.value);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.issuesService.createIssue(formData).subscribe({
      next: () => {
        alert('Issue reported successfully');
        this.issueForm.reset();
        this.selectedFile = null;
        this.loadIssues();
      },
      error: (err: HttpErrorResponse) => {
        console.error('Issue creation failed:', err);
        alert('Something went wrong while reporting the issue.');
      }
    });
  }

  deleteIssue(id: number): void {
    if (!confirm('Are you sure you want to delete this issue?')) return;

    this.issuesService.deleteIssue(id).subscribe({
      next: () => {
        alert('Issue deleted');
        this.loadIssues();
      },
      error: (err: any) => console.error('Delete failed:', err)
    });
  }
}
