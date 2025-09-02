# Darkom - Luxury Construction & Design Website

A modern, responsive website for Darkom Construction & Consulting, built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and TailwindCSS
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Security**: Input sanitization, form validation, and XSS protection
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient code splitting
- **Cross-Browser**: Compatible with latest Chrome, Safari, Edge, and Firefox

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Custom form handling with validation
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx          # Homepage
│   ├── about/            # About page
│   ├── team/             # Team page
│   ├── services/         # Services page
│   ├── contact/          # Contact page
│   └── booking/          # Booking page
├── components/            # Reusable React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── IntroGallery.tsx  # Gallery section
│   ├── Services.tsx      # Services section
│   ├── ProjectsGallery.tsx # Projects section
│   └── Footer.tsx        # Footer component
├── lib/                   # Utility functions
│   └── utils.ts          # Common utilities
└── styles/                # Global styles
    └── globals.css       # TailwindCSS and custom styles
```

## 🎨 Design System

### Colors
- **Primary Gold**: #c49e57 (luxury accent)
- **Dark**: #0a0a0a (main background)
- **Dark Gray**: #111111 (secondary background)
- **Cream**: #f8e9c0 (text color)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Open Sans (sans-serif)

### Components
- Custom button variants (primary, secondary, ghost, gold)
- Responsive grid layouts
- Smooth hover effects and transitions
- Consistent spacing and sizing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd darkom-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Homepage (`/`)
- Hero section with video background
- Introduction gallery
- Services overview
- Projects showcase
- Call-to-action sections

### About (`/about`)
- Company story and values
- Team introduction
- Company achievements

### Team (`/team`)
- Team member profiles
- Expertise and experience
- Professional backgrounds

### Services (`/services`)
- Comprehensive service offerings
- Design process explanation
- Service features and benefits

### Contact (`/contact`)
- Contact information
- Contact form with validation
- Office location and hours

### Booking (`/booking`)
- Consultation booking form
- Project details collection
- Scheduling preferences

## 🔒 Security Features

- **Input Sanitization**: All form inputs are sanitized to prevent XSS
- **Form Validation**: Client-side validation with error handling
- **CSRF Protection**: Form submission protection
- **Secure Headers**: Security headers configured in Next.js

## ♿ Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Semantic HTML**: Meaningful HTML structure
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Proper focus handling
- **Color Contrast**: WCAG compliant color combinations

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: TailwindCSS responsive breakpoints
- **Touch Friendly**: Optimized for touch interactions
- **Flexible Layouts**: Adaptive grid systems

## 🎭 Animations

- **Page Transitions**: Smooth page-to-page navigation
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive hover states
- **Loading States**: Smooth loading animations

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Optimization**: Efficient bundling and tree shaking
- **Caching**: Static generation and caching strategies

## 🌐 Browser Support

- Chrome (latest)
- Safari (latest)
- Edge (latest)
- Firefox (latest)

## 📝 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Import and use existing components
4. Update navigation in `Header.tsx`

### Modifying Styles
1. Update `src/styles/globals.css` for global styles
2. Modify `tailwind.config.js` for design system changes
3. Use TailwindCSS classes in components

### Adding New Components
1. Create component in `src/components/`
2. Export as default
3. Import and use in pages

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-deploy on push
3. Configure environment variables if needed

### Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Other Platforms
- Build the project: `npm run build`
- Deploy the `.next` folder
- Configure as a Node.js application

## 📞 Support

For support or questions about this project, please contact:
- **Email**: info@darkoum.com
- **Phone**: +965 5044 3637

## 📄 License

This project is proprietary software owned by Darkom Construction & Consulting.

## 🔄 Updates

This project is actively maintained and updated with:
- Security patches
- Performance improvements
- New features and components
- Bug fixes and optimizations

---

**Built with ❤️ by the Darkom Development Team**
