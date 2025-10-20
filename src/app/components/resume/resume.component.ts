import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ResumeData } from '../../models/resume.model';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  private resumeDataService = inject(ResumeDataService);
  private router = inject(Router);
  resumeData!: ResumeData;

  ngOnInit(): void {
    this.resumeData = this.resumeDataService.getResumeData();
  }

  /**
   * Triggers the browser's print dialog for PDF export
   * The user can then select "Save as PDF" as the destination
   */
  saveAsPDF(): void {
    window.print();
  }

  /**
   * Downloads the resume with a formatted filename
   * Uses the native print API with automatic PDF naming
   */
  downloadPDF(): void {
    const fileName = this.generateFileName();
    // Set document title temporarily for PDF filename
    const originalTitle = document.title;
    document.title = fileName;
    
    // Trigger print dialog
    window.print();
    
    // Restore original title after a brief delay
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  }

  /**
   * Generates a professional filename for the PDF
   * Format: FirstName_LastName_Resume.pdf
   */
  private generateFileName(): string {
    const name = this.resumeData.personalInfo.name.replace(/\s+/g, '_');
    return `${name}_Resume`;
  }

  /**
   * Navigate back to form editor
   */
  goToForm(): void {
    this.router.navigate(['/form']);
  }
}

