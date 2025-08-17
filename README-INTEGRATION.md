# 🌐 Gallery Portfolio with Launch Page Integration

## Overview

This is an enhanced version of the portfolio gallery that integrates a modernized launch page as a bridge between legacy undergraduate/graduate websites and the new interactive portfolio gallery.

## 🚀 Features

### Launch Page (Entry Point)
- **Animated Profile Toggle**: 5-image sequence with custom animations
  - Y-axis coin flip animations for standard transitions
  - X-axis bounce effects for special images
  - Rainbow glow effects on R0RY__Subject.png
- **Navigation Bar**: Links to all legacy project pages
  - Spinning profile images (Rory CCW, Remy CW)
  - Quick access to undergraduate projects
- **Bridge Functionality**: Seamlessly connects old and new portfolio sites

### Live Portfolio Gallery
- **26+ Projects** across 7 categories:
  - Comprehensive (4): Main websites and documentation
  - Interactive (4): Creative visualizations and demos
  - Professional (2): Resume and featured projects
  - Foundation (2): Undergraduate work and theory
  - Hardware (4): FPGA, IoT, and VLSI projects
  - Software (4): ML/AI implementations
  - GitHub (4): Open source repositories
- **Live Previews**: Iframe-based project previews
- **Responsive Design**: Mobile-friendly layout
- **Category Filtering**: Easy project navigation

## 🗺️ URL Mapping & Structure

### Entry Points
- **Launch Page**: `/` (default entry)
- **Direct Gallery**: `/?gallery=true` (skip launch page)

### Legacy Sites (Undergraduate/Graduate)
- **Foundation Site**: https://www.r0ry.com
  - Neural Network Theory
  - Early projects
  - Class notes
  
- **Graduate Portfolio**: https://rlr-github.github.io
  - CV & ML applications
  - Research projects

### New Portfolio Hub
- **Main Professional Site**: https://www.rodericklrenwick.com
- **Live Gallery**: https://gallery--rlr-github.github.app (this project)

## 📁 Project Structure

```
gallery-integration/
├── src/
│   ├── App.tsx                    # Main app with launch page integration
│   ├── components/
│   │   ├── LaunchPage.tsx         # Animated launch page component
│   │   └── ui/                    # Shared UI components
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── public/
│   └── images/                    # Profile images for animations
│       ├── R0RY__Subject.png
│       ├── r_black.jpg
│       ├── REMY_MAD.jpg
│       └── meanimated.jpg
└── package.json                   # Dependencies and scripts
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rlr-github/gallery.git
   cd gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:5173

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Bypass Launch Page
To skip the launch page and go directly to the gallery:
- Add `?gallery=true` to the URL
- Or modify `App.tsx`: `const [showLaunchPage, setShowLaunchPage] = useState(false);`

### Customize Profile Images
Edit the `profileImages` array in `LaunchPage.tsx`:
```typescript
const profileImages: ProfileImage[] = [
  { src: '/images/your-image.png', alt: 'Description' },
  // Add more images...
];
```

## 🌟 Key Components

### LaunchPage Component
- Manages profile image animations
- Handles navigation to legacy sites
- Provides smooth transition to gallery

### Gallery App
- Project card grid with live previews
- Category filtering system
- Responsive layout with glass morphism effects

## 📊 Project Categories

| Category | Count | Description |
|----------|-------|-------------|
| Comprehensive | 4 | Main websites and navigation hubs |
| Interactive | 4 | Creative visualizations and demos |
| Professional | 2 | Resume and featured work |
| Foundation | 2 | Undergraduate projects |
| Hardware | 4 | FPGA, IoT, VLSI designs |
| Software | 4 | ML/AI implementations |
| GitHub | 4 | Open source repositories |

## 🔗 Important Links

- **Live Demo**: https://gallery--rlr-github.github.app
- **GitHub Repo**: https://github.com/rlr-github/gallery
- **Main Portfolio**: https://www.rodericklrenwick.com
- **Legacy Site**: https://www.r0ry.com

## 🚀 Deployment

The project is configured for deployment on GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   git add dist
   git commit -m "Build for deployment"
   git push origin launch-page-integration
   ```

## 📝 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- Built with React, TypeScript, and Vite
- UI components from Radix UI
- Styling with Tailwind CSS
- Icons from Phosphor Icons

---

**Note**: This integration serves as a bridge between the legacy undergraduate/graduate websites and the modern portfolio gallery, preserving the historical context while showcasing current work in an interactive format.
