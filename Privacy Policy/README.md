# Privacy Policy Page - React

A modern, polished React privacy policy page with glassmorphism design, warm gradient colors, and smooth animations. Built with React 18 and modern CSS with a focus on accessibility and user experience.

## Features

- **React 18**: Built with modern React hooks and functional components
- **Glassmorphism Design**: Beautiful glass card effects with backdrop blur
- **Warm Gradient Colors**: Animated warm color gradients (coral, orange, pink, purple)
- **No White Search Boxes**: Clean table of contents navigation without search
- **Compact Layout**: No empty spaces, full-height design
- **Interactive**: Accordion-style sections with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatically adapts to system preferences
- **MIT Licensed**: Free to use, modify, and distribute
- **Vercel Ready**: Pre-configured for instant deployment

## Project Structure

```
privacy-policy/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── vercel.json
└── README.md
```

## Current Configuration

- **Company name**: Asivision
- **Contact email**: asifhasan10122000@gmail.com
- **App name references**: Removed (uses indirect language like "this application")
- **Color scheme**: Warm gradients (coral, orange, pink, purple)
- **Design**: Glassmorphism with backdrop blur effects

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

### Update Company Information

Edit `src/App.js`:
- Company name in footer (line ~180)
- Email in contact section (line ~170)
- Add address if needed

### Modify Colors

Edit `src/App.css` CSS variables:
```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #feca57;
  --accent-color: #ff9ff3;
  /* ... other variables */
}
```

### Add/Remove Sections

Edit the `sections` array in `src/App.js` to add, remove, or modify policy sections.

## Deployment

### Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** - Vercel will automatically detect the React configuration

4. **Your site will be live** at `https://your-project.vercel.app`

### Alternative: Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel will automatically detect and deploy

### Other Platforms

- **Netlify**: Connect your repository and enable automatic builds
- **GitHub Pages**: Use `gh-pages` package to deploy
- **AWS S3**: Build and upload the `build` folder
- **Firebase Hosting**: Use `firebase deploy`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Keyboard navigation support
- Semantic HTML structure
- Focus indicators for interactive elements
- Reduced motion support for users with motion sensitivity
- Screen reader friendly

## Performance

- React 18 with optimized rendering
- CSS animations with hardware acceleration
- No external dependencies beyond React
- Fast loading times
- Optimized bundle size

## License

MIT License - See the footer of the privacy policy page for the full license text.

## Legal Disclaimer

This is a generic privacy policy template and should be reviewed by legal counsel to ensure it complies with applicable laws and regulations in your jurisdiction (e.g., GDPR, CCPA, etc.).
