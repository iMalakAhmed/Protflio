import { Profile } from "../types";

export const profile: Profile = {
  name: "Malak Shams",
  title: "Computer Science Student & Aspiring Full-Stack Developer",
  location: "Cairo, Egypt",
  email: "malaksh2023@outlook.com",
  phone: "+20 1097805772",
  links: {
    github: "https://github.com/iMalakAhmed",
    linkedin: "https://www.linkedin.com/in/malak-shams-373a6329b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    vercel: "https://vercel.com",
  },
  education: [
    {
      school: "Nile University",
      program: "BSc Computer Science",
      period: "Oct 2022 – Aug 2026",
      details: [
        "Operating Systems, OOP, Data Structures & Algorithms, Databases, Computer Architecture, Data Analysis, Machine Learning.",
      ],
    },
    {
      school: "ALX - African Leadership Foundation",
      program: "Data Science Course",
      period: "Feb 2023 – Jun 2024",
      details: [
        "Excel, PowerBi, Data Visualization, Data Preprocessing & Manipulation, SQL, DAX, Python, NLP, Image Processing & Recognition.",
      ],
    },
  ],
  experience: [
    {
      company: "Maak",
      role: ".NET Intern",
      details: [
        "Collaborated on web applications using .NET Core, C#, and SQL Server.",
        "Participated in Agile sprints and full-stack development tasks.",
      ],
    },
    {
      company: "Vodafone",
      role: "Tech Intern",
      details: [
        "Helped automate Arabic/English content tagging and safety checks using a small BERT model.",
        "Built a summarizer + keyword tool to create quick briefs for editors.",
      ],
    },
  ],
  projects: [
    {
      name: "Taqyim",
      tagline: "Location-aware social review app",
      details:
        "Discover, rate, and review local businesses. Built with a .NET Core API and a Next.js front-end, featuring real-time notifications, user connections, and interactive maps.",
      tech: [".NET Core", "Next.js", "SQL Server", "React", "Leaflet"],
    },
    {
      name: "Pet Adopting System",
      tagline: "UGRF 1st place project",
      details:
        "A .NET Core system to streamline the pet adoption process for animal shelters.",
      tech: [".NET Core", "C#", "SQL Server"],
    },
    {
      name: "Hospital Management System",
      tagline: "Full-stack Django system",
      details:
        "End-to-end hospital management platform built with Django; participated in UGRF award for best research.",
      tech: ["Django", "Python", "PostgreSQL"],
    },
    {
      name: "Regional Electricity & Internet Usage Analysis (Nigeria)",
      tagline: "Data Analysis & Visualization",
      details:
        "Analyzed disparities across Kano, Abuja, and Lagos using satellite imagery, performance metrics, and visualizations.",
      tech: ["Python", "Pandas", "Data Visualization"],
    },
  ],
  achievements: [
    "ECPC – Competed twice in algorithmic problem-solving contests.",
    "Dean's Honor – Recognized for outstanding academic performance.",
    "UGRF 1st place Award for Database Project.",
    "NU ICPC – Head of Marketing, leading campaigns and partnerships.",
  ],
};

