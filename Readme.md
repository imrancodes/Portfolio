# Imran Khan - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases professional work, personal projects, skills, and experience in a clean, animated interface.

## 🚀 Features

- **Modern Design**: Clean, responsive layout with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Interactive Animations**: Framer Motion powered blur-fade effects
- **Project Showcase**: Separate sections for professional and personal work
- **Blog Integration**: MDX support for blog posts
- **Contact Section**: Easy ways to get in touch
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **MDX** - Markdown with JSX support
- **React Markdown** - Markdown rendering

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── magicui/          # Custom UI components
│   ├── ui/               # Base UI components
│   └── *.tsx             # Feature components
├── data/                 # Static data
│   └── resume.tsx        # Portfolio data
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/farhanmansurii/farhan-mansuri-portfolio.git
   cd farhan-mansuri-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Personal Information

Update your personal information in `src/data/resume.tsx`:

```typescript
export const DATA = {
  name: 'Your Name',
  initials: 'YN',
  description: 'Your professional description',
  summary: 'Your detailed summary',
  avatarUrl: '/your-photo.webp',
  // ... other fields
}
```

### Projects

Add your projects in the `projects` array within `DATA`:

```typescript
projects: [
  {
    title: 'Project Name',
    description: 'Project description',
    category: 'Professional', // or 'Personal'
    technologies: ['React', 'TypeScript'],
    dates: '2024',
    href: 'https://project-url.com',
    links: [
      {
        icon: <Icons.GitHub className="h-4 w-4" />,
        type: 'GitHub',
        href: 'https://github.com/username/repo'
      }
    ]
  }
]
```

### Skills

Update the skills array with your technologies:

```typescript
skills: [
  'React',
  'Next.js',
  'TypeScript',
  // ... add your skills
]
```

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

- **Colors**: Defined in `tailwind.config.ts`
- **Animations**: Custom animations with Framer Motion
- **Typography**: Tailwind Typography plugin for prose styling
- **Dark Mode**: Built-in theme switching

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Farhan Mansuri**
- Email: [imrankhanshakeel012@gmail.com](mailto:imrankhanshakeel012@gmail.com])
- LinkedIn: [linkedin.com/in/imran17/](https://www.linkedin.com/in/imran17/)
- Location: Thane, Maharashtra, India

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS