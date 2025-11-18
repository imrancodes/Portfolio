import { Icons } from "@/components/icons";
import { Contact, HomeIcon, Quote, View } from "lucide-react";
const resumeUrl =
  "https://drive.google.com/file/d/1n4PpkacMVH3-VNWq2c-hKzaQXkb_TXPS/view";
export const DATA = {
  name: "Imran Khan",
  initials: "IK",
  url: "https://www.linkedin.com/in/imran17/",
  location: "Thane, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Thane,+Maharashtra,+India",
  description:
    "Full-Stack Developer | MERN & Next.js | Building fast, scalable, and user-focused web solutions.",
  summary:
    "I’m a passionate Full-Stack Developer skilled in React, Next.js, Node.js and MongoDB. I focus on building fast, scalable, and user-friendly web applications with clean architecture and modern design. I enjoy turning ideas into real-world products that deliver seamless user experiences and strong performance.",
  avatarUrl: "/profile-pic.png",

  resume: {
    url: resumeUrl,
    downloadText: "Download Resume",
  },

  skills: [
    // Frontend
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Responsive Design",

    // Languages
    "Python",

    // State Management & APIs
    "Redux Toolkit",
    "React Query",
    "Context API",
    "REST APIs",
    "Axios",
    "TanStack Query",

    // Backend & AI Systems
    "Node.js",
    "Express.js",
    "Socket.io",
    "JWT Authentication",
    "OAuth 2.0",

    // Database & Storage
    "MongoDB",
    "Mongoose",
    "Firebase",
    "Appwrite",

    // Tooling & Build
    "Git",
    "GitHub",
    "Vite",
    "ESLint",
    "Prettier",
    "npm/yarn",
    "Cursor IDE",
    "Vs code",
    "PyCharm",

    // Deployment
    "Vercel",
    "Render",
    "Netlify",

    // Design & Performance
    "Figma",
    "Performance Optimization",
    "SEO",
    "Accessibility",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "imrankhanshakeel012@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/imrancodes",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imran17/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:imrankhanshakeel012@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: resumeUrl,
        icon: Icons.download,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Medos",
      href: "https://medos.one",
      location: "Delhi, India",
      title: "Frontend Developer (Intern)",
      logoUrl: "/medos.jpeg",
      start: "Jun 2025",
      end: "Sep 2025",
      description:
        "Worked on building a medical platform, creating responsive and user-friendly features using React, TypeScript, and TailwindCSS. Collaborated closely with backend engineers and designers to deliver smooth user experiences, while learning to ship clean, scalable code under deadlines.",
    },
    {
      company: "Prodigy InfoTech",
      href: "https://prodigyinfotech.dev/",
      location: "Mumbai, India",
      title: "Web Developer (Intern)",
      logoUrl: "/prodigy_infotech_logo.jpeg",
      start: "May 2025",
      end: "Jun 2025",
      description: ""
    },
  ],

  education: [
    {
      school: "Somaiya Vidyavihar University",
      href: "https://www.somaiya.edu/en",
      degree: "M.Sc. in Information Technology (AI & ML)",
      logoUrl:
        "https://www.somaiya.edu/assets/university/img/homepage/university-logo.svg",
      start: "Jul 2024",
      end: "Jul 2026",
    },
    {
      school: "Jnan Vikas Mandal's Mehta Degree College",
      href: "https://www.jnanvikasmandal.com/",
      degree: "B.Sc. in Information Technology",
      logoUrl: "/jvm.avif",
      start: "Sep 2020",
      end: "May 2023",
    },
  ],

  projects: [
    {
      title: "Medos - Complete Healthcare Appointment Management",
      href: "https://dev.medos.one/dashboard",
      active: true,
      category: "Professional",
      description:
        "Contributed to building a scalable medical platform offering comprehensive tools for doctors, including patient management, appointment scheduling, e-prescriptions, and integrated website builder for clinics. Focused on performance, modular architecture, and security best practices. Improved app optimization by reducing unnecessary API calls, implementing efficient caching, and designing reusable components to support future feature expansion with minimal refactoring.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "React Query"],
      dates: "2025 - 2025",
      image: "/professional-work/medos.png",
      links: [
        {
          type: "Website",
          href: "https://dev.medos.one/dashboard",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Medos Landing & Marketing Pages",
      href: "https://medos.one",
      active: true,
      category: "Professional",
      description:
        "Designed and developed high-conversion landing and marketing pages for Medos. Implemented responsive layouts, optimized for SEO and performance, with engaging animations and clear CTAs to drive lead generation.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "SEO",
        "Performance Optimization",
      ],
      dates: "2025 - 2025",
      image: "/professional-work/medos-landing-page.png",
      links: [
        {
          type: "Website",
          href: "https://medos.one",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Codeflow - AI-powered Real-Time Collaborative Code Editor",
      href: "https://codeflow-app.onrender.com",
      active: true,
      category: "Personal", // or "Side Project"
      description:
        "Full-stack collaborative coding platform built with MERN. Supports real-time multi-user editing, 8-language execution with input, JWT-based authentication, and WebSocket-powered live updates. Designed for minimal latency, clean UI, and performance-focused execution using a secure sandbox environment.",
      technologies: [
        "React",
        "Node",
        "Express",
        "TypeScript",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Tailwind CSS",
        "React Query",
        "Zod",
        "React Router",
      ],
      dates: "2025",
      image: "/personal-work/codeflow.png",
      links: [
        {
          type: "Website",
          href: "https://codeflow-app.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/imrancodes/codeflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Linkstack - Personal link-sharing platform ",
      href: "https://link-stack-chi.vercel.app",
      active: true,
      category: "Personal",
      description:
        "LinkStack is a clean, customizable link-sharing platform similar to Linktree, where users can create a personal profile with their image, name, email, and social links. It supports instant link previews, easy profile editing, and generates a unique shareable page that works across devices and platforms.",
      technologies: [
        "React",
        "Redux toolkit",
        "Firebase",
        "Tailwind CSS",
        "React Router",
      ],
      dates: "2025",
      image: "/personal-work/linkstack.png",
      stats: {
        stars: 15,
        forks: 4,
        watchers: 1,
      },
      links: [
        {
          type: "Website",
          href: "https://link-stack-chi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/imrancodes/LinkStack",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],

  hackathons: [],
} as const;
