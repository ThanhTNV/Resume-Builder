export interface ResumeData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  skills: string[];
  workExperience: WorkExperience[];
  education: Education;
  projects: Project[];
  certifications: string[];
  languages: Language[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface WorkExperience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Language {
  language: string;
  proficiency: string;
}

