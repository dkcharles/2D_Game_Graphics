// Canvas functionality for Pixel Art Course

class PixelCanvas {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Options
        this.gridSize = options.gridSize || 16;
        this.canvasSize = options.canvasSize || 320;
        this.showGrid = options.showGrid !== false;
        
        // Set canvas size
        this.canvas.width = this.canvasSize;
        this.canvas.height = this.canvasSize;
        this.cellSize = this.canvasSize / this.gridSize;
        
        // State
        this.currentColor = options.defaultColor || '#000000';
        this.currentTool = 'pencil';
        this.isDrawing = false;
        this.pixels = this.createEmptyPixelArray();
        
        // Initialize
        this.setupEventListeners();
        this.redraw();
    }
    
    createEmptyPixelArray() {
        return Array(this.gridSize).fill().map(() => Array(this.gridSize).fill(null));
    }
    
    setupEventListeners() {
        // Mouse events
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseleave', () => this.stopDrawing());
        
        // Touch events
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            this.canvas.dispatchEvent(mouseEvent);
        });
        
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            this.canvas.dispatchEvent(mouseEvent);
        });
        
        this.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            const mouseEvent = new MouseEvent('mouseup', {});
            this.canvas.dispatchEvent(mouseEvent);
        });
    }
    
    startDrawing(e) {
        this.isDrawing = true;
        this.handleInteraction(e);
    }
    
    draw(e) {
        if (!this.isDrawing && this.currentTool !== 'fill') return;
        this.handleInteraction(e);
    }
    
    stopDrawing() {
        this.isDrawing = false;
    }
    
    handleInteraction(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / (rect.width / this.gridSize));
        const y = Math.floor((e.clientY - rect.top) / (rect.height / this.gridSize));
        
        if (x < 0 || x >= this.gridSize || y < 0 || y >= this.gridSize) return;
        
        switch(this.currentTool) {
            case 'pencil':
                this.setPixel(x, y, this.currentColor);
                break;
            case 'eraser':
                this.setPixel(x, y, null);
                break;
            case 'fill':
                if (this.isDrawing) {
                    this.floodFill(x, y, this.currentColor);
                    this.isDrawing = false; // Fill only once per click
                }
                break;
        }
        
        this.redraw();
    }
    
    setPixel(x, y, color) {
        this.pixels[y][x] = color;
    }
    
    getPixel(x, y) {
        return this.pixels[y]?.[x] || null;
    }
    
    floodFill(startX, startY, fillColor) {
        const targetColor = this.getPixel(startX, startY);
        if (targetColor === fillColor) return;
        
        const stack = [[startX, startY]];
        const visited = new Set();
        
        while (stack.length > 0) {
            const [x, y] = stack.pop();
            const key = `${x},${y}`;
            
            if (visited.has(key)) continue;
            visited.add(key);
            
            if (x < 0 || x >= this.gridSize || y < 0 || y >= this.gridSize) continue;
            if (this.getPixel(x, y) !== targetColor) continue;
            
            this.setPixel(x, y, fillColor);
            
            stack.push([x + 1, y]);
            stack.push([x - 1, y]);
            stack.push([x, y + 1]);
            stack.push([x, y - 1]);
        }
    }
    
    clear() {
        this.pixels = this.createEmptyPixelArray();
        this.redraw();
    }
    
    redraw() {
        // Clear canvas
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw pixels
        for (let y = 0; y < this.gridSize; y++) {
            for (let x = 0; x < this.gridSize; x++) {
                const color = this.pixels[y][x];
                if (color) {
                    this.ctx.fillStyle = color;
                    this.ctx.fillRect(
                        x * this.cellSize,
                        y * this.cellSize,
                        this.cellSize,
                        this.cellSize
                    );
                }
            }
        }
        
        // Draw grid
        if (this.showGrid) {
            this.ctx.strokeStyle = '#e0e0e0';
            this.ctx.lineWidth = 1;
            
            for (let i = 0; i <= this.gridSize; i++) {
                // Vertical lines
                this.ctx.beginPath();
                this.ctx.moveTo(i * this.cellSize, 0);
                this.ctx.lineTo(i * this.cellSize, this.canvas.height);
                this.ctx.stroke();
                
                // Horizontal lines
                this.ctx.beginPath();
                this.ctx.moveTo(0, i * this.cellSize);
                this.ctx.lineTo(this.canvas.width, i * this.cellSize);
                this.ctx.stroke();
            }
        }
    }
    
    setTool(tool) {
        this.currentTool = tool;
    }
    
    setColor(color) {
        this.currentColor = color;
    }
    
    toggleGrid() {
        this.showGrid = !this.showGrid;
        this.redraw();
    }
    
    // Export functionality
    exportAsPNG(scale = 1) {
        const exportCanvas = document.createElement('canvas');
        const exportCtx = exportCanvas.getContext('2d');
        
        exportCanvas.width = this.gridSize * scale;
        exportCanvas.height = this.gridSize * scale;
        
        // Draw pixels without grid
        for (let y = 0; y < this.gridSize; y++) {
            for (let x = 0; x < this.gridSize; x++) {
                const color = this.pixels[y][x];
                if (color) {
                    exportCtx.fillStyle = color;
                    exportCtx.fillRect(x * scale, y * scale, scale, scale);
                }
            }
        }
        
        return exportCanvas.toDataURL('image/png');
    }
}

// Layered Canvas for more complex drawings
class LayeredCanvas extends PixelCanvas {
    constructor(canvas, options = {}) {
        super(canvas, options);
        
        this.layers = [];
        this.currentLayer = 0;
        this.layerVisibility = [];
        
        // Initialize layers
        const numLayers = options.numLayers || 2;
        for (let i = 0; i < numLayers; i++) {
            this.layers.push(this.createEmptyPixelArray());
            this.layerVisibility.push(true);
        }
        
        // Copy pixels to first layer
        this.layers[0] = this.pixels;
        
        // Add guide layer data if provided
        if (options.guideData) {
            this.loadGuideData(options.guideData);
        }
    }
    
    loadGuideData(guideData) {
        // Assuming guideData is an array of strings representing the guide layer
        for (let y = 0; y < guideData.length && y < this.gridSize; y++) {
            for (let x = 0; x < guideData[y].length && x < this.gridSize; x++) {
                if (guideData[y][x] === '1') {
                    this.layers[0][y][x] = '#dddddd'; // Light gray for guide
                }
            }
        }
    }
    
    setPixel(x, y, color) {
        this.layers[this.currentLayer][y][x] = color;
    }
    
    getPixel(x, y) {
        return this.layers[this.currentLayer][y]?.[x] || null;
    }
    
    setCurrentLayer(layerIndex) {
        if (layerIndex >= 0 && layerIndex < this.layers.length) {
            this.currentLayer = layerIndex;
        }
    }
    
    toggleLayerVisibility(layerIndex) {
        if (layerIndex >= 0 && layerIndex < this.layers.length) {
            this.layerVisibility[layerIndex] = !this.layerVisibility[layerIndex];
            this.redraw();
        }
    }
    
    redraw() {
        // Clear canvas
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw all visible layers
        for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
            if (!this.layerVisibility[layerIndex]) continue;
            
            const layer = this.layers[layerIndex];
            const opacity = layerIndex === 0 ? 0.3 : 1.0; // Guide layer is semi-transparent
            
            this.ctx.globalAlpha = opacity;
            
            for (let y = 0; y < this.gridSize; y++) {
                for (let x = 0; x < this.gridSize; x++) {
                    const color = layer[y][x];
                    if (color) {
                        this.ctx.fillStyle = color;
                        this.ctx.fillRect(
                            x * this.cellSize,
                            y * this.cellSize,
                            this.cellSize,
                            this.cellSize
                        );
                    }
                }
            }
        }
        
        this.ctx.globalAlpha = 1.0;
        
        // Draw grid
        if (this.showGrid) {
            this.ctx.strokeStyle = '#e0e0e0';
            this.ctx.lineWidth = 1;
            
            for (let i = 0; i <= this.gridSize; i++) {
                // Vertical lines
                this.ctx.beginPath();
                this.ctx.moveTo(i * this.cellSize, 0);
                this.ctx.lineTo(i * this.cellSize, this.canvas.height);
                this.ctx.stroke();
                
                // Horizontal lines
                this.ctx.beginPath();
                this.ctx.moveTo(0, i * this.cellSize);
                this.ctx.lineTo(this.canvas.width, i * this.cellSize);
                this.ctx.stroke();
            }
        }
    }
    
    clear() {
        this.layers[this.currentLayer] = this.createEmptyPixelArray();
        this.redraw();
    }
}// Animation Canvas functionality
class AnimationCanvas extends PixelCanvas {
    constructor(canvas, options = {}) {
        super(canvas, options);
        
        // Animation specific properties
        this.frames = [this.createEmptyPixelArray()];
        this.currentFrame = 0;
        this.isPlaying = false;
        this.showOnionSkin = false;
        this.fps = options.fps || 8;
        this.lastFrameTime = 0;
        this.animationId = null;
        
        // Override pixels to use current frame
        Object.defineProperty(this, 'pixels', {
            get: () => this.frames[this.currentFrame],
            set: (value) => { this.frames[this.currentFrame] = value; }
        });
    }
    
    addFrame() {
        const newFrame = this.createEmptyPixelArray();
        this.frames.splice(this.currentFrame + 1, 0, newFrame);
        this.currentFrame++;
        this.redraw();
        this.updateFrameIndicator();
    }
    
    deleteFrame() {
        if (this.frames.length <= 1) return;
        
        this.frames.splice(this.currentFrame, 1);
        if (this.currentFrame >= this.frames.length) {
            this.currentFrame = this.frames.length - 1;
        }
        this.redraw();
        this.updateFrameIndicator();
    }
    
    nextFrame() {
        this.currentFrame = (this.currentFrame + 1) % this.frames.length;
        this.redraw();
        this.updateFrameIndicator();
    }
    
    prevFrame() {
        this.currentFrame = (this.currentFrame - 1 + this.frames.length) % this.frames.length;
        this.redraw();
        this.updateFrameIndicator();
    }
    
    play() {
        this.isPlaying = true;
        this.lastFrameTime = performance.now();
        this.animate();
    }
    
    pause() {
        this.isPlaying = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    
    animate() {
        if (!this.isPlaying) return;
        
        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastFrameTime;
        
        if (deltaTime >= 1000 / this.fps) {
            this.nextFrame();
            this.lastFrameTime = currentTime;
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    toggleOnionSkin() {
        this.showOnionSkin = !this.showOnionSkin;
        this.redraw();
    }
    
    redraw() {
        // Clear canvas
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw onion skin (previous frame)
        if (this.showOnionSkin && this.frames.length > 1) {
            const prevFrame = (this.currentFrame - 1 + this.frames.length) % this.frames.length;
            this.ctx.globalAlpha = 0.2;
            
            for (let y = 0; y < this.gridSize; y++) {
                for (let x = 0; x < this.gridSize; x++) {
                    const color = this.frames[prevFrame][y][x];
                    if (color) {
                        this.ctx.fillStyle = color;
                        this.ctx.fillRect(
                            x * this.cellSize,
                            y * this.cellSize,
                            this.cellSize,
                            this.cellSize
                        );
                    }
                }
            }
            
            this.ctx.globalAlpha = 1.0;
        }
        
        // Draw current frame
        for (let y = 0; y < this.gridSize; y++) {
            for (let x = 0; x < this.gridSize; x++) {
                const color = this.frames[this.currentFrame][y][x];
                if (color) {
                    this.ctx.fillStyle = color;
                    this.ctx.fillRect(
                        x * this.cellSize,
                        y * this.cellSize,
                        this.cellSize,
                        this.cellSize
                    );
                }
            }
        }
        
        // Draw grid
        if (this.showGrid) {
            this.ctx.strokeStyle = '#e0e0e0';
            this.ctx.lineWidth = 1;
            
            for (let i = 0; i <= this.gridSize; i++) {
                // Vertical lines
                this.ctx.beginPath();
                this.ctx.moveTo(i * this.cellSize, 0);
                this.ctx.lineTo(i * this.cellSize, this.canvas.height);
                this.ctx.stroke();
                
                // Horizontal lines
                this.ctx.beginPath();
                this.ctx.moveTo(0, i * this.cellSize);
                this.ctx.lineTo(this.canvas.width, i * this.cellSize);
                this.ctx.stroke();
            }
        }
    }
    
    updateFrameIndicator() {
        // This will be connected to the UI in main.js
        const event = new CustomEvent('frameChanged', {
            detail: {
                current: this.currentFrame + 1,
                total: this.frames.length
            }
        });
        this.canvas.dispatchEvent(event);
    }
    
    exportAsGIF() {
        // This would require a GIF encoder library
        // For now, return frames data
        return {
            frames: this.frames,
            fps: this.fps,
            gridSize: this.gridSize
        };
    }
}

// Tile Canvas with live preview
class TileCanvas extends PixelCanvas {
    constructor(canvas, previewCanvas, options = {}) {
        super(canvas, options);
        
        this.previewCanvas = previewCanvas;
        this.previewCtx = previewCanvas.getContext('2d');
        this.previewSize = 3; // 3x3 preview
        
        // Set preview canvas size
        this.previewCanvas.width = this.gridSize * this.previewSize;
        this.previewCanvas.height = this.gridSize * this.previewSize;
    }
    
    redraw() {
        super.redraw();
        this.updatePreview();
    }
    
    updatePreview() {
        // Clear preview
        this.previewCtx.fillStyle = '#ffffff';
        this.previewCtx.fillRect(0, 0, this.previewCanvas.width, this.previewCanvas.height);
        
        // Draw tiled pattern
        for (let ty = 0; ty < this.previewSize; ty++) {
            for (let tx = 0; tx < this.previewSize; tx++) {
                for (let y = 0; y < this.gridSize; y++) {
                    for (let x = 0; x < this.gridSize; x++) {
                        const color = this.pixels[y][x];
                        if (color) {
                            this.previewCtx.fillStyle = color;
                            this.previewCtx.fillRect(
                                tx * this.gridSize + x,
                                ty * this.gridSize + y,
                                1,
                                1
                            );
                        }
                    }
                }
            }
        }
        
        // Optional: Draw grid on preview
        if (this.showGrid) {
            this.previewCtx.strokeStyle = '#f0f0f0';
            this.previewCtx.lineWidth = 0.5;
            
            for (let i = 0; i <= this.previewSize; i++) {
                // Vertical lines
                this.previewCtx.beginPath();
                this.previewCtx.moveTo(i * this.gridSize, 0);
                this.previewCtx.lineTo(i * this.gridSize, this.previewCanvas.height);
                this.previewCtx.stroke();
                
                // Horizontal lines
                this.previewCtx.beginPath();
                this.previewCtx.moveTo(0, i * this.gridSize);
                this.previewCtx.lineTo(this.previewCanvas.width, i * this.gridSize);
                this.previewCtx.stroke();
            }
        }
    }
}