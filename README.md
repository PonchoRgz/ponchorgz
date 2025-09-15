# Personal Website

A modern, responsive personal website for a Sr Product Operations Manager, built with HTML, CSS (Tailwind), and vanilla JavaScript.

## Features

- 🎨 Modern, minimalist design with OpenAI-inspired aesthetics
- 🌓 Dark/light mode with smooth transitions
- 📱 Fully responsive layout
- ⚡ Performance optimized
- ♿ Accessibility focused
- 🔍 SEO friendly
- 🎯 Interactive elements and animations

## Tech Stack

- HTML5
- CSS3 (Tailwind CSS)
- Vanilla JavaScript
- No framework dependencies

## Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

The site is served directly from the `gh-pages` branch.

1. Ensure repository settings:
   - Settings → Pages → Source: `Deploy from a branch`
   - Branch: `gh-pages`

2. Deploy by pushing to `gh-pages`:
```bash
git add -A
git commit -m "deploy: update site"
git push origin gh-pages
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run Lighthouse and accessibility tests
 

## Testing

- Lighthouse reports for performance
- Pa11y for accessibility testing
- Cross-browser compatibility
- Mobile responsiveness

## License

MIT 