# Personal Portfolio

A modern, production-quality personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Important Notes

### Resume PDF
The portfolio is configured to link to `/resume.pdf`. You need to:
1. Place your actual resume PDF file in the `public/` folder as `resume.pdf`
2. This file will be automatically included in the production build
3. The "Download Resume" button in the Hero section will then work correctly

### Optional Customization
- **Favicon**: Replace `/vite.svg` in `index.html` with your custom favicon

## Customization

### Colors

The site uses a dark theme with neutral colors. You can customize colors in `tailwind.config.js`.

### Content

Update content in the respective component files:
- Personal info: `Navigation.tsx`, `Hero.tsx`, `Footer.tsx`
- Projects: `Projects.tsx`
- About section: `About.tsx`
- Skills: `Skills.tsx`
- Experience: `Experience.tsx`
- Certifications: `Certifications.tsx`
- Education: `Education.tsx`
- Contact: `Contact.tsx`

## Deployment

This site can be deployed to various platforms:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## License

© 2026 Mohammed Shahul Hameed. All rights reserved.
