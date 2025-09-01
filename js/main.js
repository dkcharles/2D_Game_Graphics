// Main application logic for Pixel Art Course

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // State management
    const state = {
        currentWeek: 1,
        currentTab: 'overview',
        canvasInstances: new Map(),
        quizAnswered: new Set(),
        visitedTabs: new Set() // Track visited tabs as "week-tab"
    };

    // Load progress from localStorage
    function loadProgress() {
        try {
            const savedProgress = localStorage.getItem('pixelArtCourseProgress');
            if (savedProgress) {
                const progress = JSON.parse(savedProgress);
                
                // Restore visited tabs
                if (progress.visitedTabs) {
                    progress.visitedTabs.forEach(tab => state.visitedTabs.add(tab));
                }
                
                // Restore quiz answers
                if (progress.quizAnswered) {
                    progress.quizAnswered.forEach(quiz => state.quizAnswered.add(quiz));
                }
                
                // Restore current position
                if (progress.currentWeek) {
                    state.currentWeek = progress.currentWeek;
                }
                if (progress.currentTab) {
                    state.currentTab = progress.currentTab;
                }
            }
        } catch (error) {
            console.warn('Failed to load progress from localStorage:', error);
        }
    }

    // Save progress to localStorage
    function saveProgress() {
        try {
            const progress = {
                visitedTabs: Array.from(state.visitedTabs),
                quizAnswered: Array.from(state.quizAnswered),
                currentWeek: state.currentWeek,
                currentTab: state.currentTab,
                timestamp: Date.now()
            };
            
            localStorage.setItem('pixelArtCourseProgress', JSON.stringify(progress));
        } catch (error) {
            console.warn('Failed to save progress to localStorage:', error);
        }
    }

    // Clear all progress
    function clearProgress() {
        console.log('clearProgress function called');
        if (confirm('Are you sure you want to clear all progress? This cannot be undone.')) {
            try {
                console.log('User confirmed, clearing progress...');
                localStorage.removeItem('pixelArtCourseProgress');
                
                // Reset state
                state.visitedTabs.clear();
                state.quizAnswered.clear();
                state.currentWeek = 1;
                state.currentTab = 'overview';
                
                // Reload to Week 1
                loadWeek(1);
                updateNavigationState();
                
                console.log('Progress cleared successfully');
                alert('Progress cleared! Returned to Week 1.');
                
            } catch (error) {
                console.error('Failed to clear progress:', error);
                alert('Error clearing progress. Check console for details.');
            }
        } else {
            console.log('User cancelled progress clearing');
        }
    }

    // Cache DOM elements
    const weekContent = document.getElementById('week-content');
    const weekNavLinks = document.querySelectorAll('.week-nav');

    // Load saved progress
    loadProgress();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize keyboard shortcuts
    initializeKeyboardShortcuts();
    
    // Load initial content (use saved position or default)
    loadWeek(state.currentWeek);
    
    // Update navigation to reflect loaded progress
    updateNavigationState();

    // Update navigation active states based on current state
    function updateNavigationState() {
        // Update week navigation active state
        weekNavLinks.forEach(nav => nav.classList.remove('active'));
        const activeWeekLink = document.querySelector(`.week-nav[data-week="${state.currentWeek}"]`);
        if (activeWeekLink) {
            activeWeekLink.classList.add('active');
        }
        
        // Update progress indicators
        updateProgressIndicators();
    }

    // Navigation functions
    function initializeNavigation() {
        // Week navigation
        weekNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const weekNum = parseInt(link.dataset.week);
                
                // Update active states
                weekNavLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
                
                // Load new week
                loadWeek(weekNum);
            });
        });
    }

    // Initialize keyboard shortcuts
    function initializeKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Don't trigger shortcuts if user is typing in an input field
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            // Get current active canvas instance
            const currentCanvasKey = `week${state.currentWeek}-${state.currentTab}-canvas`;
            const canvasInstance = state.canvasInstances.get(currentCanvasKey);
            
            if (!canvasInstance) return;

            // Find the current canvas container to update button states
            const currentContainer = document.querySelector('.exercise-workspace');
            if (!currentContainer) return;

            const key = e.key.toLowerCase();
            let tool = null;
            
            // Map keyboard shortcuts to tools
            switch (key) {
                case 'p':
                    tool = 'pencil';
                    break;
                case 'e':
                    tool = 'eraser';
                    break;
                case 'f':
                    tool = 'fill';
                    break;
                case 'g':
                    // Toggle grid
                    canvasInstance.toggleGrid();
                    const gridBtn = currentContainer.querySelector('[data-action="grid"]');
                    if (gridBtn) gridBtn.classList.toggle('active');
                    e.preventDefault();
                    return;
                case 'c':
                    // Clear canvas (with Ctrl/Cmd modifier to prevent accidental clears)
                    if (e.ctrlKey || e.metaKey) {
                        canvasInstance.clear();
                        e.preventDefault();
                    }
                    return;
                case 'z':
                    // Undo/Redo
                    if (e.ctrlKey || e.metaKey) {
                        if (e.shiftKey) {
                            canvasInstance.redo();
                        } else {
                            canvasInstance.undo();
                        }
                        e.preventDefault();
                    }
                    return;
                case 'x':
                    // Clear progress (with Ctrl+Alt modifier - less likely to conflict)
                    if ((e.ctrlKey || e.metaKey) && e.altKey) {
                        console.log('Ctrl+Alt+X pressed, calling clearProgress');
                        clearProgress();
                        e.preventDefault();
                    }
                    return;
            }

            if (tool) {
                // Check if the tool button exists in current canvas
                const toolBtn = currentContainer.querySelector(`[data-tool="${tool}"]`);
                if (toolBtn) {
                    canvasInstance.setTool(tool);
                    
                    // Update button active states
                    const allToolBtns = currentContainer.querySelectorAll('.tool-btn[data-tool]');
                    allToolBtns.forEach(btn => btn.classList.remove('active'));
                    toolBtn.classList.add('active');
                    
                    e.preventDefault();
                }
            }
        });
    }

    // Load week content
    function loadWeek(weekNum) {
        state.currentWeek = weekNum;
        state.currentTab = 'overview';
        saveProgress();
        
        const weekData = courseContent[`week${weekNum}`];
        if (!weekData) {
            console.error(`No content found for week ${weekNum}`);
            return;
        }

        // Clear existing canvases
        state.canvasInstances.forEach(canvas => {
            if (canvas.pause) canvas.pause(); // Stop animations
        });
        state.canvasInstances.clear();

        // Build week HTML
        const weekHTML = buildWeekHTML(weekNum, weekData);
        weekContent.innerHTML = weekHTML;

        // Initialize sub-navigation
        initializeSubNavigation(weekNum);
        
        // Load initial tab content
        loadTab(weekNum, 'overview');
    }

    // Build week HTML structure
    function buildWeekHTML(weekNum, weekData) {
        const tabsHTML = Object.keys(weekData.tabs).map(tabKey => {
            const tab = weekData.tabs[tabKey];
            return `<li><a href="#" class="sub-nav-link ${tabKey === 'overview' ? 'active' : ''}" data-tab="${tabKey}">${tab.title}</a></li>`;
        }).join('');

        return `
            <section id="week${weekNum}" class="week-section active">
                <nav class="sub-nav">
                    <ul>${tabsHTML}</ul>
                </nav>
                <div id="week${weekNum}-content"></div>
            </section>
        `;
    }

    // Initialize sub-navigation for current week
    function initializeSubNavigation(weekNum) {
        const subNavLinks = weekContent.querySelectorAll('.sub-nav-link');
        
        subNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = link.dataset.tab;
                
                // Update active states
                subNavLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
                
                // Load tab content
                loadTab(weekNum, tabName);
            });
        });
    }

    // Load tab content
    function loadTab(weekNum, tabName) {
        state.currentTab = tabName;
        
        // Track visited tab
        const tabKey = `${weekNum}-${tabName}`;
        state.visitedTabs.add(tabKey);
        updateProgressIndicators();
        saveProgress();
        
        const weekData = courseContent[`week${weekNum}`];
        const tabData = weekData.tabs[tabName];
        
        if (!tabData) {
            console.error(`No content found for tab ${tabName} in week ${weekNum}`);
            return;
        }

        const contentContainer = document.getElementById(`week${weekNum}-content`);
        
        // Create content structure
        const contentHTML = `
            <div class="sub-content active" data-content="${tabName}">
                ${tabData.content}
            </div>
        `;
        
        contentContainer.innerHTML = contentHTML;

        // Initialize canvas if needed
        if (tabData.canvas) {
            setTimeout(() => {
                initializeCanvas(weekNum, tabName, tabData.canvas);
            }, 100);
        }

        // Initialize quiz if on assessment tab
        if (tabName === 'assessment') {
            initializeQuiz();
        }
    }

    // Initialize canvas for exercises
    function initializeCanvas(weekNum, tabName, canvasConfig, attempt = 1) {
        const canvasId = `week${weekNum}-${tabName}-canvas`;
        const canvasContainer = document.getElementById(canvasId);
        
        if (!canvasContainer) {
            if (attempt < 5) {
                setTimeout(() => initializeCanvas(weekNum, tabName, canvasConfig, attempt + 1), 100);
            } else {
                console.error(`Canvas container ${canvasId} not found after ${attempt} attempts`);
            }
            return;
        }

        // Clone appropriate template
        const templateId = getCanvasTemplate(canvasConfig.type);
        const template = document.getElementById(templateId);
        
        if (!template) {
            console.error(`Template ${templateId} not found`);
            return;
        }

        const canvasElement = template.cloneNode(true);
        canvasElement.style.display = 'block';
        canvasElement.id = ''; // Remove template ID
        
        canvasContainer.appendChild(canvasElement);

        // Get the actual canvas element
        const canvas = canvasElement.querySelector('.pixel-canvas');
        
        // Initialize canvas based on type
        let canvasInstance;
        
        switch (canvasConfig.type) {
            case 'basic':
            case 'fill':
                canvasInstance = new PixelCanvas(canvas, {
                    gridSize: canvasConfig.gridSize,
                    defaultColor: canvasConfig.colors[0]
                });
                break;
                
            case 'layered':
                canvasInstance = new LayeredCanvas(canvas, {
                    gridSize: canvasConfig.gridSize,
                    defaultColor: canvasConfig.colors[0],
                    numLayers: 2,
                    guideData: canvasConfig.guideData
                });
                setupLayerControls(canvasElement, canvasInstance);
                break;
                
            case 'animation':
                canvasInstance = new AnimationCanvas(canvas, {
                    gridSize: canvasConfig.gridSize,
                    defaultColor: canvasConfig.colors[0],
                    fps: canvasConfig.fps || 8
                });
                setupAnimationControls(canvasElement, canvasInstance);
                break;
                
            case 'tile':
                let previewCanvas = null;
                
                // Only create preview if showPreview is not explicitly false
                if (canvasConfig.showPreview !== false) {
                    previewCanvas = document.createElement('canvas');
                    previewCanvas.id = 'tile-preview';
                    previewCanvas.width = canvasConfig.gridSize * 3;
                    previewCanvas.height = canvasConfig.gridSize * 3;
                    
                    const previewContainer = document.getElementById('tile-preview-template').cloneNode(true);
                    previewContainer.style.display = 'block';
                    previewContainer.id = '';
                    previewContainer.querySelector('#tile-preview').replaceWith(previewCanvas);
                    
                    canvasElement.insertBefore(previewContainer, canvasElement.firstChild);
                }
                
                canvasInstance = new TileCanvas(canvas, previewCanvas, {
                    gridSize: canvasConfig.gridSize,
                    defaultColor: canvasConfig.colors[0]
                });
                break;
        }

        // Store canvas instance
        state.canvasInstances.set(canvasId, canvasInstance);

        // Setup tools and palette
        setupCanvasControls(canvasElement, canvasInstance, canvasConfig);
        
        // Load preloaded data if any
        if (canvasConfig.preloadData && canvasConfig.preloadData.outline) {
            loadOutlineData(canvasInstance, canvasConfig.preloadData.outline, canvasConfig.colors[0]);
        }
    }

    // Update progress indicators for tabs and weeks
    function updateProgressIndicators() {
        // Update week navigation with progress dots
        weekNavLinks.forEach(link => {
            const weekNum = parseInt(link.dataset.week);
            const weekTabs = ['overview', 'concepts', 'practice1', 'practice2', 'challenge', 'assessment'];
            
            // Count visited tabs for this week
            const visitedCount = weekTabs.filter(tab => 
                state.visitedTabs.has(`${weekNum}-${tab}`)
            ).length;
            
            // Remove existing progress indicator
            let progressIndicator = link.querySelector('.progress-indicator');
            if (!progressIndicator) {
                progressIndicator = document.createElement('span');
                progressIndicator.className = 'progress-indicator';
                link.appendChild(progressIndicator);
            }
            
            // Update progress display
            progressIndicator.textContent = `${visitedCount}/6`;
            progressIndicator.className = `progress-indicator ${
                visitedCount === 6 ? 'complete' : visitedCount > 0 ? 'partial' : 'none'
            }`;
        });
        
        // Update sub-tabs with visited indicators
        const subTabs = document.querySelectorAll('.sub-tab-nav[data-tab]');
        subTabs.forEach(tab => {
            const tabName = tab.dataset.tab;
            const tabKey = `${state.currentWeek}-${tabName}`;
            
            if (state.visitedTabs.has(tabKey)) {
                tab.classList.add('visited');
            } else {
                tab.classList.remove('visited');
            }
        });
    }

    // Get canvas template based on type
    function getCanvasTemplate(type) {
        const templateMap = {
            'basic': 'basic-canvas-template',
            'fill': 'fill-canvas-template',
            'layered': 'layered-canvas-template',
            'animation': 'animation-canvas-template',
            'tile': 'fill-canvas-template'
        };
        
        return templateMap[type] || 'basic-canvas-template';
    }

    // Setup canvas controls (tools and palette)
    function setupCanvasControls(container, canvasInstance, config) {
        // Tool buttons
        const toolButtons = container.querySelectorAll('.tool-btn[data-tool]');
        toolButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tool = btn.dataset.tool;
                canvasInstance.setTool(tool);
                
                // Update active state
                toolButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Action buttons
        const actionButtons = container.querySelectorAll('.tool-btn[data-action]');
        actionButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                
                switch (action) {
                    case 'clear':
                        canvasInstance.clear();
                        break;
                    case 'grid':
                        canvasInstance.toggleGrid();
                        btn.classList.toggle('active');
                        break;
                    case 'export':
                        // Get the scale from the select dropdown
                        const scaleSelect = container.querySelector('.export-scale-select');
                        const scale = scaleSelect ? parseInt(scaleSelect.value, 10) : 4;
                        // Get transparency from checkbox
                        const transparentCheckbox = container.querySelector('.export-transparent-checkbox');
                        const transparent = transparentCheckbox ? transparentCheckbox.checked : false;
                        exportCanvas(canvasInstance, scale, transparent);
                        break;
                }
            });
        });

        // Color palette
        const palette = container.querySelector('.palette');
        if (palette && config.colors) {
            palette.innerHTML = '';
            
            config.colors.forEach((color, index) => {
                const swatch = document.createElement('div');
                swatch.className = 'color-swatch';
                if (index === 0) swatch.classList.add('active');
                swatch.style.backgroundColor = color;
                swatch.dataset.color = color;
                
                swatch.addEventListener('click', () => {
                    canvasInstance.setColor(color);
                    palette.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
                    swatch.classList.add('active');
                    // Clear custom color picker selection
                    const colorPicker = palette.querySelector('.custom-color-picker');
                    if (colorPicker) colorPicker.classList.remove('active');
                });
                
                palette.appendChild(swatch);
            });
            
            // Add custom color picker
            const colorPickerContainer = document.createElement('div');
            colorPickerContainer.className = 'custom-color-container';
            colorPickerContainer.innerHTML = `
                <label class="custom-color-picker" data-tooltip="Custom Color">
                    🎨
                    <input type="color" class="color-input" value="#000000">
                </label>
            `;
            
            const colorInput = colorPickerContainer.querySelector('.color-input');
            const colorPickerLabel = colorPickerContainer.querySelector('.custom-color-picker');
            
            colorInput.addEventListener('change', (e) => {
                const customColor = e.target.value;
                canvasInstance.setColor(customColor);
                
                // Update visual feedback
                palette.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
                colorPickerLabel.classList.add('active');
                colorPickerLabel.style.backgroundColor = customColor;
            });
            
            palette.appendChild(colorPickerContainer);
        }
    }

    // Setup layer-specific controls
    function setupLayerControls(container, canvasInstance) {
        const layerButtons = container.querySelectorAll('.tool-btn[data-layer]');
        layerButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const layer = parseInt(btn.dataset.layer);
                canvasInstance.setCurrentLayer(layer);
                
                layerButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        const toggleGuide = container.querySelector('[data-action="toggle-guide"]');
        if (toggleGuide) {
            toggleGuide.addEventListener('click', () => {
                canvasInstance.toggleLayerVisibility(0);
                toggleGuide.classList.toggle('active');
            });
        }
    }

    // Setup animation-specific controls
    function setupAnimationControls(container, canvasInstance) {
        const playBtn = container.querySelector('[data-action="play"]');
        const pauseBtn = container.querySelector('[data-action="pause"]');
        const prevFrameBtn = container.querySelector('[data-action="prev-frame"]');
        const nextFrameBtn = container.querySelector('[data-action="next-frame"]');
        const addFrameBtn = container.querySelector('[data-action="add-frame"]');
        const deleteFrameBtn = container.querySelector('[data-action="delete-frame"]');
        const onionSkinBtn = container.querySelector('[data-action="onion"]');
        const frameIndicator = container.querySelector('.frame-indicator');

        if (playBtn && pauseBtn) {
            playBtn.addEventListener('click', () => {
                canvasInstance.play();
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'inline-block';
            });

            pauseBtn.addEventListener('click', () => {
                canvasInstance.pause();
                pauseBtn.style.display = 'none';
                playBtn.style.display = 'inline-block';
            });
        }

        if (prevFrameBtn) {
            prevFrameBtn.addEventListener('click', () => {
                canvasInstance.prevFrame();
            });
        }

        if (nextFrameBtn) {
            nextFrameBtn.addEventListener('click', () => {
                canvasInstance.nextFrame();
            });
        }

        if (addFrameBtn) {
            addFrameBtn.addEventListener('click', () => {
                canvasInstance.addFrame();
            });
        }

        if (deleteFrameBtn) {
            deleteFrameBtn.addEventListener('click', () => {
                canvasInstance.deleteFrame();
            });
        }

        if (onionSkinBtn) {
            onionSkinBtn.addEventListener('click', () => {
                canvasInstance.toggleOnionSkin();
                onionSkinBtn.classList.toggle('active');
            });
        }

        // Listen for frame changes
        if (frameIndicator) {
            canvasInstance.canvas.addEventListener('frameChanged', (e) => {
                frameIndicator.textContent = `Frame ${e.detail.current} / ${e.detail.total}`;
            });
        }

        // Add export logic for animation canvas
        const exportBtn = container.querySelector('.tool-btn[data-action="export"]');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                const scaleSelect = container.querySelector('.export-scale-select');
                const scale = scaleSelect ? parseInt(scaleSelect.value, 10) : 4;
                const transparentCheckbox = container.querySelector('.export-transparent-checkbox');
                const transparent = transparentCheckbox ? transparentCheckbox.checked : false;
                exportCanvas(canvasInstance, scale, transparent);
            });
        }

        // Add sprite sheet export logic
        const exportSpriteBtn = container.querySelector('.tool-btn[data-action="export-sprite"]');
        if (exportSpriteBtn) {
            exportSpriteBtn.addEventListener('click', () => {
                const scaleSelect = container.querySelector('.export-scale-select');
                const scale = scaleSelect ? parseInt(scaleSelect.value, 10) : 4;
                const transparentCheckbox = container.querySelector('.export-transparent-checkbox');
                const transparent = transparentCheckbox ? transparentCheckbox.checked : false;
                const dataURL = canvasInstance.exportAsSpriteSheet(scale, transparent);
                const link = document.createElement('a');
                link.download = `pixel-art-spritesheet-${Date.now()}.png`;
                link.href = dataURL;
                link.click();
            });
        }
    }

    // Load outline data into canvas
    function loadOutlineData(canvasInstance, outlineData, color) {
        for (let y = 0; y < outlineData.length; y++) {
            for (let x = 0; x < outlineData[y].length; x++) {
                if (outlineData[y][x] === '1') {
                    canvasInstance.setPixel(x, y, color);
                }
            }
        }
        canvasInstance.redraw();
    }

    // Initialize quiz functionality
    function initializeQuiz() {
        const quizOptions = document.querySelectorAll('.quiz-option');
        
        quizOptions.forEach(option => {
            // Skip if already answered
            const questionId = option.parentElement.parentElement.querySelector('h4').textContent;
            if (state.quizAnswered.has(questionId)) {
                return;
            }

            option.addEventListener('click', () => {
                const isCorrect = option.dataset.correct === 'true';
                const question = option.closest('.quiz-question');
                
                // Mark as answered
                state.quizAnswered.add(questionId);
                
                // Disable all options in this question
                question.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.style.pointerEvents = 'none';
                    opt.style.opacity = '0.7';
                });
                
                // Show result
                if (isCorrect) {
                    option.classList.add('correct');
                } else {
                    option.classList.add('incorrect');
                    // Show the correct answer
                    question.querySelector('[data-correct="true"]').classList.add('correct');
                }
            });
        });
    }

    // Export canvas as PNG
    function exportCanvas(canvasInstance, scale = 4, transparent = false) {
        const dataURL = canvasInstance.exportAsPNG(scale, transparent);
        
        const link = document.createElement('a');
        link.download = `pixel-art-${Date.now()}.png`;
        link.href = dataURL;
        link.click();
    }
});

// Utility function to show loading state
function showLoading() {
    // Could add a loading spinner here
}

// Utility function to hide loading state
function hideLoading() {
    // Hide loading spinner
}