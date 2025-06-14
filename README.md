# Pixel Art for Games - Interactive Web Course

## Overview
A comprehensive 6-week interactive web course for learning pixel art creation for Unity game development. The application features a modern sub-tab navigation system that eliminates long scrolling and provides focused learning experiences.

## Structure
```
WebApp/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (513 lines)
├── js/
│   ├── canvas.js       # Canvas classes (575 lines)
│   ├── content.js      # Course content (1,703 lines)
│   └── main.js         # Application logic (457 lines)
└── README.md           # This file
```

## Features

### Navigation Structure
- **Main Navigation**: 6 weeks of content
- **Sub-Navigation**: Each week has 6 tabs:
  - Overview: Introduction and learning objectives
  - Concepts: Theory and principles
  - Practice 1: Guided exercise
  - Practice 2: Semi-guided exercise
  - Challenge: Creative application
  - Assessment: Quiz and self-evaluation

### Interactive Elements
- **Multiple Canvas Types**:
  - Basic drawing canvas
  - Canvas with fill tool
  - Layered canvas for complex sprites
  - Animation canvas with timeline
  - Tile canvas with live preview

### Week-by-Week Content
1. **Week 1**: Introduction to Pixel Art Basics
2. **Week 2**: Colour Theory and Shading
3. **Week 3**: Character Design and Sprites
4. **Week 4**: Environment Art and Tilemaps
5. **Week 5**: Pixel Art Animation
6. **Week 6**: Game Art Pipeline & Unity Integration

## Usage

### Local Development
1. Open `index.html` in a modern web browser
2. Navigate between weeks using the top navigation
3. Access different exercises using sub-tabs
4. Interactive canvases load automatically for practice sections

### Deployment
The application is fully client-side and can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web server

## Technical Details

### Canvas System
- **PixelCanvas**: Base class for all drawing functionality
- **LayeredCanvas**: Extends PixelCanvas with layer support
- **AnimationCanvas**: Frame-by-frame animation support
- **TileCanvas**: Seamless tile creation with preview

### Responsive Design
- Desktop optimized (1400px max width)
- Tablet friendly with touch support
- Mobile responsive with adapted navigation

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers with touch support

## Future Enhancements
- Export functionality for saving artwork
- Progress tracking across sessions
- Cloud save support
- Additional exercise variations
- Community gallery features

## Educational Philosophy
The course emphasizes:
- Progressive skill building
- Hands-on practice
- Cultural sensitivity in design
- Professional game development workflows
- Unity integration best practices

## License
Educational use permitted. Please provide attribution.

## Contact
For questions or improvements, please submit issues or pull requests.