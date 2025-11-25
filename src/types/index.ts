export interface Education {
  school: string;
  program: string;
  gpa?: string;
  period: string;
  details: string[];
}

export interface Experience {
  company: string;
  role: string;
  details: string[];
}

export interface Project {
  name: string;
  tagline: string;
  details: string;
  tech: string[];
}

export interface ProfileLinks {
  github: string;
  linkedin: string;
  vercel: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  links: ProfileLinks;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  achievements: string[];
}

export interface MousePosition {
  x: number;
  y: number;
}

export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

