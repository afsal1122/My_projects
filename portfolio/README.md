# Neo-Tech AI Portfolio

A futuristic, sci-fi inspired React portfolio with dark/light themes, 3D avatar, and neon aesthetics.

## Features

- ✨ Futuristic UI with neon accents and glassmorphism
- 🌙 Dark/light mode with system preference detection
- 🔊 Sound effects with mute toggle
- 👤 3D avatar (Spline embed or Three.js fallback)
- 🎨 Animated components with Framer Motion
- 📱 Fully responsive design
- 🧠 AI-themed content and terminology

## Setup & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/neo-tech-ai-portfolio.git
   cd neo-tech-ai-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## Customization

### Replace Spline Model
1. Create a 3D scene in [Spline](https://spline.design/)
2. Export as "Code" and copy the scene URL
3. Set the environment variable:
   ```
   REACT_APP_SPLINE_SCENE_URL=your_spline_scene_url_here
   ```

### Change Theme Colors
Modify the color palette in `tailwind.config.js`:
```javascript
extend: {
  colors: {
    'neodark': '#0b0f14',
    'neoblue': '#00eeff',
    'neomagenta': '#ff00ff',
    'neoteal': '#00ffcc',
    'neopurple': '#9d00ff',
    'neoorange': '#ff6a00'
  }
}
```

### Add Your Projects
Edit `src/sections/ProjectsSection.jsx`:
1. Update the `projects` array with your own data
2. Replace placeholder images with your project screenshots
3. Update links to live demos and GitHub repositories

### Add Your Experience
Edit `src/sections/ExperienceSection.jsx`:
1. Update the `experiences` array with your professional history
2. Customize roles, companies, and descriptions

## Deployment

### Vercel
1. Push to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables if using Spline
4. Deploy!

### Netlify
1. Push to GitHub/GitLab/Bitbucket
2. Import project in [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Set environment variables if using Spline

## Accessibility

- Keyboard navigation support
- Semantic HTML structure
- Proper ARIA attributes
- Color contrast compliant with WCAG AA standards
- Reduced motion preference respected

### Reduced Motion Toggle
Users can disable animations by:
1. Enabling "Reduce Motion" in system preferences
2. Using the animation toggle in settings (coming soon)

## Assets

### Placeholder Images
Replace placeholder images in `/src/assets/images/` with your own:
- Profile picture: `profile.jpg`
- Project screenshots: `project-placeholder.png`

### 3D Models
Place your GLB models in `/src/assets/models/`

### Audio Files
Add transition sounds to `/src/assets/audio/`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Three.js](https://threejs.org/) for 3D graphics
- [Spline](https://spline.design/) for 3D design
- [Howler.js](https://howlerjs.com/) for audio
