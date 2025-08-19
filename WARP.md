# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **client-side web application** for teaching pixel art creation for Unity game development. It's a comprehensive 6-week interactive course built with vanilla HTML, CSS, and JavaScript - no build system or package manager required.

### Key Characteristics
- **Pure Client-Side**: No server, build process, or dependencies
- **Educational Focus**: Interactive course with tabbed navigation and hands-on exercises  
- **Canvas-Based**: Multiple specialized pixel art editing tools
- **Mobile Responsive**: Works on desktop, tablet, and mobile devices

## Architecture & Code Structure

### File Organization
```
WebApp/
├── index.html          # Main HTML (151 lines) - minimal structure with templates
├── css/
│   └── styles.css      # All styling (513 lines) - responsive design
├── js/
│   ├── canvas.js       # Canvas classes (575 lines) - pixel art tools
│   ├── content.js      # Course content (1,703 lines) - educational materials  
│   └── main.js         # Application logic (457 lines) - navigation & state
└── test-canvas.html    # Standalone canvas testing
```

### Canvas System Architecture
The application uses an object-oriented canvas system with inheritance:

- **`PixelCanvas`** (base class): Core pixel editing functionality
  - Grid-based drawing with precise pixel placement
  - Basic tools: pencil, eraser, fill (flood fill algorithm)
  - Export functionality with scaling options
  
- **`LayeredCanvas`** (extends PixelCanvas): Professional workflow with layers
  - Multiple drawing layers with guide layer support
  - Layer visibility controls
  
- **`AnimationCanvas`** (extends PixelCanvas): Frame-by-frame animation
  - Multi-frame support with timeline controls
  - Onion skinning for animation reference
  - Sprite sheet export capability

### Navigation System
- **Week-based structure**: 6 main sections (weeks)
- **Sub-tab navigation**: Each week has 6 focused tabs:
  - Overview: Learning objectives and introduction
  - Concepts: Theory and principles  
  - Practice 1 & 2: Hands-on exercises with interactive canvases
  - Challenge: Creative application projects
  - Assessment: Quizzes with immediate feedback

### Content Management
- All educational content stored in `courseContent` object in `content.js`
- Dynamic content loading based on current week/tab selection
- Canvas configurations embedded within content structure
- State management tracks current position and canvas instances

## Development Workflow

### Local Development
```powershell
# No build process needed - just open in browser
.\index.html

# For testing specific canvas functionality
.\test-canvas.html
```

### Testing Changes
1. Edit files directly in any text editor
2. Refresh browser to see changes immediately
3. Use browser developer tools for debugging
4. Test touch functionality on mobile devices when possible

### Common Development Tasks

#### Adding New Canvas Types
1. Extend `PixelCanvas` class in `canvas.js`
2. Add template in `index.html` canvas-templates section
3. Update canvas initialization logic in `main.js`
4. Add appropriate content in `content.js`

#### Modifying Course Content
- Edit the `courseContent` object in `content.js`
- Follow existing tab structure (overview, concepts, practice1, practice2, challenge, assessment)
- Include canvas configuration for interactive exercises

#### Styling Updates
- All styles in single `styles.css` file
- Mobile-first responsive design
- CSS custom properties for theming

## Key Technical Concepts

### Canvas Rendering System
- **Pixel Array**: 2D arrays represent pixel data for each layer
- **Grid-based Coordinates**: All interactions mapped to grid cells
- **Real-time Rendering**: Canvas redraws on every pixel change
- **Export System**: Scales pixel art for various output sizes

### Touch & Mouse Events
- Unified event handling converts touch events to mouse events
- Prevents default touch behaviors to avoid scrolling during drawing
- Precise coordinate mapping accounts for canvas scaling

### State Management
- Global state object tracks current week, tab, and active canvas instances
- Canvas instances stored in Map for cleanup when switching content
- Quiz answers tracked to prevent re-answering

### Memory Management
- Canvas instances properly cleaned up when switching between weeks
- Animation loops paused to prevent memory leaks
- Event listeners managed to avoid accumulation

## Testing & Quality Assurance

### Manual Testing Checklist
```powershell
# Basic functionality
# 1. Open index.html and verify all weeks load
# 2. Test sub-tab navigation within each week
# 3. Verify interactive canvases load in practice tabs
# 4. Test drawing tools (pencil, eraser, fill)
# 5. Test color palette selection
# 6. Verify export functionality
# 7. Test responsive behavior by resizing window
# 8. Test touch drawing on tablet/mobile if available
```

### Browser Compatibility
- **Chrome**: Fully supported (recommended for development)
- **Firefox**: Full support
- **Safari**: Full support  
- **Edge**: Full support
- **Mobile browsers**: Touch-enabled drawing support

## Deployment Options

### GitHub Pages (Recommended)
```powershell
# Repository setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/pixel-art-course.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Site will be available at: https://username.github.io/pixel-art-course
```

### Static Hosting Alternatives
- **Netlify**: Drag and drop WebApp folder
- **Vercel**: Import from Git repository  
- **Any web server**: Copy files to public directory

### Local Sharing
- Files can be copied to any computer and opened directly in browser
- No installation or setup required for end users

## File Modification Guidelines

### When editing `index.html`:
- Canvas templates are critical - maintain exact structure for JavaScript compatibility
- Template IDs must match the mapping in `main.js`
- Preserve accessibility attributes and semantic HTML structure

### When editing `canvas.js`:
- Maintain inheritance hierarchy (PixelCanvas → LayeredCanvas/AnimationCanvas)
- Preserve public method signatures used by main.js
- Test thoroughly as changes affect all interactive exercises

### When editing `content.js`:
- Follow existing content structure and naming conventions
- Include proper canvas configuration objects for interactive tabs
- Maintain educational progression and learning objectives

### When editing `main.js`:
- Be careful with state management - improper cleanup can cause memory leaks
- Canvas initialization is asynchronous - maintain retry logic
- Event listener management is critical for performance

## Educational Context

This application serves as a university-level course delivery system. When making modifications:

- **Maintain accessibility**: Ensure screen readers and keyboard navigation work
- **Preserve educational flow**: Changes should enhance, not disrupt, the learning experience  
- **Cultural sensitivity**: Content and examples should be inclusive and appropriate
- **Professional quality**: Code and content should meet academic standards

## Performance Considerations

- **Canvas rendering**: Optimize redraw operations for smooth interaction
- **Memory usage**: Properly dispose of canvas instances when switching content
- **Mobile performance**: Test on actual mobile devices, not just browser simulation
- **Large content**: The `content.js` file is substantial (1,703 lines) but loads quickly as it's just data

## Troubleshooting Common Issues

### Canvas not appearing
- Check browser console for JavaScript errors
- Verify template IDs match between HTML and JavaScript
- Ensure content.js has proper canvas configuration

### Touch drawing not working
- Verify touch event handlers are properly preventing default behavior
- Test on actual touch device, not desktop browser simulation
- Check that touch events are being converted to mouse events correctly

### Export functionality issues  
- Ensure HTML5 Canvas toDataURL support
- Check that export scale options are properly configured
- Verify download functionality works in target browsers

### Performance problems
- Check for memory leaks from undisposed canvas instances
- Monitor DOM node accumulation when switching between tabs
- Profile JavaScript execution for expensive operations in drawing loops
