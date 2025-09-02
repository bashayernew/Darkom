# Darkom Website Setup Guide

This guide will help you set up and run the refactored Darkom website locally.

## 🚀 Quick Start

### Option 1: Using the Install Scripts (Windows)

1. **Double-click** `install-dependencies.bat` (Command Prompt) or `install-dependencies.ps1` (PowerShell)
2. Follow the prompts
3. Run `npm run dev` to start the development server

### Option 2: Manual Installation

1. **Install Node.js** (if not already installed)
   - Download from [https://nodejs.org/](https://nodejs.org/)
   - Choose LTS version (recommended)

2. **Open Terminal/Command Prompt**
   - Navigate to the project directory
   - Run: `npm install`

3. **Start Development Server**
   - Run: `npm run dev`
   - Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

The refactored project now uses a modern Next.js structure:

```
src/
├── app/                    # Pages (Next.js App Router)
├── components/            # Reusable components
├── lib/                   # Utility functions
└── styles/                # Global styles
```

## 🎨 What's New

### ✅ Modern Tech Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for animations

### ✅ Enhanced Features
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Beautiful page transitions
- **Form Validation** - Secure contact forms
- **Performance Optimized** - Fast loading times

### ✅ Security & Accessibility
- **Input Sanitization** - Prevents XSS attacks
- **ARIA Labels** - Screen reader friendly
- **Keyboard Navigation** - Full keyboard support
- **Semantic HTML** - Better SEO and accessibility

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages Available

- **Home** (`/`) - Main landing page
- **About** (`/about`) - Company information
- **Team** (`/team`) - Team members
- **Services** (`/services`) - Service offerings
- **Contact** (`/contact`) - Contact form
- **Booking** (`/booking`) - Consultation booking

## 🎯 Next Steps

1. **Customize Content** - Update text, images, and information
2. **Add Your Logo** - Replace placeholder logo in `/public/images/`
3. **Configure Forms** - Set up form submission endpoints
4. **Deploy** - Deploy to Vercel, Netlify, or your preferred hosting

## 🆘 Troubleshooting

### Node.js Not Found
- Install Node.js from [https://nodejs.org/](https://nodejs.org/)
- Restart your terminal/command prompt

### Dependencies Installation Failed
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

### Port Already in Use
- Change port: `npm run dev -- -p 3001`
- Or kill the process using port 3000

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure Node.js version is 18 or higher
3. Contact the development team

---

**Happy coding! 🎉**
