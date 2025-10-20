import { Injectable } from '@angular/core';
import { ResumeData } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  private readonly STORAGE_KEY = 'resume_data';
  private defaultData: ResumeData = {
      personalInfo: {
        name: 'Victor Tran',
        title: 'Software Developer | Integration Engineer | Full-Stack Developer',
        location: 'Ho Chi Minh City, Vietnam',
        email: 'thanhtran193.work@gmail.com',
        phone: '+84 787 694 315',
        linkedin: 'linkedin.com/in/victortranse',
        github: 'github.com/ThanhTNV'
      },
      professionalSummary: 'Versatile and proactive Software Developer with hands-on experience in Integration Systems (Boomi), Low-Code Platforms (OutSystems), and Full-Stack Web Development using Angular, React, Node.js, ASP.NET, and SQL. Proven ability to build and integrate enterprise-grade applications, optimize APIs, and deploy scalable solutions on AWS Cloud. Fluent in English with strong adaptability and cross-cultural communication skills gained through international project experience.',
      skills: [
        'Boomi Integration Platform, OutSystems, API Management',
        'Angular, React, TypeScript, HTML5, CSS3, Responsive Design',
        'Node.js (NestJS, Express), ASP.NET Core, C#, RESTful API, Microservices',
        'SQL Server, PostgreSQL, Entity Framework, Query Optimization',
        'AWS (EC2, S3, Lambda), Docker, CI/CD Pipelines, Git, Jira',
        'Fluent English Communication, Fast Learner, Adaptability, Problem Solving, Team Collaboration'
      ],
      workExperience: [
        {
          jobTitle: 'Associate Developer',
          company: 'FPT Software',
          location: 'Ho Chi Minh City, Vietnam',
          startDate: 'Jan 2023',
          endDate: 'Present',
          responsibilities: [
            'Designed and implemented Boomi integration workflows connecting ERP, CRM, and third-party applications.',
            'Developed scalable .NET Core and Node.js microservices supporting enterprise applications.',
            'Built dynamic front-end components in Angular integrated with REST APIs and auth systems.',
            'Improved API latency and data flow through SQL optimization and caching.',
            'Collaborated with international clients (EU & APAC) to deliver integration and web solutions.',
            'Participated in Agile ceremonies, sprint planning, and code reviews via Jira and Git.'
          ]
        },
        {
          jobTitle: 'Intern Developer',
          company: 'FPT Software',
          location: 'Ho Chi Minh City, Vietnam',
          startDate: 'Jul 2022',
          endDate: 'Dec 2022',
          responsibilities: [
            'Assisted in building OutSystems applications and data workflows with Boomi integrations.',
            'Contributed to API testing, documentation, and deployment tasks.',
            'Gained experience in Agile/Scrum and software delivery best practices.'
          ]
        }
      ],
      education: {
        degree: 'Bachelor of Software Engineering',
        institution: 'FPT University',
        location: 'Ho Chi Minh City, Vietnam',
        graduationYear: 'Expected Graduation: 2026'
      },
      projects: [
        {
          name: 'Cloud MES Platform (GMP/GxP Manufacturers)',
          description: 'Designed and implemented a modular Manufacturing Execution System (MES) aligned with Vietnam GMP/GxP compliance.',
          technologies: ['.NET 9', 'PostgreSQL', 'AWS Cloud'],
          highlights: [
            'Developed back-end modules using .NET 9 and PostgreSQL with secure audit logging and traceability.',
            'Integrated digital signatures, data integrity checks, and role-based access control on AWS Cloud.'
          ]
        },
        {
          name: 'EV Rental & Dealership Management System',
          description: 'Built Dealer Replenishment Flow and Booking/KYC modules with NestJS and Angular 20.',
          technologies: ['NestJS', 'Angular 20', 'Docker'],
          highlights: [
            'Automated background jobs and reporting services using Node.js CronJobs and Docker.',
            'Delivered multi-tenant, scalable architecture supporting real-time vehicle allocation.'
          ]
        }
      ],
      certifications: [
        'Boomi Associate Developer',
        'AWS Certified Cloud Practitioner (in progress)',
        'OutSystems Reactive Developer'
      ],
      languages: [
        { language: 'English', proficiency: 'Fluent (C1 - Professional working proficiency)' },
        { language: 'Vietnamese', proficiency: 'Native' }
      ]
    };

  /**
   * Get resume data from localStorage or return default data
   */
  getResumeData(): ResumeData {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading resume data from localStorage:', error);
    }
    return this.defaultData;
  }

  /**
   * Update resume data and save to localStorage
   */
  updateResumeData(data: ResumeData): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving resume data to localStorage:', error);
    }
  }

  /**
   * Clear saved resume data and return to default
   */
  clearResumeData(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing resume data:', error);
    }
  }

  /**
   * Check if custom data exists
   */
  hasCustomData(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
  }

  /**
   * Reset to default data
   */
  resetToDefault(): void {
    this.clearResumeData();
  }
}

