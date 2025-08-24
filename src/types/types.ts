import { ReactNode } from 'react';

// Project Types
export interface Project {
  title: string;
  description: string;
  image: string;
  live?: string;
  readme?: string;
}

// Form Data Types
export interface ContactFormData {
  subject: string;
  message: string;
}

// Skill Types
export interface Skill {
  name: string;
  icon: ReactNode;
}

// Navigation Item Types
export interface NavItem {
  title: string;
  path: string;
  icon: ReactNode;
}