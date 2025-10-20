import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeDataService } from '../../services/resume-data.service';
import { ResumeData } from '../../models/resume.model';

@Component({
  selector: 'app-cv-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cv-form.component.html',
  styleUrl: './cv-form.component.scss'
})
export class CvFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private resumeDataService = inject(ResumeDataService);

  cvForm!: FormGroup;
  isSubmitting = false;

  ngOnInit(): void {
    this.initializeForm();
    this.loadExistingData();
  }

  private initializeForm(): void {
    this.cvForm = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', Validators.required],
        title: ['', Validators.required],
        location: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        linkedin: [''],
        github: ['']
      }),
      professionalSummary: ['', [Validators.required, Validators.minLength(50)]],
      skills: this.fb.array([]),
      workExperience: this.fb.array([]),
      education: this.fb.group({
        degree: ['', Validators.required],
        institution: ['', Validators.required],
        location: ['', Validators.required],
        graduationYear: ['', Validators.required]
      }),
      projects: this.fb.array([]),
      certifications: this.fb.array([]),
      languages: this.fb.array([])
    });
  }

  private loadExistingData(): void {
    const existingData = this.resumeDataService.getResumeData();
    
    // Load personal info
    this.cvForm.patchValue({
      personalInfo: existingData.personalInfo,
      professionalSummary: existingData.professionalSummary,
      education: existingData.education
    });

    // Load skills
    existingData.skills.forEach(skill => this.addSkill(skill));

    // Load work experience
    existingData.workExperience.forEach(exp => this.addWorkExperience(exp));

    // Load projects
    existingData.projects.forEach(project => this.addProject(project));

    // Load certifications
    existingData.certifications.forEach(cert => this.addCertification(cert));

    // Load languages
    existingData.languages.forEach(lang => this.addLanguage(lang));
  }

  // Skills Array Methods
  get skills(): FormArray {
    return this.cvForm.get('skills') as FormArray;
  }

  addSkill(value: string = ''): void {
    this.skills.push(this.fb.control(value, Validators.required));
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  // Work Experience Array Methods
  get workExperience(): FormArray {
    return this.cvForm.get('workExperience') as FormArray;
  }

  addWorkExperience(data?: any): void {
    const experienceGroup = this.fb.group({
      jobTitle: [data?.jobTitle || '', Validators.required],
      company: [data?.company || '', Validators.required],
      location: [data?.location || '', Validators.required],
      startDate: [data?.startDate || '', Validators.required],
      endDate: [data?.endDate || '', Validators.required],
      responsibilities: this.fb.array(data?.responsibilities?.map((r: string) => this.fb.control(r)) || [])
    });
    this.workExperience.push(experienceGroup);
  }

  removeWorkExperience(index: number): void {
    this.workExperience.removeAt(index);
  }

  getResponsibilities(expIndex: number): FormArray {
    return this.workExperience.at(expIndex).get('responsibilities') as FormArray;
  }

  addResponsibility(expIndex: number, value: string = ''): void {
    this.getResponsibilities(expIndex).push(this.fb.control(value, Validators.required));
  }

  removeResponsibility(expIndex: number, respIndex: number): void {
    this.getResponsibilities(expIndex).removeAt(respIndex);
  }

  // Projects Array Methods
  get projects(): FormArray {
    return this.cvForm.get('projects') as FormArray;
  }

  addProject(data?: any): void {
    const projectGroup = this.fb.group({
      name: [data?.name || '', Validators.required],
      description: [data?.description || '', Validators.required],
      technologies: this.fb.array(data?.technologies?.map((t: string) => this.fb.control(t)) || []),
      highlights: this.fb.array(data?.highlights?.map((h: string) => this.fb.control(h)) || [])
    });
    this.projects.push(projectGroup);
  }

  removeProject(index: number): void {
    this.projects.removeAt(index);
  }

  getTechnologies(projectIndex: number): FormArray {
    return this.projects.at(projectIndex).get('technologies') as FormArray;
  }

  addTechnology(projectIndex: number, value: string = ''): void {
    this.getTechnologies(projectIndex).push(this.fb.control(value, Validators.required));
  }

  removeTechnology(projectIndex: number, techIndex: number): void {
    this.getTechnologies(projectIndex).removeAt(techIndex);
  }

  getHighlights(projectIndex: number): FormArray {
    return this.projects.at(projectIndex).get('highlights') as FormArray;
  }

  addHighlight(projectIndex: number, value: string = ''): void {
    this.getHighlights(projectIndex).push(this.fb.control(value, Validators.required));
  }

  removeHighlight(projectIndex: number, highlightIndex: number): void {
    this.getHighlights(projectIndex).removeAt(highlightIndex);
  }

  // Certifications Array Methods
  get certifications(): FormArray {
    return this.cvForm.get('certifications') as FormArray;
  }

  addCertification(value: string = ''): void {
    this.certifications.push(this.fb.control(value, Validators.required));
  }

  removeCertification(index: number): void {
    this.certifications.removeAt(index);
  }

  // Languages Array Methods
  get languages(): FormArray {
    return this.cvForm.get('languages') as FormArray;
  }

  addLanguage(data?: any): void {
    const languageGroup = this.fb.group({
      language: [data?.language || '', Validators.required],
      proficiency: [data?.proficiency || '', Validators.required]
    });
    this.languages.push(languageGroup);
  }

  removeLanguage(index: number): void {
    this.languages.removeAt(index);
  }

  // Form Submission
  onSubmit(): void {
    if (this.cvForm.valid) {
      this.isSubmitting = true;
      const formData: ResumeData = this.cvForm.value;
      
      // Save to service
      this.resumeDataService.updateResumeData(formData);
      
      // Navigate to preview
      setTimeout(() => {
        this.isSubmitting = false;
        this.router.navigate(['/preview']);
      }, 500);
    } else {
      this.markFormGroupTouched(this.cvForm);
      alert('Please fill in all required fields correctly.');
    }
  }

  previewResume(): void {
    if (this.cvForm.valid) {
      const formData: ResumeData = this.cvForm.value;
      this.resumeDataService.updateResumeData(formData);
      this.router.navigate(['/preview']);
    } else {
      alert('Please fill in all required fields before previewing.');
    }
  }

  resetForm(): void {
    if (confirm('Are you sure you want to reset the form? All unsaved changes will be lost.')) {
      this.cvForm.reset();
      this.clearAllArrays();
      this.loadExistingData();
    }
  }

  private clearAllArrays(): void {
    this.skills.clear();
    this.workExperience.clear();
    this.projects.clear();
    this.certifications.clear();
    this.languages.clear();
  }

  private markFormGroupTouched(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Validation helpers
  isFieldInvalid(fieldPath: string): boolean {
    const field = this.cvForm.get(fieldPath);
    return !!(field && field.invalid && field.touched);
  }

  getErrorMessage(fieldPath: string): string {
    const field = this.cvForm.get(fieldPath);
    if (field?.hasError('required')) return 'This field is required';
    if (field?.hasError('email')) return 'Please enter a valid email';
    if (field?.hasError('minlength')) return 'Text is too short';
    return '';
  }
}

