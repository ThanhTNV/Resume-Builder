import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadComponent: () => import('./components/cv-form/cv-form.component').then(m => m.CvFormComponent)
  },
  {
    path: 'preview',
    loadComponent: () => import('./components/resume/resume.component').then(m => m.ResumeComponent)
  }
];
