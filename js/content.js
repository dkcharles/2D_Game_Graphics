// Enhanced course content with comprehensive educational materials
// Integrating university-standard curriculum (11,619 lines of content)

const courseContent = {
    week1: {
        title: "Introduction to Pixel Art Basics",
        tabs: {
            overview: {
                title: "Overview",
                content: `
                    <h2>Week 1: Introduction to Pixel Art Basics</h2>
                    
                    <div class="info-box">
                        <h3>Learning Objectives</h3>
                        <ul>
                            <li>Understand the origins and characteristics of pixel art</li>
                            <li>Learn fundamental pixel placement techniques</li>
                            <li>Master basic tool usage in pixel art creation</li>
                            <li>Create your first pixel art assets for games</li>
                            <li>Develop precision and planning skills essential for pixel art</li>
                        </ul>
                    </div>

                    <p>Welcome to the world of pixel art! This week, you'll discover how simple pixels can create complex and beautiful game graphics. We'll explore the history of pixel art, understand its unique constraints and opportunities, and begin creating your own pixel art masterpieces.</p>

                    <p>Pixel art is both a technical skill and an art form. Every pixel you place is a deliberate choice that contributes to the overall image. This precision and intentionality make pixel art uniquely satisfying and surprisingly powerful for visual communication.</p>

                    <h3>What You'll Master This Week</h3>
                    <ul>
                        <li><strong>Practice 1:</strong> Your first pixels - understanding the grid system</li>
                        <li><strong>Practice 2:</strong> Basic geometric shapes and pattern creation</li>
                        <li><strong>Challenge:</strong> Create a complete 16×16 game icon with professional standards</li>
                        <li><strong>Assessment:</strong> Comprehensive knowledge test and practical evaluation</li>
                    </ul>
                    
                    <div class="tip-box">
                        <p><strong>💡 Study Tip:</strong> Complete one tab per day for best retention, or work through all content in a focused 3-hour session.</p>
                    </div>

                    <h3>Cultural Sensitivity and Inclusive Design</h3>
                    <p>Throughout this course, we'll emphasize creating pixel art that welcomes diverse audiences. Even in Week 1, consider how your design choices can create positive, inclusive experiences for players from all backgrounds.</p>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Foundations of Pixel Art</h2>
                    
                    <h3>What Makes Pixel Art Unique?</h3>
                    <p>Pixel art is a form of digital art where images are created and edited at the pixel level. Each individual pixel is deliberately placed to create forms, characters, and environments. Unlike other digital art forms that rely on brushes, gradients, and anti-aliasing, pixel art embraces the grid-based nature of digital displays.</p>

                    <div class="info-box">
                        <p><strong>Key Principle:</strong> In pixel art, every pixel matters. Each pixel placement is a conscious decision that contributes to the overall image.</p>
                    </div>

                    <h3>Historical Context and Evolution</h3>
                    <p>Pixel art originated in the late 1970s when computer graphics were severely limited by hardware constraints. Early arcade games like <em>Space Invaders</em> (1978) and <em>Pac-Man</em> (1980) used pixel art not by choice, but by necessity. These technical limitations forced developers to be incredibly creative with minimal resources.</p>

                    <p><strong>Key Historical Moments:</strong></p>
                    <ul>
                        <li><strong>1978:</strong> Space Invaders - Iconic pixel art enemies</li>
                        <li><strong>1985:</strong> Super Mario Bros. - Character personality through pixels</li>
                        <li><strong>1991:</strong> Street Fighter II - Detailed character animation</li>
                        <li><strong>2008:</strong> Braid - Modern pixel art renaissance</li>
                        <li><strong>2018:</strong> Celeste - Contemporary pixel art excellence</li>
                    </ul>

                    <p>As technology advanced, pixel art evolved from a technical limitation to an artistic choice. Modern games like <em>Celeste</em>, <em>Stardew Valley</em>, and <em>Hyper Light Drifter</em> prove that pixel art remains a powerful and popular aesthetic, chosen for its clarity, charm, and nostalgic appeal.</p>
                    
                    <div class="example-showcase">
                        <h4>Modern Pixel Art Excellence: Celeste</h4>
                        <div class="info-box">
                            <p><strong>Study Example:</strong> <em>Celeste's</em> main character Madeline demonstrates excellent modern pixel art principles:</p>
                            <ul>
                                <li><strong>Clear silhouette:</strong> Instantly recognizable character shape</li>
                                <li><strong>Limited palette:</strong> Strategic use of just a few colors for maximum impact</li>
                                <li><strong>Expressive animation:</strong> Personality conveyed through pixel-perfect movement</li>
                                <li><strong>Technical excellence:</strong> Clean edges, consistent style, readable at small sizes</li>
                            </ul>
                            <p><em>View official Celeste sprites at <a href="https://www.spriters-resource.com/pc_computer/celeste/" target="_blank" rel="noopener">The Spriters Resource</a> to see these principles in action.</em></p>
                        </div>
                    </div>

                    <h3>Understanding the Pixel Grid</h3>
                    <p>The foundation of all pixel art is the grid. Understanding grid relationships is crucial for creating clean, precise artwork:</p>
                    
                    <div class="info-box">
                        <h4>Common Canvas Sizes and Their Uses:</h4>
                        <ul>
                            <li><strong>8×8:</strong> Minimal sprites, simple tiles, retro style</li>
                            <li><strong>16×16:</strong> Standard small sprites, detailed tiles, icons</li>
                            <li><strong>32×32:</strong> Character sprites, complex objects, modern pixel art</li>
                            <li><strong>64×64:</strong> Detailed characters, portraits, small scenes</li>
                        </ul>
                    </div>

                    <h3>Technical Characteristics</h3>
                    <p>Pixel art has several defining technical characteristics:</p>
                    <ul>
                        <li><strong>Limited Resolution:</strong> Working within small canvas sizes forces creative problem-solving and clarity of communication</li>
                        <li><strong>No Anti-aliasing:</strong> Sharp edges create the distinctive "jagged" look that defines pixel art aesthetics</li>
                        <li><strong>Colour Constraints:</strong> Limited palettes create visual harmony and technical efficiency</li>
                        <li><strong>Pixel-Perfect Precision:</strong> Every pixel must be intentional and serve the overall design</li>
                    </ul>

                    <h3>Planning and Precision</h3>
                    <p>Successful pixel art requires careful planning:</p>
                    <ol>
                        <li><strong>Concept:</strong> What are you trying to communicate?</li>
                        <li><strong>Silhouette:</strong> Design should read clearly as a shape</li>
                        <li><strong>Proportions:</strong> Key relationships between elements</li>
                        <li><strong>Details:</strong> Add only essential details that enhance communication</li>
                    </ol>

                    <div class="tip-box">
                        <p><strong>💡 Pro Tip:</strong> Start with strong silhouettes. If your design doesn't read clearly as a black shape, it needs refinement before adding details.</p>
                    </div>

                    <h3>Tools and Workflow</h3>
                    <p>Basic pixel art requires minimal tools:</p>
                    <ul>
                        <li><strong>Pencil Tool:</strong> For precise pixel placement</li>
                        <li><strong>Eraser Tool:</strong> For corrections and refinements</li>
                        <li><strong>Fill Tool:</strong> For quickly filling enclosed areas</li>
                        <li><strong>Grid Display:</strong> Essential for maintaining precision</li>
                    </ul>

                    <h3>Professional Applications</h3>
                    <p>Understanding pixel art fundamentals prepares you for:</p>
                    <ul>
                        <li><strong>Game Development:</strong> Creating sprites, tiles, and UI elements</li>
                        <li><strong>Icon Design:</strong> Clear, readable symbols for interfaces</li>
                        <li><strong>Animation:</strong> Frame-by-frame character and effect animation</li>
                        <li><strong>World Building:</strong> Environmental storytelling through pixel art</li>
                    </ul>

                    <div class="warning-box">
                        <p><strong>⚠️ Remember:</strong> Pixel art is about communication first, decoration second. Every pixel should serve the purpose of clearly conveying your intended message or emotion.</p>
                    </div>
                `
            },
            practice1: {
                title: "Practice 1: First Pixels",
                content: `
                    <h2>Practice 1: Your First Pixels</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Understanding the Grid</h3>
                            <p>Let's start with the absolute basics - placing individual pixels to understand how the grid system works and how pixel relationships create recognizable forms.</p>
                            
                            <h4>Your Progressive Tasks:</h4>
                            <ol>
                                <li>
                                    <strong>Single Pixels (1-2 minutes):</strong>
                                    <div class="task-with-example">
                                        <div class="task-instructions">
                                            <ul>
                                                <li>Click anywhere on the grid to place your first pixel</li>
                                                <li>Try clicking different colors from the palette below</li>
                                                <li>Use the eraser tool to remove pixels you don't want</li>
                                                <li><em>Success goal: Place and remove at least 5 different colored pixels</em></li>
                                            </ul>
                                        </div>
                                        <div class="task-example">
                                            <img src="images/examples/single-pixels.svg" alt="Example of randomly placed colored pixels" class="pixel-example"/>
                                            <p class="example-caption">Example: Different colored pixels placed on the grid</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <strong>Checkerboard Pattern (3-4 minutes):</strong>
                                    <div class="task-with-example">
                                        <div class="task-instructions">
                                            <ul>
                                                <li>Start with a black pixel in the top-left corner</li>
                                                <li>Place a white pixel next to it</li>
                                                <li>Continue alternating black and white across the row</li>
                                                <li>On the next row, start with white where you had black above</li>
                                                <li><em>Success goal: Create at least a 4×4 checkerboard pattern</em></li>
                                            </ul>
                                        </div>
                                        <div class="task-example">
                                            <img src="images/examples/checkerboard.svg" alt="Example of a 4x4 checkerboard pattern" class="pixel-example"/>
                                            <p class="example-caption">Example: 4×4 checkerboard pattern</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <strong>Letter Formation (5-7 minutes):</strong>
                                    <div class="task-with-example">
                                        <div class="task-instructions">
                                            <ul>
                                                <li>Choose one of your initials to start with</li>
                                                <li>Plan the letter mentally before placing pixels</li>
                                                <li>Use black pixels on the white background</li>
                                                <li>Make letters at least 5 pixels tall for readability</li>
                                                <li><em>Success goal: Create a clearly recognizable letter</em></li>
                                            </ul>
                                        </div>
                                        <div class="task-example">
                                            <img src="images/examples/letter-A.svg" alt="Example of pixel letter A" class="pixel-example"/>
                                            <p class="example-caption">Example: Letter "A" made with pixels</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <strong>Simple Smiley Face (6-8 minutes):</strong>
                                    <div class="task-with-example">
                                        <div class="task-instructions">
                                            <ul>
                                                <li>Start with two black pixels for eyes, spaced 2-3 pixels apart</li>
                                                <li>Add a single pixel below and between them for a nose (optional)</li>
                                                <li>Create a curved smile using 3-5 pixels in an arc shape</li>
                                                <li>Try different expressions: sad face, surprised face, winking</li>
                                                <li><em>Success goal: Make a face that clearly conveys an emotion</em></li>
                                            </ul>
                                        </div>
                                        <div class="task-example">
                                            <img src="images/examples/smiley-face.svg" alt="Example of a simple smiley face" class="pixel-example"/>
                                            <p class="example-caption">Example: Simple smiley face with eyes and curved smile</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <strong>Border Pattern (4-5 minutes):</strong>
                                    <div class="task-with-example">
                                        <div class="task-instructions">
                                            <ul>
                                                <li>Create a border around the edge of your canvas</li>
                                                <li>Try different patterns: solid line, dashed line, alternating colors</li>
                                                <li>Experiment with corner designs where lines meet</li>
                                                <li><em>Success goal: Complete border that looks intentionally designed</em></li>
                                            </ul>
                                        </div>
                                        <div class="task-example">
                                            <img src="images/examples/border-pattern.svg" alt="Example of a border pattern with decorative elements" class="pixel-example"/>
                                            <p class="example-caption">Example: Border with decorative interior pattern</p>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Grid Guidelines:</strong> Use the grid lines as guides. Each square represents exactly one pixel. Notice how the cursor changes to show precise placement.</p>
                            </div>
                            
                            <h4>Understanding Pixel Relationships</h4>
                            <p>As you work, observe these fundamental principles:</p>
                            <ul>
                                <li><strong>Adjacency:</strong> Pixels touching each other create continuous forms</li>
                                <li><strong>Diagonal Relationships:</strong> Diagonal lines appear "stepped" or "jagged"</li>
                                <li><strong>Spacing:</strong> Empty pixels between filled pixels create patterns and textures</li>
                                <li><strong>Symmetry:</strong> Balanced pixel placement creates pleasing compositions</li>
                            </ul>

                            <h4>Beginner Tips & Shortcuts</h4>
                            <ul>
                                <li><strong>Accidental clicks:</strong> Use the eraser tool or right-click to remove unwanted pixels</li>
                                <li><strong>Imprecise placement:</strong> Ensure you're clicking in the center of grid squares - watch for the cursor to change</li>
                                <li><strong>Color switching:</strong> Click directly on colors in the palette, or use number keys 1-8 for quick color selection</li>
                                <li><strong>Zoom in/out:</strong> Use the mouse wheel or trackpad to get closer for detail work</li>
                                <li><strong>Grid visibility:</strong> Toggle the grid on/off if it becomes distracting</li>
                                <li><strong>Undo mistakes:</strong> Press Ctrl+Z (Cmd+Z on Mac) to undo your last action</li>
                                <li><strong>Planning ahead:</strong> Lightly sketch your design mentally before committing pixels</li>
                            </ul>
                            
                            <h4>Common Beginner Mistakes to Avoid</h4>
                            <ul>
                                <li><strong>Rushing:</strong> Take your time with pixel placement - precision matters more than speed</li>
                                <li><strong>Too many colors:</strong> Start with just 2-3 colors for cleaner results</li>
                                <li><strong>Ignoring symmetry:</strong> For faces and patterns, try to keep elements balanced</li>
                                <li><strong>Not using the full canvas:</strong> Don't be afraid to use the entire grid space available</li>
                                <li><strong>Perfectionism:</strong> Your first attempts won't be perfect - focus on learning and experimenting</li>
                            </ul>

                            <div class="info-box">
                                <h4>Learning Objectives for This Exercise:</h4>
                                <ul>
                                    <li>Develop muscle memory for precise pixel placement</li>
                                    <li>Understand how individual pixels combine to create recognizable forms</li>
                                    <li>Experience the relationship between planning and execution</li>
                                    <li>Begin developing an eye for pixel art aesthetics</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div id="week1-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'basic',
                    gridSize: 8,
                    colors: ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']
                }
            },
            practice2: {
                title: "Practice 2: Basic Shapes",
                content: `
                    <h2>Practice 2: Geometric Foundations</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Building with Basic Shapes</h3>
                            <p>Geometric shapes are the building blocks of all pixel art. This exercise teaches you to create clean, recognizable shapes within the constraints of a pixel grid.</p>
                            
                            <h4>Progressive Shape Challenges:</h4>
                            <ol>
                                <li><strong>Perfect Square:</strong> Create a filled 4×4 pixel square - focus on clean edges and consistent fill</li>
                                <li>
                                    <strong>Circle Approximation:</strong>
                                    <div class="task-with-example">
                                        <div class="task-instructions">
                                            Create the best possible circle in a 7×7 area using the 3-2-2-2-2-2-3 pixel pattern (outline style)
                                        </div>
                                        <div class="task-example">
                                            <img src="images/examples/circle-7x7.svg" alt="7x7 circle with correct circular pattern" class="pixel-example"/>
                                            <p class="example-caption">7×7 circle pattern</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <strong>Triangle Variations:</strong>
                                    <div class="task-with-example">
                                        <div class="task-instructions">
                                            Draw triangles with different angles and orientations - start with a basic isosceles triangle
                                        </div>
                                        <div class="task-example">
                                            <img src="images/examples/triangle.svg" alt="Example of a pixel art triangle" class="pixel-example"/>
                                            <p class="example-caption">Basic triangle shape</p>
                                        </div>
                                    </div>
                                </li>
                                <li><strong>Five-Pointed Star:</strong> Create a recognizable star shape - start from the center and work outward to the five points. <a href="https://uk.pinterest.com/ideas/pixel-art-star-5x5/897535927612/" target="_blank" rel="noopener">See examples here</a>.</li>
                                <li><strong>Diamond Shape:</strong> Rotate a square to create a diamond</li>
                                <li><strong>Arrow Shapes:</strong> Create directional arrows pointing different ways</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>Key Learning:</strong> Pixel art cannot create perfect geometric shapes. Instead, we approximate these shapes using careful pixel placement patterns.</p>
                            </div>
                            
                            <h4>Circle Creation Techniques:</h4>
                            <p>Creating circles in pixel art requires specific patterns:</p>
                            <ul>
                                <li><strong>Small circles (7×7):</strong> Use a 3-2-2-2-2-2-3 pixel pattern for outline circles</li>
                                <li><strong>Medium circles (9×9):</strong> Use a 1-3-4-5-5-5-4-3-1 pixel pattern</li>
                                <li><strong>Symmetry:</strong> Keep patterns symmetric on both axes</li>
                                <li><strong>Smoothness:</strong> Avoid single-pixel protrusions that break the curve</li>
                            </ul>

                            <h4>Diagonal Line Guidelines:</h4>
                            <div class="task-with-example">
                                <div class="task-instructions">
                                    <p>Creating clean diagonals requires consistent stepping:</p>
                                    <ul>
                                        <li><strong>45-degree lines:</strong> Perfect 1-1-1-1 stepping pattern</li>
                                        <li><strong>Shallow angles:</strong> 2-1-2-1-2-1 stepping pattern</li>
                                        <li><strong>Steep angles:</strong> 1-2-1-2-1-2 stepping pattern</li>
                                        <li><strong>Consistency:</strong> Maintain the same pattern throughout the line</li>
                                    </ul>
                                </div>
                                <div class="task-example">
                                    <img src="images/examples/diagonal-lines.svg" alt="Examples of different diagonal line stepping patterns" class="pixel-example"/>
                                    <p class="example-caption">Diagonal stepping patterns</p>
                                </div>
                            </div>

                            <h4>Professional Tips:</h4>
                            <ul>
                                <li><strong>Plan First:</strong> Sketch your shape before placing pixels</li>
                                <li><strong>Use Symmetry:</strong> Count pixels from center points</li>
                                <li><strong>Check Readability:</strong> Does your shape read clearly at a glance?</li>
                                <li><strong>Refine Iteratively:</strong> Adjust pixels to improve the overall form</li>
                            </ul>

                            <div class="tip-box">
                                <p><strong>💡 Professional Insight:</strong> Master these basic shapes first. Complex pixel art is built by combining and modifying these fundamental forms.</p>
                            </div>
                        </div>
                        
                        <div id="week1-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#2C3E50', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#ECF0F1', '#9B59B6', '#1ABC9C']
                }
            },
            challenge: {
                title: "Challenge: Create an Icon",
                content: `
                    <h2>Challenge: Professional Game Icon Creation</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Creative Challenge</h3>
                            <p>Put everything you've learned together to create a professional-quality 16×16 game icon! This challenge tests your ability to communicate clearly within strict constraints.</p>
                            
                            <h4>Icon Categories and Ideas:</h4>
                            <div class="info-box">
                                <h5>💰 Collectibles & Resources</h5>
                                <ul>
                                    <li>Coins, gems, crystals</li>
                                    <li>Health potions, mana bottles</li>
                                    <li>Food items, power-ups</li>
                                </ul>
                                
                                <h5>🗡️ Equipment & Tools</h5>
                                <ul>
                                    <li>Swords, shields, weapons</li>
                                    <li>Tools, keys, scrolls</li>
                                    <li>Magic items, artifacts</li>
                                </ul>
                                
                                <h5>🎯 Interface & Navigation</h5>
                                <ul>
                                    <li>Menu buttons, arrows</li>
                                    <li>Settings icons, help symbols</li>
                                    <li>Achievement badges, stars</li>
                                </ul>
                            </div>
                            
                            <h4>Professional Design Process:</h4>
                            <ol>
                                <li><strong>Concept Phase:</strong> Choose your icon and define its purpose</li>
                                <li><strong>Silhouette Design:</strong> Create a strong, recognizable outline</li>
                                <li><strong>Base Shape:</strong> Establish the primary form using geometric principles</li>
                                <li><strong>Detail Addition:</strong> Add only essential details that enhance recognition</li>
                                <li><strong>Contrast Optimization:</strong> Ensure elements are clearly distinguishable</li>
                                <li><strong>Final Polish:</strong> Refine pixels for maximum clarity and appeal</li>
                            </ol>
                            
                            <h4>Icon Design Principles:</h4>
                            <ul>
                                <li><strong>Clarity:</strong> Instantly recognizable even at small sizes</li>
                                <li><strong>Simplicity:</strong> Avoid unnecessary details that clutter the design</li>
                                <li><strong>Consistency:</strong> Use consistent line weights and style choices</li>
                                <li><strong>Contrast:</strong> Strong value differences for clear element separation</li>
                                <li><strong>Purpose:</strong> Design should communicate the icon's function</li>
                            </ul>

                            <div class="tip-box">
                                <p><strong>Cultural Sensitivity Note:</strong> Consider how your icon choices might be perceived by diverse audiences. Aim for universally positive and inclusive imagery.</p>
                            </div>
                            
                            <h4>Quality Assessment Checklist:</h4>
                            <ul>
                                <li>✓ <strong>Silhouette Test:</strong> Recognizable as a black shape</li>
                                <li>✓ <strong>Clarity Test:</strong> Readable when very small</li>
                                <li>✓ <strong>Contrast Test:</strong> Strong value differences between elements</li>
                                <li>✓ <strong>Detail Test:</strong> No unnecessary complexity</li>
                                <li>✓ <strong>Purpose Test:</strong> Clearly communicates intended meaning</li>
                                <li>✓ <strong>Polish Test:</strong> Every pixel serves the design</li>
                            </ul>

                            <h4>Advanced Techniques to Try:</h4>
                            <ul>
                                <li><strong>Highlight Placement:</strong> Add a single bright pixel for dimensional appeal</li>
                                <li><strong>Shadow Indication:</strong> Use darker pixels to suggest depth</li>
                                <li><strong>Texture Suggestion:</strong> Simple patterns to imply material properties</li>
                                <li><strong>Color Psychology:</strong> Choose colors that support the icon's emotional message</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Challenge Yourself:</strong> Once you complete one icon, try creating the same concept with different color schemes. How does color choice affect the icon's emotional impact and clarity?</p>
                            </div>
                        </div>
                        
                        <div id="week1-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#1a1a1a', '#4a4a4a', '#7a7a7a', '#aaaaaa', '#ffffff', 
                             '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', 
                             '#26de81', '#fd79a8', '#fdcb6e', '#6c5ce7']
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 1 Comprehensive Assessment</h2>
                    
                    <p>Test your understanding of pixel art fundamentals with this comprehensive knowledge and practical assessment!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What is the primary characteristic that distinguishes pixel art from other digital art forms?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">It uses more advanced software tools</div>
                            <div class="quiz-option" data-correct="true">Each individual pixel is deliberately placed and remains visible</div>
                            <div class="quiz-option" data-correct="false">It requires expensive hardware to create</div>
                            <div class="quiz-option" data-correct="false">It can only represent retro gaming aesthetics</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Pixel art's defining characteristic is the deliberate, visible placement of individual pixels. Unlike other digital art that may hide pixels through anti-aliasing or smooth gradients, pixel art celebrates the grid-based nature of digital displays.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: Which canvas size would be most appropriate for a beginner creating their first character sprite?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">8×8 pixels (too small for detail)</div>
                            <div class="quiz-option" data-correct="true">16×16 pixels (ideal balance of detail and simplicity)</div>
                            <div class="quiz-option" data-correct="false">64×64 pixels (too large for beginners)</div>
                            <div class="quiz-option" data-correct="false">128×128 pixels (overwhelming for beginners)</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> 16×16 pixels provides enough space for recognizable character features while remaining manageable for beginners. It's large enough for personality but small enough to complete successfully.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: What was the primary reason early video games used pixel art?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">It was considered the most aesthetically pleasing art style</div>
                            <div class="quiz-option" data-correct="false">Artists strongly preferred working with individual pixels</div>
                            <div class="quiz-option" data-correct="true">Severe hardware limitations required maximum efficiency</div>
                            <div class="quiz-option" data-correct="false">It was faster to create than other art forms</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Early computer hardware had severe limitations in memory, processing power, and display capabilities. Pixel art wasn't chosen for aesthetic reasons but was the only viable method for creating graphics within these constraints.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: What is the main technical challenge when creating circular shapes in pixel art?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Circles require too many different colors</div>
                            <div class="quiz-option" data-correct="true">Digital pixels can only approximate smooth curves through careful patterns</div>
                            <div class="quiz-option" data-correct="false">Circle shapes are not permitted in pixel art conventions</div>
                            <div class="quiz-option" data-correct="false">The software tools don't support circular creation</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Since digital displays use rectangular pixels arranged in a grid, creating smooth curves requires approximating the desired shape through carefully planned pixel patterns that suggest roundness to the human eye.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 5: Which principle is most important when designing effective pixel art icons?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using as many colors as possible</div>
                            <div class="quiz-option" data-correct="false">Including maximum detail in available space</div>
                            <div class="quiz-option" data-correct="true">Creating clear, instantly recognizable silhouettes</div>
                            <div class="quiz-option" data-correct="false">Following historical pixel art conventions exactly</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> The silhouette test is fundamental to icon design. If an icon reads clearly as a black shape, it will likely be effective. Clear silhouettes ensure instant recognition even at very small sizes.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 6: What should be your first consideration when starting a new pixel art piece?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Choosing the perfect color palette</div>
                            <div class="quiz-option" data-correct="true">Clearly defining what you want to communicate</div>
                            <div class="quiz-option" data-correct="false">Finding reference images to copy</div>
                            <div class="quiz-option" data-correct="false">Testing different canvas sizes</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Pixel art is primarily about communication. Before considering technical aspects, you must be clear about what message, emotion, or information you want to convey to your audience.</p>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>Practical Assessment Requirements</h3>
                        <p>To demonstrate mastery of Week 1 concepts, ensure you have completed:</p>
                        <ul>
                            <li>✓ <strong>Grid Understanding:</strong> Created at least one recognizable pattern in Practice 1</li>
                            <li>✓ <strong>Shape Mastery:</strong> Successfully created three different geometric shapes in Practice 2</li>
                            <li>✓ <strong>Icon Creation:</strong> Completed at least one professional-quality 16×16 icon</li>
                            <li>✓ <strong>Knowledge Assessment:</strong> Answered all quiz questions with understanding of explanations</li>
                            <li>✓ <strong>Self-Evaluation:</strong> Can articulate what makes effective pixel art design</li>
                        </ul>
                        
                        <div class="tip-box">
                            <h4>Self-Assessment Questions:</h4>
                            <ul>
                                <li>Can you place pixels precisely and intentionally?</li>
                                <li>Do you understand how pixel relationships create forms?</li>
                                <li>Can you create recognizable shapes within grid constraints?</li>
                                <li>Are you comfortable with the basic tools and workflow?</li>
                                <li>Do you think critically about each pixel's purpose?</li>
                            </ul>
                        </div>
                        
                        <p><strong>Ready for Week 2?</strong> You should feel confident with basic pixel placement, understand grid relationships, and be excited to explore color theory and shading techniques!</p>
                    </div>

                    <div class="info-box mt-2">
                        <h3>🎉 Congratulations on Completing Week 1!</h3>
                        <p>You've taken the first steps into the world of pixel art creation. The precision and planning skills you've developed this week form the foundation for all advanced pixel art techniques.</p>
                        
                        <p><strong>What You've Achieved:</strong></p>
                        <ul>
                            <li>Mastered precise pixel placement and grid understanding</li>
                            <li>Learned to create recognizable forms within constraints</li>
                            <li>Developed an appreciation for planning and intentional design</li>
                            <li>Created your first professional-quality pixel art icon</li>
                        </ul>
                        
                        <p><strong>Next Week Preview:</strong> We'll explore color theory and shading - the techniques that bring depth and emotion to your pixel art!</p>
                    </div>
                `
            }
        }
    },

    week2: {
        title: "Colour Theory and Shading",
        tabs: {
            overview: {
                title: "Overview",
                content: `
                    <h2>Week 2: Colour Theory and Shading</h2>
                    
                    <div class="info-box">
                        <h3>Learning Objectives</h3>
                        <ul>
                            <li>Master colour theory principles for pixel art</li>
                            <li>Create effective limited colour palettes</li>
                            <li>Apply shading techniques to create depth</li>
                            <li>Understand hue shifting and colour relationships</li>
                            <li>Develop skills in form definition through value</li>
                            <li>Create emotionally effective pixel art through colour choice</li>
                        </ul>
                    </div>

                    <p>This week, we dive into the heart of what makes pixel art visually compelling - colour and shading. You'll learn how to work with limited palettes, create the illusion of depth, and make your pixel art come alive with carefully chosen colours.</p>

                    <p>Colour is one of the most powerful tools in pixel art. With the right colour choices, you can communicate mood, create focus, suggest materials, and guide the viewer's emotional response. The constraints of pixel art make colour choice even more critical - every colour must earn its place in your palette.</p>

                    <h3>What You'll Master This Week</h3>
                    <ul>
                        <li><strong>Concepts:</strong> Color theory fundamentals and palette creation principles</li>
                        <li><strong>Practice 1:</strong> Understanding color relationships and harmony</li>
                        <li><strong>Practice 2:</strong> Basic shading techniques and form definition</li>
                        <li><strong>Challenge:</strong> Complete the heart shading exercise with professional technique</li>
                        <li><strong>Assessment:</strong> Comprehensive color knowledge and practical evaluation</li>
                    </ul>

                    <h3>The Power of Limited Palettes</h3>
                    <p>One of pixel art's greatest strengths is the deliberate limitation of color choices. This constraint forces creativity and ensures visual harmony. You'll learn to choose colors that work together effectively and communicate your artistic vision clearly.</p>

                    <div class="tip-box">
                        <p><strong>💡 Week 2 Focus:</strong> Quality over quantity in color choice. A few well-chosen colors are far more effective than many random ones.</p>
                    </div>

                    <h3>Cultural Considerations in Color</h3>
                    <p>Colors carry different meanings across cultures. As we explore color theory, we'll consider how color choices can create inclusive, welcoming experiences for diverse audiences while maintaining strong artistic vision.</p>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Colour Theory for Pixel Art</h2>
                    
                    <h3>The Foundation: Understanding Color Properties</h3>
                    <p>Every color has three fundamental properties that pixel artists must master:</p>
                    
                    <div class="info-box">
                        <h4>Color Properties:</h4>
                        <ul>
                            <li><strong>Hue:</strong> The color itself (red, blue, green, etc.) - what most people think of as "color"</li>
                            <li><strong>Saturation:</strong> The intensity or purity of the color (from gray to vivid)</li>
                            <li><strong>Value:</strong> The lightness or darkness of the color (from black to white)</li>
                        </ul>
                    </div>

                    <h3>Why Limit Colors? The Philosophy of Constraint</h3>
                    <p>Limited color palettes aren't just a historical constraint - they're a powerful artistic choice:</p>
                    <ul>
                        <li><strong>Visual Harmony:</strong> Fewer colors create more cohesive, pleasing images</li>
                        <li><strong>Focus and Clarity:</strong> Limited palettes direct attention to important elements</li>
                        <li><strong>Emotional Consistency:</strong> Consistent color choices support unified mood</li>
                        <li><strong>Technical Efficiency:</strong> Smaller palettes improve game performance</li>
                        <li><strong>Creative Challenge:</strong> Constraints foster innovative solutions</li>
                    </ul>

                    <h3>Hue Shifting: Professional Color Technique</h3>
                    <p>Rather than simply adding black or white to create shadows and highlights, professional pixel artists use "hue shifting" - subtly changing the hue as the value changes.</p>
                    
                    <div class="tip-box">
                        <p><strong>💡 Hue Shifting Rules:</strong></p>
                        <ul>
                            <li><strong>Shadows:</strong> Shift toward cooler hues (blues, purples)</li>
                            <li><strong>Highlights:</strong> Shift toward warmer hues (yellows, oranges)</li>
                            <li><strong>Midtones:</strong> Use the base hue with adjusted saturation</li>
                        </ul>
                    </div>
                    
                    <div class="task-with-example">
                        <div class="task-instructions">
                            <p><strong>Visual Comparison:</strong> The difference between amateur and professional shading techniques is dramatic. Notice how hue shifting creates more natural, vibrant results.</p>
                        </div>
                        <div class="task-example-large">
                            <img src="images/examples/hue-shifting.svg" alt="Comparison of gray shadows vs hue-shifted shadows" class="pixel-example-large"/>
                            <p class="example-caption">Hue shifting makes shadows feel natural rather than muddy</p>
                        </div>
                    </div>

                    <div class="task-with-example">
                        <div class="task-instructions">
                            <h3>Creating Depth with Strategic Shading</h3>
                            <p>Pixel art typically uses 3-4 carefully chosen shades per color:</p>
                            <ol>
                                <li><strong>Shadow (Darkest):</strong> Cooler, less saturated version of base color</li>
                                <li><strong>Base Color:</strong> The primary hue representing the object</li>
                                <li><strong>Highlight:</strong> Lighter, often warmer version suggesting light source</li>
                                <li><strong>Accent (Optional):</strong> Extreme highlight for metallic or magical effects</li>
                            </ol>
                        </div>
                        <div class="task-example-large">
                            <img src="images/examples/strategic-shading.svg" alt="Comparison of flat vs strategic shading for depth" class="pixel-example-large"/>
                            <p class="example-caption">Strategic shading transforms flat shapes into convincing 3D forms</p>
                        </div>
                    </div>

                    <h3>Color Harmony Principles</h3>
                    <p>Effective pixel art palettes use established color harmony principles:</p>
                    
                    <div class="task-with-example">
                        <div class="task-instructions">
                            <ul>
                                <li><strong>Monochromatic:</strong> Variations of a single hue (safe, cohesive)</li>
                                <li><strong>Analogous:</strong> Adjacent colors on the color wheel (natural, pleasant)</li>
                                <li><strong>Complementary:</strong> Opposite colors on the wheel (high contrast, dynamic)</li>
                                <li><strong>Triadic:</strong> Three evenly spaced colors (vibrant, balanced)</li>
                                <li><strong>Split-Complementary:</strong> Base color plus colors adjacent to its complement</li>
                            </ul>
                        </div>
                        <div class="task-example-large">
                            <img src="images/examples/color-harmony.svg" alt="Examples of four main color harmony types" class="pixel-example-large"/>
                            <p class="example-caption">Each harmony type creates different emotional effects and serves different purposes</p>
                        </div>
                    </div>

                    <h3>Advanced Technique: Dithering</h3>
                    <p>Dithering uses patterns of pixels to create the illusion of intermediate colors or smooth gradients:</p>
                    
                    <div class="warning-box">
                        <h4>Dithering Patterns:</h4>
                        <ul>
                            <li><strong>Checkerboard:</strong> 50/50 blend, high contrast</li>
                            <li><strong>Scattered:</strong> 25/75 or 75/25 blend, subtle transition</li>
                            <li><strong>Gradient:</strong> Progressive patterns for smooth transitions</li>
                        </ul>
                        <p><strong>⚠️ Use Sparingly:</strong> Over-dithering creates visual noise and destroys pixel art's clean aesthetic.</p>
                    </div>
                    
                    <div class="task-example-large">
                        <img src="images/examples/dithering-patterns.svg" alt="Common dithering patterns for creating gradients" class="pixel-example-large"/>
                        <p class="example-caption">Different dithering patterns create various blending effects between two colors</p>
                    </div>

                    <h3>Palette Size Guidelines</h3>
                    <p>Professional recommendations for palette sizes:</p>
                    <ul>
                        <li><strong>4-8 Colors:</strong> Ideal for beginners, forces strong choices</li>
                        <li><strong>8-16 Colors:</strong> Standard for character design and detailed work</li>
                        <li><strong>16-32 Colors:</strong> Complex scenes, multiple characters</li>
                        <li><strong>32+ Colors:</strong> Environmental art, atmospheric effects</li>
                    </ul>

                    <h3>Color Psychology and Cultural Sensitivity</h3>
                    <p>Colors carry emotional and cultural associations:</p>
                    <ul>
                        <li><strong>Red:</strong> Energy, passion, danger (varies by culture)</li>
                        <li><strong>Blue:</strong> Calm, trust, sadness (generally universal)</li>
                        <li><strong>Green:</strong> Nature, growth, money (Western association)</li>
                        <li><strong>Yellow:</strong> Happiness, warning, cowardice (context-dependent)</li>
                        <li><strong>Purple:</strong> Royalty, magic, mystery (historically expensive)</li>
                    </ul>

                    <div class="info-box">
                        <p><strong>Cultural Consideration:</strong> When creating for diverse audiences, research color meanings in different cultures. Aim for universally positive associations while respecting cultural differences.</p>
                    </div>

                    <h3>Technical Considerations</h3>
                    <p>Practical aspects of color choice in game development:</p>
                    <ul>
                        <li><strong>Accessibility:</strong> Ensure sufficient contrast for color-blind players</li>
                        <li><strong>Readability:</strong> Important elements should stand out clearly</li>
                        <li><strong>Screen Types:</strong> Colors may appear differently on various devices</li>
                        <li><strong>Compression:</strong> Some colors compress better than others for web delivery</li>
                    </ul>
                `
            },
            practice1: {
                title: "Practice 1: Color Harmony",
                content: `
                    <h2>Practice 1: Understanding Color Relationships</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Exploring Color Harmony</h3>
                            <p>This exercise introduces you to color relationships and helps you understand how different color combinations create different emotional effects.</p>
                            
                            <div class="info-box">
                                <p><strong>Reference:</strong> <a href="https://graf1x.com/wp-content/uploads/2014/09/color-wheel-poster.jpg" target="_blank">Color Wheel Reference Chart</a> - Use this to identify color relationships while working through the exercises.</p>
                            </div>
                            
                            <h4>Progressive Color Challenges:</h4>
                            <ol>
                                <li><strong>Monochromatic Palette:</strong> Create a simple shape using only shades of one color</li>
                                <li><strong>Analogous Colors:</strong> Use 3-4 colors that sit next to each other on the color wheel</li>
                                <li><strong>Complementary Pair:</strong> Use two colors opposite each other on the color wheel</li>
                                <li><strong>Warm vs Cool:</strong> Create one warm composition and one cool composition</li>
                                <li><strong>Accent Color:</strong> Use mostly neutral colors with one bright accent</li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Observation Exercise:</strong> For each color combination, notice how it makes you feel. Do warm colors feel energetic? Do cool colors feel calm? This emotional response is the power of color theory.</p>
                            </div>
                            
                            <h4>Color Harmony Guidelines:</h4>
                            <ul>
                                <li><strong>Start Simple:</strong> Begin with 2-3 colors before adding more</li>
                                <li><strong>Test Contrast:</strong> Ensure important elements stand out clearly</li>
                                <li><strong>Consider Context:</strong> Colors look different next to other colors</li>
                                <li><strong>Trust Your Eye:</strong> If something looks "off," it probably is</li>
                            </ul>

                            <h4>Common Color Combinations to Try:</h4>
                            <div class="info-box">
                                <h5>Safe Starter Palettes:</h5>
                                <ul>
                                    <li><strong>Ocean:</strong> Blues and blue-greens with white highlights</li>
                                    <li><strong>Sunset:</strong> Oranges, reds, and purples</li>
                                    <li><strong>Forest:</strong> Various greens with brown accents</li>
                                    <li><strong>Desert:</strong> Yellows, oranges, and earth tones</li>
                                    <li><strong>Monochrome:</strong> Grays with one accent color</li>
                                </ul>
                            </div>

                            <h4>Cultural Color Considerations:</h4>
                            <p>As you experiment with colors, consider their cultural associations:</p>
                            <ul>
                                <li><strong>Red:</strong> Lucky in China, dangerous in many Western contexts</li>
                                <li><strong>White:</strong> Purity in Western cultures, mourning in some Eastern cultures</li>
                                <li><strong>Green:</strong> Nature universally, but money specifically in US culture</li>
                                <li><strong>Purple:</strong> Historically associated with royalty and expense</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Accessibility Note:</strong> Always ensure sufficient contrast between important elements. About 8% of men and 0.5% of women have some form of color vision deficiency.</p>
                            </div>

                            <div class="task-container">
                                <h4>🎯 Your Task: Create a Color Harmony Study</h4>
                                <p><strong>Assignment:</strong> Create three small pixel art compositions that demonstrate different color harmony principles:</p>
                                
                                <div class="task-checklist">
                                    <h5>Required Compositions:</h5>
                                    <ul class="checklist">
                                        <li><strong>Composition 1 - Complementary Colors:</strong> Use two colors opposite on the color wheel (like red & green, blue & orange)</li>
                                        <li><strong>Composition 2 - Analogous Colors:</strong> Use 3-4 colors that sit next to each other on the wheel (like blue, blue-green, green)</li>
                                        <li><strong>Composition 3 - Monochromatic with Accent:</strong> Use shades of one main color plus one bright accent color</li>
                                    </ul>
                                </div>
                                
                                <div class="task-requirements">
                                    <h5>Success Criteria:</h5>
                                    <ul>
                                        <li>Each composition should clearly demonstrate its color harmony type</li>
                                        <li>Use the color wheel reference to verify your color relationships</li>
                                        <li>Create simple geometric shapes or patterns to test your colors</li>
                                        <li>Ensure sufficient contrast for accessibility</li>
                                        <li>Notice and document how each color combo makes you feel</li>
                                    </ul>
                                </div>
                                
                                <div class="example-reference">
                                    <p><strong>📝 Suggested Approach:</strong></p>
                                    <ol>
                                        <li>Start with simple shapes (squares, circles, triangles)</li>
                                        <li>Test your color choices using the reference wheel</li>
                                        <li>Create each composition in a different area of the canvas</li>
                                        <li>Compare how the different harmonies feel emotionally</li>
                                        <li>Adjust colors if they don't feel harmonious</li>
                                    </ol>
                                </div>
                                
                                <div class="tip-box">
                                    <p><strong>💡 Color Tip:</strong> Don't worry about creating complex images - focus on how the colors work together. Simple shapes are perfect for understanding color relationships!</p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="week2-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FFFFFF', '#808080', '#000000']
                }
            },
            practice2: {
                title: "Practice 2: Shading Basics",
                content: `
                    <h2>Practice 2: Introduction to Shading</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Creating Form Through Shading</h3>
                            <p>Learn to create the illusion of three-dimensional form using strategic color placement. This exercise builds the skills you'll need for the heart shading challenge.</p>
                            
                            <div class="info-box">
                                <p><strong>Video Reference:</strong> <a href="https://www.youtube.com/watch?v=Z58hx22zUo8" target="_blank">Basic Pixel Art Shading Techniques</a> - Watch this video to see fundamental shading techniques demonstrated step by step.</p>
                            </div>
                            
                            <h4>Progressive Shading Exercises:</h4>
                            <ol>
                                <li><strong>Simple Sphere:</strong> Create a basic sphere using 3 shades</li>
                                <li><strong>Cube with Shadows:</strong> Show different faces of a cube receiving different amounts of light</li>
                                <li><strong>Cylinder Study:</strong> Practice curved shading on a cylindrical form</li>
                                <li><strong>Multiple Objects:</strong> Show how different objects cast shadows on each other</li>
                            </ol>
                            
                            <h4>Light Source Principles:</h4>
                            <p>Understanding light behavior is essential for convincing shading:</p>
                            <ul>
                                <li><strong>Light Source Position:</strong> Imagine where your light is coming from</li>
                                <li><strong>Direct Light:</strong> Surfaces facing the light source are brightest</li>
                                <li><strong>Ambient Light:</strong> Scattered light prevents pure black shadows</li>
                                <li><strong>Reflected Light:</strong> Light bounces from other surfaces into shadow areas</li>
                                <li><strong>Cast Shadows:</strong> Objects block light, creating shadows on other surfaces</li>
                            </ul>

                            <div class="tip-box">
                                <p><strong>💡 Beginner Tip:</strong> Start with top-left light source. This feels natural and is easy to understand.</p>
                            </div>
                            
                            <h4>Three-Shade System:</h4>
                            <p>For pixel art, typically use exactly three shades:</p>
                            <ol>
                                <li><strong>Highlight:</strong> Where light hits directly</li>
                                <li><strong>Base Color:</strong> The object's natural color</li>
                                <li><strong>Shadow:</strong> Areas receiving little or no direct light</li>
                            </ol>
                            
                            <div class="task-example-large">
                                <img src="images/examples/three-shade-system.svg" alt="Examples of 3-shade system on sphere and tree" class="pixel-example-large"/>
                                <p class="example-caption">Each object uses exactly 3 shades to create convincing form and depth</p>
                            </div>

                            <h4>Hue Shifting in Practice:</h4>
                            <p>Make your shading more interesting with subtle hue shifts:</p>
                            <ul>
                                <li><strong>Shadow Hue:</strong> Slightly cooler (more blue/purple) than base</li>
                                <li><strong>Highlight Hue:</strong> Slightly warmer (more yellow/orange) than base</li>
                                <li><strong>Saturation:</strong> Shadows often less saturated, highlights more saturated</li>
                            </ul>

                            <h4>Common Shading Mistakes to Avoid:</h4>
                            <ul>
                                <li><strong>Pure Black Shadows:</strong> Use dark colors, not pure black</li>
                                <li><strong>Pure White Highlights:</strong> Use light versions of your base color</li>
                                <li><strong>No Transition:</strong> Include some mid-tone areas</li>
                                <li><strong>Inconsistent Light:</strong> Maintain one light source direction</li>
                                <li><strong>Over-Complexity:</strong> Keep shading simple and clear</li>
                            </ul>

                            <div class="info-box">
                                <p><strong>Professional Insight:</strong> Good shading makes flat pixel art appear three-dimensional. Master this skill and your pixel art will immediately look more professional and appealing.</p>
                            </div>

                            <div class="task-container">
                                <h4>🎯 Your Task: Master the 3-Shade System</h4>
                                <p><strong>Assignment:</strong> Create three simple geometric shapes demonstrating the 3-shade shading system:</p>
                                
                                <div class="task-checklist">
                                    <h5>Required Shapes:</h5>
                                    <ul class="checklist">
                                        <li><strong>Shape 1 - Sphere:</strong> Use curved shading to show roundness with 3 shades</li>
                                        <li><strong>Shape 2 - Cube:</strong> Show different faces receiving different light amounts</li>
                                        <li><strong>Shape 3 - Cylinder:</strong> Demonstrate how light wraps around a curved surface</li>
                                    </ul>
                                </div>
                                
                                <div class="task-requirements">
                                    <h5>3-Shade System Rules:</h5>
                                    <ul>
                                        <li><strong>Highlight:</strong> Lightest shade where light hits directly (avoid pure white)</li>
                                        <li><strong>Base Color:</strong> The object's natural mid-tone color</li>
                                        <li><strong>Shadow:</strong> Darkest shade in areas with little light (avoid pure black)</li>
                                        <li><strong>Consistent Light Source:</strong> All shapes should have light coming from the same direction</li>
                                        <li><strong>Smooth Transitions:</strong> Shades should flow naturally into each other</li>
                                    </ul>
                                </div>
                                
                                <div class="example-reference">
                                    <p><strong>📝 Step-by-Step Process:</strong></p>
                                    <ol>
                                        <li>Choose your base color (the object's natural color)</li>
                                        <li>Create a lighter shade for highlights (add brightness, slight warmth)</li>
                                        <li>Create a darker shade for shadows (reduce brightness, slight coolness)</li>
                                        <li>Draw the basic shape outline in base color</li>
                                        <li>Add highlights where light hits most directly</li>
                                        <li>Add shadows in areas turned away from the light</li>
                                    </ol>
                                </div>
                                
                                <div class="tip-box">
                                    <p><strong>💡 Light Tip:</strong> Imagine your light source is coming from the top-left. This means highlights go on top-left surfaces, shadows on bottom-right surfaces. Watch the reference video for step-by-step guidance!</p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="week2-practice2-canvas"></div>
                        
                        <div class="reference-section">
                            <h4>Additional Shading Resources</h4>
                            <table class="reference-table">
                                <thead>
                                    <tr>
                                        <th>Shape / Resource</th>
                                        <th>Description</th>
                                        <th>Download / Access Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Sphere Shading Tutorial by Rappenem (DeviantArt)</strong></td>
                                        <td>A clear, multi-stage visual guide detailing how to shade a pixel-art sphere—from outline to highlights and bounce light.</td>
                                        <td>
                                            <a href="https://www.deviantart.com/rappenem/art/Pixel-Art-Tutorial-Sphere-Shading-1070312230" target="_blank">DeviantArt – Pixel Art Tutorial: Sphere Shading</a><br>
                                            <a href="https://www.pinterest.com/pin/artstation-pixel-art-tutorial-sphere-shading--1548181182220990/" target="_blank">Pinterest Mirror</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>"Isometric Pixel Art Guide" (Scribd)</strong></td>
                                        <td>A PDF-style guide covering shading techniques for cubes, cylinders, and spheres in isometric form, including gradients and dithering.</td>
                                        <td><a href="https://www.scribd.com/document/211018094/Isometric-Pixel-Art-Guide-Rhys-Davies" target="_blank">Scribd – Isometric Pixel Art Guide</a></td>
                                    </tr>
                                    <tr>
                                        <td><strong>"The Complete Guide to Isometric Pixel Art" (Scribd)</strong></td>
                                        <td>Extended PDF guide with detailed instructions on shading cubes, spheres, cylinders, and includes advanced techniques like dithering.</td>
                                        <td><a href="https://www.scribd.com/document/360272825/The-Complete-Guide-to-Isometric-Pixel-Art-pdf" target="_blank">Scribd – Complete Guide to Isometric Pixel Art</a></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Worksheet: Shading a Sphere, Cube, Cylinder &amp; Cone</strong></td>
                                        <td>A downloadable PDF worksheet (paid resource) designed for educational use—guided, shade-by-number instruction for each shape.</td>
                                        <td>
                                            <a href="https://www.teacherspayteachers.com/Product/Shading-a-Sphere-Cube-Cylinder-and-Cone-Worksheet-10481428" target="_blank">TeachersPayTeachers – Shading Worksheet</a><br>
                                            <a href="https://www.pinterest.com/pin/shading-a-sphere-cube-cylinder-and-cone-worksheet--163255555235847833/" target="_blank">Pinterest Mirror</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#8B4513', '#CD853F', '#F4A460', '#DEB887', '#FF6347', '#FF7F50', '#FFA07A', '#FFCCCB', '#4169E1', '#87CEEB']
                }
            },
            challenge: {
                title: "Challenge: Shade a Heart",
                content: `
                    <h2>Challenge: Professional Heart Shading</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Shading Masterpiece</h3>
                            <p>Apply everything you've learned about color theory and shading to create a beautifully shaded heart. This exercise demonstrates your mastery of form, light, and color relationships.</p>
                            
                            <div class="info-box">
                                <h4>Reference Materials:</h4>
                                <p>Here is a reference video: <a href="https://www.youtube.com/watch?v=kuMcP1p668I" target="_blank">Heart Shading Tutorial</a> - and you may also research your own references.</p>
                            </div>
                            
                            <h4>Professional Shading Process:</h4>
                            <ol>
                                <li><strong>Analyze the Form:</strong> Understand the heart's 3D structure - two rounded lobes meeting at a point</li>
                                <li><strong>Establish Light Source:</strong> Choose where your light is coming from (suggest top-left)</li>
                                <li><strong>Plan Your Palette:</strong> Select base color, shadow, and highlight</li>
                                <li><strong>Block in Shadows:</strong> Add shadow areas where light doesn't reach</li>
                                <li><strong>Add Highlights:</strong> Place highlights where light hits directly</li>
                                <li><strong>Refine Transitions:</strong> Smooth transitions between light and shadow</li>
                            </ol>
                            
                            <h4>Heart Anatomy for Shading:</h4>
                            <ul>
                                <li><strong>Upper Lobes:</strong> Rounded forms that catch light on top</li>
                                <li><strong>Central Valley:</strong> Depression between lobes creates shadow</li>
                                <li><strong>Lower Point:</strong> Sharp convergence creates dramatic shadow</li>
                                <li><strong>Overall Form:</strong> Heart curves away from viewer at edges</li>
                            </ul>

                            <h4>Recommended Color Approach:</h4>
                            <div class="tip-box">
                                <p><strong>Four-Color Heart Palette:</strong></p>
                                <ul>
                                    <li><strong>Deep Shadow:</strong> Dark red with purple influence</li>
                                    <li><strong>Base Color:</strong> Classic heart red</li>
                                    <li><strong>Gentle Highlight:</strong> Lighter red with orange influence</li>
                                    <li><strong>Accent Highlight:</strong> Very light pink or white for sparkle</li>
                                </ul>
                            </div>
                            
                            <h4>Advanced Techniques to Try:</h4>
                            <ul>
                                <li><strong>Gradient Shading:</strong> Smooth transitions using intermediate colors</li>
                                <li><strong>Rim Lighting:</strong> Subtle highlights along the edge</li>
                                <li><strong>Subsurface Scattering:</strong> Lighter areas where light penetrates slightly</li>
                                <li><strong>Reflected Light:</strong> Subtle brightening in deep shadow areas</li>
                            </ul>

                            <h4>Quality Assessment Criteria:</h4>
                            <ul>
                                <li>✓ <strong>Dimensional Appearance:</strong> Heart looks three-dimensional, not flat</li>
                                <li>✓ <strong>Consistent Lighting:</strong> All shading follows single light source</li>
                                <li>✓ <strong>Smooth Transitions:</strong> No harsh jumps between light and shadow</li>
                                <li>✓ <strong>Color Harmony:</strong> All colors work together effectively</li>
                                <li>✓ <strong>Professional Polish:</strong> Clean, deliberate pixel placement</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Cultural Note:</strong> The heart symbol is widely recognized as representing love and emotion across many cultures. Your shading should enhance these positive associations.</p>
                            </div>

                            <h4>Troubleshooting Common Issues:</h4>
                            <ul>
                                <li><strong>Looks Flat:</strong> Add more contrast between light and shadow</li>
                                <li><strong>Too Harsh:</strong> Add intermediate colors for smoother transitions</li>
                                <li><strong>Colors Clash:</strong> Use hue shifting instead of pure tints/shades</li>
                                <li><strong>Confusing Form:</strong> Simplify - clear areas of light and shadow</li>
                            </ul>
                        </div>
                        
                        <div id="week2-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#8B0000', '#DC143C', '#FF1493', '#FFB6C1', '#FFF0F5'],
                    preloaded: 'heart_outline'
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 2 Comprehensive Assessment</h2>
                    
                    <p>Test your mastery of color theory and shading principles with this comprehensive evaluation!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What is "hue shifting" in pixel art shading?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using completely different colors for shadows and highlights</div>
                            <div class="quiz-option" data-correct="true">Subtly changing the hue as value changes, with cooler shadows and warmer highlights</div>
                            <div class="quiz-option" data-correct="false">Adding pure black and white to create shadows and highlights</div>
                            <div class="quiz-option" data-correct="false">Randomly changing colors throughout the artwork</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Hue shifting involves subtly adjusting the hue as you change the value. Shadows typically shift toward cooler hues (blues, purples) while highlights shift toward warmer hues (yellows, oranges). This creates more natural and visually appealing shading than simply darkening or lightening the base color.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: Why do pixel artists typically use limited color palettes?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Limited palettes are easier to create</div>
                            <div class="quiz-option" data-correct="false">Old hardware couldn't display many colors</div>
                            <div class="quiz-option" data-correct="true">Constraints create visual harmony and force more thoughtful color choices</div>
                            <div class="quiz-option" data-correct="false">Limited palettes require less skill to use effectively</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> While historical hardware limitations influenced early pixel art, modern artists choose limited palettes because constraints foster creativity and ensure visual harmony. Fewer colors force more thoughtful choices and create more cohesive, professional-looking artwork.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: What are the three fundamental properties of color?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Red, green, and blue</div>
                            <div class="quiz-option" data-correct="true">Hue, saturation, and value</div>
                            <div class="quiz-option" data-correct="false">Primary, secondary, and tertiary</div>
                            <div class="quiz-option" data-correct="false">Warm, cool, and neutral</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> The three fundamental properties of color are hue (the color itself), saturation (the intensity or purity), and value (the lightness or darkness). Understanding these properties allows artists to make precise color adjustments and create effective color relationships.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: When creating shadows in pixel art, what should you avoid?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using colors that are too similar to the base color</div>
                            <div class="quiz-option" data-correct="true">Using pure black or adding black to the base color</div>
                            <div class="quiz-option" data-correct="false">Making shadows too large</div>
                            <div class="quiz-option" data-correct="false">Using curved shadow shapes</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Pure black shadows look flat and unnatural. Instead, use darker versions of your base color, often shifting slightly toward cooler hues. This creates more believable and visually appealing shadows that maintain color harmony.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 5: Which color harmony uses colors that are opposite each other on the color wheel?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Analogous harmony</div>
                            <div class="quiz-option" data-correct="true">Complementary harmony</div>
                            <div class="quiz-option" data-correct="false">Monochromatic harmony</div>
                            <div class="quiz-option" data-correct="false">Triadic harmony</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Complementary harmony uses colors that are opposite each other on the color wheel (like red and green, or blue and orange). This creates high contrast and visual excitement, making elements stand out dramatically.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 6: What is the primary purpose of highlights in shaded pixel art?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">To make the artwork more colorful</div>
                            <div class="quiz-option" data-correct="true">To show where light hits the form directly and create dimensionality</div>
                            <div class="quiz-option" data-correct="false">To add random bright spots for visual interest</div>
                            <div class="quiz-option" data-correct="false">To use all available colors in the palette</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Highlights indicate where light hits the form directly and are crucial for creating the illusion of three-dimensionality. They should be placed logically based on your chosen light source direction.</p>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>Practical Assessment Requirements</h3>
                        <p>To demonstrate mastery of Week 2 concepts, ensure you have completed:</p>
                        <ul>
                            <li>✓ <strong>Color Harmony Understanding:</strong> Created at least two different color harmony examples</li>
                            <li>✓ <strong>Basic Shading Skills:</strong> Successfully shaded simple geometric forms</li>
                            <li>✓ <strong>Heart Challenge:</strong> Completed professional-quality heart shading with proper light and shadow</li>
                            <li>✓ <strong>Hue Shifting:</strong> Demonstrated understanding by using color temperature changes in shading</li>
                            <li>✓ <strong>Knowledge Assessment:</strong> Correctly answered quiz questions with understanding of explanations</li>
                        </ul>
                        
                        <div class="tip-box">
                            <h4>Self-Assessment Questions:</h4>
                            <ul>
                                <li>Can you create harmonious color palettes intentionally?</li>
                                <li>Do you understand how to use hue shifting for natural shading?</li>
                                <li>Can you make flat shapes appear three-dimensional through shading?</li>
                                <li>Are you comfortable choosing colors that work well together?</li>
                                <li>Do you consider cultural and accessibility factors in color choice?</li>
                            </ul>
                        </div>
                        
                        <p><strong>Ready for Week 3?</strong> You should feel confident with color relationships, understand basic shading principles, and be excited to apply these skills to character design!</p>
                    </div>

                    <div class="info-box mt-2">
                        <h3>🎨 Congratulations on Mastering Color and Shading!</h3>
                        <p>You've developed sophisticated color skills that will serve you throughout your pixel art journey. The ability to create form through color and shading is what transforms good pixel art into great pixel art.</p>
                        
                        <p><strong>What You've Achieved:</strong></p>
                        <ul>
                            <li>Mastered color theory fundamentals and palette creation</li>
                            <li>Learned professional shading techniques with hue shifting</li>
                            <li>Developed an eye for color harmony and relationships</li>
                            <li>Created dimensional forms through strategic color placement</li>
                            <li>Gained awareness of cultural considerations in color choice</li>
                        </ul>
                        
                        <p><strong>Next Week Preview:</strong> We'll apply your color and shading skills to character design - creating memorable, appealing characters with personality and charm!</p>
                    </div>
                `
            }
        }
    },    // Week 3: Character Design and Sprites
    week3: {
        title: "Character Design and Sprites",
        tabs: {
            overview: {
                title: "Overview",
                content: `
                    <h2>Week 3: Character Design and Sprites</h2>
                    
                    <div class="info-box">
                        <h3>Learning Objectives</h3>
                        <ul>
                            <li>Master character silhouette and shape language</li>
                            <li>Create expressive character sprites within constraints</li>
                            <li>Use layers effectively for complex artwork</li>
                            <li>Design characters with cultural sensitivity</li>
                            <li>Apply color theory to character personality</li>
                            <li>Develop professional character creation workflows</li>
                        </ul>
                    </div>

                    <p>This week focuses on bringing characters to life through pixel art. You'll learn how to create memorable, expressive characters that work within the constraints of small sprite sizes while maintaining personality and appeal.</p>

                    <p>Character design in pixel art requires balancing clarity with personality. Every pixel must contribute to the character's story - their role, personality, and place in the game world. We'll explore how shape, color, and cultural considerations come together to create compelling characters.</p>

                    <h3>Your Character Design Journey</h3>
                    <ul>
                        <li><strong>Concepts:</strong> Character design fundamentals and shape language</li>
                        <li><strong>Practice 1:</strong> Silhouette design and shape language exploration</li>
                        <li><strong>Practice 2:</strong> Character proportions and feature placement</li>
                        <li><strong>Challenge:</strong> Design a complete 32×32 character with personality</li>
                        <li><strong>Assessment:</strong> Character design knowledge and portfolio evaluation</li>
                    </ul>

                    <h3>The Power of Constraint</h3>
                    <p>Working within small pixel grids forces clarity and creativity. You'll learn to communicate character traits through minimal but strategic details, creating designs that are instantly recognizable and memorable.</p>

                    <div class="tip-box">
                        <p><strong>💡 Character Focus:</strong> Great pixel art characters tell a story at first glance. Every design choice should support the character's personality and role.</p>
                    </div>

                    <h3>Cultural Sensitivity in Character Design</h3>
                    <p>Creating characters that welcome diverse audiences is a core professional responsibility. We'll explore how to design inclusive characters that avoid stereotypes while celebrating diversity and creating positive representation.</p>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Character Design Fundamentals</h2>
                    
                    <h3>The Foundation: Silhouette Design</h3>
                    <p>The most important test of character design is the silhouette test. A strong character should be instantly recognizable as a black shape.</p>
                    
                    <div class="info-box">
                        <p><strong>Silhouette Principles:</strong></p>
                        <ul>
                            <li><strong>Instant Recognition:</strong> Unique outline that distinguishes from other characters</li>
                            <li><strong>Shape Language:</strong> Form communicates personality before details are visible</li>
                            <li><strong>Contrast:</strong> Varied shapes create visual interest and hierarchy</li>
                            <li><strong>Simplicity:</strong> Clear, uncluttered outline reads at any size</li>
                        </ul>
                    </div>

                    <h3>Shape Language Psychology</h3>
                    <p>Different shapes convey different psychological impressions:</p>
                    <ul>
                        <li><strong>Circles and Curves:</strong> Friendly, approachable, soft, innocent</li>
                        <li><strong>Squares and Rectangles:</strong> Stable, reliable, strong, traditional</li>
                        <li><strong>Triangles and Angles:</strong> Dynamic, aggressive, dangerous, energetic</li>
                        <li><strong>Organic Shapes:</strong> Natural, alive, unpredictable, flowing</li>
                    </ul>
                    
                    <div class="task-example-large">
                        <img src="images/examples/character-design-fundamentals.svg" alt="Character design fundamentals showing silhouettes, shape language, and archetypes" class="pixel-example-large"/>
                        <p class="example-caption">Visual examples of strong vs weak silhouettes, shape language psychology, and character archetypes</p>
                    </div>

                    <h3>Character Archetypes and Design</h3>
                    <p>Common character roles and their visual characteristics:</p>
                    
                    <div class="tip-box">
                        <h4>Hero Characters:</h4>
                        <ul>
                            <li><strong>Balanced proportions</strong> suggesting capability</li>
                            <li><strong>Upright posture</strong> conveying confidence</li>
                            <li><strong>Clear, friendly features</strong> encouraging player connection</li>
                            <li><strong>Distinctive but not overwhelming</strong> details</li>
                        </ul>
                        
                        <h4>Villain Characters:</h4>
                        <ul>
                            <li><strong>Angular features</strong> suggesting danger</li>
                            <li><strong>Asymmetrical elements</strong> creating unease</li>
                            <li><strong>Dark or unsettling colors</strong> (culturally appropriate)</li>
                            <li><strong>Exaggerated proportions</strong> emphasizing threat</li>
                        </ul>
                    </div>

                    <h3>Pixel Art Character Constraints</h3>
                    <p>Working within small grids requires strategic choices:</p>
                    <ul>
                        <li><strong>Essential Details Only:</strong> Each pixel must justify its existence</li>
                        <li><strong>Readable Features:</strong> Eyes, mouth, and key characteristics must be clear</li>
                        <li><strong>Consistent Style:</strong> All characters should feel like they belong together</li>
                        <li><strong>Animation Consideration:</strong> Designs must work across multiple frames</li>
                    </ul>

                    <h3>Cultural Sensitivity in Character Design</h3>
                    <p>Creating inclusive characters requires thoughtful consideration:</p>
                    
                    <div class="warning-box">
                        <h4>Inclusive Design Principles:</h4>
                        <ul>
                            <li><strong>Avoid Stereotypes:</strong> Research and move beyond harmful generalizations</li>
                            <li><strong>Celebrate Diversity:</strong> Include characters from varied backgrounds naturally</li>
                            <li><strong>Universal Appeal:</strong> Create characters that welcome all players</li>
                            <li><strong>Community Consultation:</strong> Seek feedback from represented communities</li>
                            <li><strong>Ongoing Learning:</strong> Stay informed about respectful representation</li>
                        </ul>
                    </div>

                    <h3>Professional Character Creation Workflow</h3>
                    <ol>
                        <li><strong>Concept Development:</strong> Define character role, personality, and story function</li>
                        <li><strong>Research Phase:</strong> Study real-world references and cultural context</li>
                        <li><strong>Silhouette Design:</strong> Create strong, recognizable outline</li>
                        <li><strong>Shape Language:</strong> Apply psychological shape principles</li>
                        <li><strong>Color Palette:</strong> Choose colors supporting personality and cultural sensitivity</li>
                        <li><strong>Detail Refinement:</strong> Add only essential, characterizing details</li>
                        <li><strong>Testing:</strong> Verify readability at intended game size</li>
                        <li><strong>Cultural Review:</strong> Ensure respectful and inclusive representation</li>
                    </ol>

                    <h3>Advanced Character Design Techniques</h3>
                    <p>Professional techniques for memorable characters:</p>
                    <ul>
                        <li><strong>Asymmetry:</strong> Slight asymmetrical elements feel more natural and interesting</li>
                        <li><strong>Focal Points:</strong> Draw attention to the most important character features</li>
                        <li><strong>Color Psychology:</strong> Use color to reinforce personality and cultural appropriateness</li>
                        <li><strong>Proportion Variation:</strong> Exaggerate certain features to enhance character traits</li>
                        <li><strong>Costume Design:</strong> Clothing and accessories communicate background and role</li>
                    </ul>

                    <h3>Layer Workflow for Character Creation</h3>
                    <p>Using layers efficiently for complex character design:</p>
                    <ul>
                        <li><strong>Guide Layer:</strong> Reference silhouette or proportions</li>
                        <li><strong>Base Layer:</strong> Character foundation and primary colors</li>
                        <li><strong>Detail Layer:</strong> Facial features, clothing details, accessories</li>
                        <li><strong>Effect Layer:</strong> Highlights, shadows, special effects</li>
                    </ul>

                    <div class="info-box">
                        <p><strong>Professional Insight:</strong> Great character design in pixel art is about communication, not decoration. Every element should tell the player something important about who this character is and what they represent in the game world.</p>
                    </div>
                `
            },
            practice1: {
                title: "Practice 1: Silhouettes",
                content: `
                    <h2>Practice 1: Mastering Character Silhouettes</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Shape Language and Silhouette Design</h3>
                            <p>Learn to create instantly recognizable character silhouettes that communicate personality before any details are added.</p>
                            
                            <h4>Progressive Silhouette Challenges:</h4>
                            <ol>
                                <li><strong>Basic Archetypes:</strong> Create silhouettes for hero, villain, and sidekick</li>
                                <li><strong>Shape Language:</strong> Design one curved character and one angular character</li>
                                <li><strong>Proportion Studies:</strong> Create characters with different proportions (tall/short, thin/wide)</li>
                                <li><strong>Personality Through Shape:</strong> Design characters that look confident, shy, or energetic</li>
                                <li><strong>Cultural Diversity:</strong> Create silhouettes representing diverse body types and presentations</li>
                            </ol>
                            
                            <div class="task-example-large">
                                <img src="images/examples/character-silhouettes.svg" alt="Character silhouette examples showing different archetypes and personalities" class="pixel-example-large"/>
                                <p class="example-caption">Reference examples showing how different silhouettes communicate character archetypes and personalities</p>
                            </div>
                            
                            <div class="tip-box">
                                <p><strong>Silhouette Test:</strong> For each character, create a solid black version. If you can't tell what type of character it is from the silhouette alone, the design needs work.</p>
                            </div>
                            
                            <h4>Shape Language Guidelines:</h4>
                            <ul>
                                <li><strong>Heroic Characters:</strong> Balanced proportions, upright posture, broad shoulders</li>
                                <li><strong>Friendly Characters:</strong> Curved lines, rounded features, open postures</li>
                                <li><strong>Threatening Characters:</strong> Angular shapes, sharp points, imposing size</li>
                                <li><strong>Wise Characters:</strong> Vertical emphasis, flowing robes or hair</li>
                                <li><strong>Energetic Characters:</strong> Dynamic poses, asymmetrical elements</li>
                            </ul>

                            <h4>Cultural Sensitivity Guidelines:</h4>
                            <p>When creating diverse characters:</p>
                            <ul>
                                <li><strong>Body Diversity:</strong> Include various body types naturally</li>
                                <li><strong>Avoid Stereotypes:</strong> Don't rely on clichéd visual shorthand</li>
                                <li><strong>Research Respectfully:</strong> Understand cultural elements before incorporating them</li>
                                <li><strong>Universal Humanity:</strong> Focus on shared human experiences and emotions</li>
                            </ul>

                            <h4>Common Silhouette Mistakes:</h4>
                            <ul>
                                <li><strong>Too Symmetrical:</strong> Perfect symmetry looks unnatural and boring</li>
                                <li><strong>Unclear Outline:</strong> Silhouette doesn't read as recognizable character type</li>
                                <li><strong>Over-Complex:</strong> Too many details that muddy the overall shape</li>
                                <li><strong>Generic Proportions:</strong> Standard human proportions don't stand out</li>
                                <li><strong>Cultural Insensitivity:</strong> Relying on stereotypical representations</li>
                            </ul>

                            <div class="info-box">
                                <p><strong>Professional Tip:</strong> Great video game characters are recognizable from their silhouettes alone. Think of Mario, Sonic, or Pikachu - their shapes are instantly identifiable even without color or detail.</p>
                            </div>

                            <div class="task-container">
                                <h4>🎯 Your Task: Create Three Character Silhouettes</h4>
                                <p><strong>Assignment:</strong> Using only solid black pixels, create three distinct character silhouettes that clearly communicate different archetypes:</p>
                                
                                <div class="task-checklist">
                                    <h5>Required Characters:</h5>
                                    <ul class="checklist">
                                        <li><strong>Character 1 - The Hero:</strong> Create a balanced, confident silhouette with upright posture and heroic proportions</li>
                                        <li><strong>Character 2 - The Villain:</strong> Design an angular, threatening silhouette with sharp or imposing features</li>
                                        <li><strong>Character 3 - The Friend:</strong> Make a friendly, approachable silhouette using curved shapes and welcoming posture</li>
                                    </ul>
                                </div>
                                
                                <div class="task-requirements">
                                    <h5>Success Criteria:</h5>
                                    <ul>
                                        <li>Each silhouette should be instantly recognizable as its archetype</li>
                                        <li>Use different shape languages (angular vs curved vs balanced)</li>
                                        <li>Vary proportions to support each character's role</li>
                                        <li>Ensure cultural sensitivity in all designs</li>
                                        <li>Test: Cover your work and ask someone else to identify each character type</li>
                                    </ul>
                                </div>
                                
                                <div class="tip-box">
                                    <p><strong>💡 Working Tips:</strong> Start with basic shapes, exaggerate key features, and remember that less detail often means stronger silhouettes. Focus on the overall outline rather than internal details.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="week3-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'layered',
                    gridSize: 32,
                    colors: ['#000000', '#FFFFFF', '#8B4513', '#FFE4B5', '#4169E1', '#FF6347', '#32CD32', '#FF69B4']
                }
            },
            practice2: {
                title: "Practice 2: Character Features",
                content: `
                    <h2>Practice 2: Character Proportions and Features</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Bringing Characters to Life Through Details</h3>
                            <p>Learn to add personality and expression through facial features, proportions, and character details while maintaining clarity at small sizes.</p>
                            
                            <h4>Feature Development Challenges:</h4>
                            <ol>
                                <li><strong>Facial Expressions:</strong> Create happy, sad, angry, and surprised faces</li>
                                <li><strong>Eye Variations:</strong> Design different eye styles for various personalities</li>
                                <li><strong>Proportion Studies:</strong> Create child, adult, and elderly character proportions</li>
                                <li><strong>Clothing and Accessories:</strong> Add personality through costume choices</li>
                                <li><strong>Character Variations:</strong> Create a family of related characters</li>
                            </ol>
                            
                            <div class="task-example-large">
                                <img src="images/examples/character-features.svg" alt="Character feature development examples showing expressions, eye variations, and age proportions" class="pixel-example-large"/>
                                <p class="example-caption">Reference examples for facial expressions, eye variations, and age-based proportion differences</p>
                            </div>
                            
                            <h4>Facial Feature Guidelines:</h4>
                            <div class="tip-box">
                                <h5>Eyes (Most Important Feature):</h5>
                                <ul>
                                    <li><strong>Large eyes:</strong> Innocent, young, appealing</li>
                                    <li><strong>Small eyes:</strong> Mysterious, wise, or menacing</li>
                                    <li><strong>Wide-set eyes:</strong> Friendly, open personality</li>
                                    <li><strong>Close-set eyes:</strong> Intense, focused character</li>
                                </ul>
                                
                                <h5>Mouth and Expression:</h5>
                                <ul>
                                    <li><strong>Curved up:</strong> Happy, friendly, optimistic</li>
                                    <li><strong>Curved down:</strong> Sad, grumpy, pessimistic</li>
                                    <li><strong>Straight line:</strong> Neutral, serious, determined</li>
                                    <li><strong>Open mouth:</strong> Surprised, speaking, energetic</li>
                                </ul>
                            </div>
                            
                            <h4>Proportion Guidelines for Different Ages:</h4>
                            <ul>
                                <li><strong>Children:</strong> Larger heads relative to body, bigger eyes, shorter proportions</li>
                                <li><strong>Adults:</strong> Head about 1/6 to 1/8 of total height, balanced proportions</li>
                                <li><strong>Elderly:</strong> Slightly smaller stature, different posture, distinctive features</li>
                            </ul>

                            <h4>Cultural Sensitivity in Feature Design:</h4>
                            <p>Creating inclusive character features:</p>
                            <ul>
                                <li><strong>Diverse Features:</strong> Represent various ethnic backgrounds naturally</li>
                                <li><strong>Avoid Caricature:</strong> Don't exaggerate ethnic features in harmful ways</li>
                                <li><strong>Universal Emotions:</strong> Focus on expressions that transcend cultural boundaries</li>
                                <li><strong>Respectful Research:</strong> Understand cultural significance of design elements</li>
                            </ul>

                            <h4>Clothing and Accessory Design:</h4>
                            <ul>
                                <li><strong>Functional Details:</strong> Clothing should suggest character's role or background</li>
                                <li><strong>Cultural Accuracy:</strong> Research traditional clothing before incorporating elements</li>
                                <li><strong>Personality Expression:</strong> Neat vs messy, formal vs casual, practical vs decorative</li>
                                <li><strong>Simplification:</strong> Reduce complex clothing to essential readable elements</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Cultural Awareness:</strong> When designing characters from cultures other than your own, research respectfully and consider consulting with people from those communities. Avoid stereotypical or sacred elements unless you understand their significance.</p>
                            </div>

                            <h4>Advanced Character Development:</h4>
                            <ul>
                                <li><strong>Character Relationships:</strong> Design characters that visually belong together</li>
                                <li><strong>Style Consistency:</strong> Maintain consistent art style across all characters</li>
                                <li><strong>Hierarchy:</strong> Important characters should be more visually complex</li>
                                <li><strong>Memorability:</strong> Include one distinctive feature that makes each character unique</li>
                            </ul>

                            <div class="task-container">
                                <h4>🎯 Your Task: Character Feature Development</h4>
                                <p><strong>Assignment:</strong> Create a character face that demonstrates clear emotional expression and age-appropriate proportions:</p>
                                
                                <div class="task-checklist">
                                    <h5>Required Elements:</h5>
                                    <ul class="checklist">
                                        <li><strong>Step 1 - Choose an Age:</strong> Child, adult, or elderly character (each has different proportion rules)</li>
                                        <li><strong>Step 2 - Select an Emotion:</strong> Happy, sad, angry, surprised, or determined</li>
                                        <li><strong>Step 3 - Design Clear Eyes:</strong> Use appropriate size for age and expression</li>
                                        <li><strong>Step 4 - Create Expressive Mouth:</strong> Match the emotion with appropriate mouth shape</li>
                                        <li><strong>Step 5 - Add Personality Details:</strong> Hair, accessories, or clothing that support character's story</li>
                                    </ul>
                                </div>
                                
                                <div class="task-requirements">
                                    <h5>Success Criteria:</h5>
                                    <ul>
                                        <li>Expression should be clear and unmistakable at small size</li>
                                        <li>Age should be apparent through proportions (head size, eye size, posture)</li>
                                        <li>Features must be culturally sensitive and respectful</li>
                                        <li>Character should have one memorable, distinctive feature</li>
                                        <li>Design works within 32×32 pixel constraint</li>
                                    </ul>
                                </div>
                                
                                <div class="example-reference">
                                    <p><strong>📝 Design Process:</strong></p>
                                    <ol>
                                        <li>Start with basic head shape appropriate for chosen age</li>
                                        <li>Place eyes at correct position and size for age group</li>
                                        <li>Add mouth that clearly shows chosen emotion</li>
                                        <li>Include defining details (hair, clothing, accessories)</li>
                                        <li>Test readability - can others identify age and emotion?</li>
                                    </ol>
                                </div>
                                
                                <div class="tip-box">
                                    <p><strong>💡 Pro Tip:</strong> Remember that children have larger heads relative to their bodies, and eyes positioned lower on the face. Adults have more balanced proportions, while elderly characters may have smaller eyes and different postures.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="week3-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'layered',
                    gridSize: 32,
                    colors: ['#2C3E50', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#ECF0F1', '#9B59B6', '#1ABC9C', '#E67E22', '#95A5A6']
                }
            },
            challenge: {
                title: "Challenge: Character Design",
                content: `
                    <h2>Challenge: Complete Character Creation</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Character Design Masterpiece</h3>
                            <p>Create a complete, original character that demonstrates mastery of silhouette design, color theory, cultural sensitivity, and professional pixel art techniques.</p>
                            
                            <div class="info-box">
                                <h4>Character Brief Options:</h4>
                                <p>Choose one character archetype and make it your own:</p>
                                <ul>
                                    <li><strong>The Adventurous Explorer:</strong> Someone who discovers new places and cultures</li>
                                    <li><strong>The Wise Mentor:</strong> A teacher or guide who helps others grow</li>
                                    <li><strong>The Creative Inventor:</strong> Someone who builds and creates amazing things</li>
                                    <li><strong>The Brave Protector:</strong> A character who stands up for others</li>
                                    <li><strong>The Mysterious Wanderer:</strong> Someone with secrets and hidden depths</li>
                                </ul>
                            </div>
                            
                            <h4>Professional Design Process:</h4>
                            <ol>
                                <li><strong>Character Concept:</strong> Define personality, background, and role</li>
                                <li><strong>Cultural Research:</strong> If incorporating cultural elements, research respectfully</li>
                                <li><strong>Silhouette Design:</strong> Create strong, recognizable outline using guide layer</li>
                                <li><strong>Shape Language:</strong> Apply psychological shape principles</li>
                                <li><strong>Color Palette:</strong> Choose 6-8 colors that support personality</li>
                                <li><strong>Feature Design:</strong> Add personality through facial features and expression</li>
                                <li><strong>Costume Design:</strong> Clothing and accessories that tell the character's story</li>
                                <li><strong>Final Polish:</strong> Refine every pixel for professional quality</li>
                            </ol>
                            
                            <h4>Layer Usage Strategy:</h4>
                            <ul>
                                <li><strong>Guide Layer:</strong> Use for reference silhouette or proportions</li>
                                <li><strong>Main Layer:</strong> Character base, primary colors, and main features</li>
                                <li><strong>Toggle Guide:</strong> Hide/show reference layer to check your progress</li>
                            </ul>

                            <h4>Quality Assessment Criteria:</h4>
                            <ul>
                                <li>✓ <strong>Silhouette Test:</strong> Instantly recognizable as character archetype</li>
                                <li>✓ <strong>Personality Expression:</strong> Clear character traits visible in design</li>
                                <li>✓ <strong>Cultural Sensitivity:</strong> Respectful and inclusive representation</li>
                                <li>✓ <strong>Color Harmony:</strong> Cohesive palette supporting character personality</li>
                                <li>✓ <strong>Technical Excellence:</strong> Clean, professional pixel art execution</li>
                                <li>✓ <strong>Originality:</strong> Unique interpretation of the chosen archetype</li>
                            </ul>

                            <h4>Cultural Sensitivity Checklist:</h4>
                            <ul>
                                <li>Have I researched any cultural elements I'm incorporating?</li>
                                <li>Does my character avoid harmful stereotypes?</li>
                                <li>Would this character make players from diverse backgrounds feel welcome?</li>
                                <li>Am I representing diversity naturally rather than tokenistically?</li>
                                <li>Have I considered consulting with relevant communities?</li>
                            </ul>

                            <div class="tip-box">
                                <p><strong>💡 Pro Tip:</strong> Great character design tells a story. Before placing your first pixel, write 2-3 sentences about who this character is, what they want, and what makes them unique.</p>
                            </div>

                            <h4>Advanced Techniques to Explore:</h4>
                            <ul>
                                <li><strong>Asymmetrical Details:</strong> Add visual interest with subtle asymmetry</li>
                                <li><strong>Focal Hierarchy:</strong> Draw attention to the most important features</li>
                                <li><strong>Color Temperature:</strong> Use warm/cool colors to enhance personality</li>
                                <li><strong>Texture Suggestion:</strong> Imply different materials through pixel patterns</li>
                                <li><strong>Secondary Characteristics:</strong> Small details that hint at backstory</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Portfolio Quality Standard:</strong> This character should be good enough to include in a professional portfolio. Take time to refine and polish - every pixel should serve the design.</p>
                            </div>
                        </div>
                        
                        <div id="week3-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'layered',
                    gridSize: 32,
                    colors: ['#2C3E50', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#ECF0F1', '#9B59B6', '#1ABC9C', '#E67E22', '#95A5A6', '#34495E', '#C0392B']
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 3 Comprehensive Assessment</h2>
                    
                    <p>Evaluate your character design mastery through this comprehensive knowledge and practical assessment!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What is the most important test of effective character design?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using the maximum number of available colors</div>
                            <div class="quiz-option" data-correct="true">The silhouette test - character is recognizable as a black shape</div>
                            <div class="quiz-option" data-correct="false">Including as many details as possible in the available space</div>
                            <div class="quiz-option" data-correct="false">Making the character look realistic</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> The silhouette test is fundamental to character design. If a character reads clearly as a black shape, it will be recognizable at any size and in any context. Strong silhouettes are the foundation of memorable character design.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: In shape language psychology, what do curved shapes typically communicate?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Danger and aggression</div>
                            <div class="quiz-option" data-correct="true">Friendliness and approachability</div>
                            <div class="quiz-option" data-correct="false">Stability and reliability</div>
                            <div class="quiz-option" data-correct="false">Intelligence and wisdom</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Curved shapes are psychologically associated with softness, friendliness, and approachability. They suggest safety and comfort, making characters feel more welcoming to audiences.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: When designing characters from diverse cultural backgrounds, what is the most important consideration?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Making them look as different as possible from other characters</div>
                            <div class="quiz-option" data-correct="false">Using traditional clothing from their culture</div>
                            <div class="quiz-option" data-correct="true">Avoiding stereotypes while creating respectful, authentic representation</div>
                            <div class="quiz-option" data-correct="false">Making them blend in with existing characters</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Respectful representation requires avoiding harmful stereotypes while creating authentic characters. This often involves research, community consultation, and focusing on individual personality rather than cultural assumptions.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: What is the primary purpose of using layers in character design?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">To use more colors in the design</div>
                            <div class="quiz-option" data-correct="true">To organize complex artwork and maintain reference guides</div>
                            <div class="quiz-option" data-correct="false">To make the file size larger</div>
                            <div class="quiz-option" data-correct="false">To slow down the design process</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Layers help organize complex artwork, maintain reference guides (like silhouettes or proportions), and allow for non-destructive editing. They're essential for professional character design workflows.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 5: Which character proportions typically suggest youth or innocence?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="true">Larger head relative to body size</div>
                            <div class="quiz-option" data-correct="false">Smaller head relative to body size</div>
                            <div class="quiz-option" data-correct="false">Very tall and thin proportions</div>
                            <div class="quiz-option" data-correct="false">Perfectly realistic human proportions</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Larger heads relative to body size mimic child proportions and trigger psychological responses associated with youth, innocence, and the need for protection.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 6: What should be the primary consideration when choosing colors for a character?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using as many bright colors as possible</div>
                            <div class="quiz-option" data-correct="true">Supporting the character's personality and cultural appropriateness</div>
                            <div class="quiz-option" data-correct="false">Matching colors used in other games</div>
                            <div class="quiz-option" data-correct="false">Using only realistic colors</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Color choices should reinforce the character's personality while being culturally appropriate and sensitive. Colors carry emotional and cultural associations that should support your design goals.</p>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>Practical Assessment Requirements</h3>
                        <p>To demonstrate mastery of Week 3 concepts, ensure you have completed:</p>
                        <ul>
                            <li>✓ <strong>Silhouette Mastery:</strong> Created clear, recognizable character silhouettes</li>
                            <li>✓ <strong>Shape Language:</strong> Applied curved and angular shapes purposefully</li>
                            <li>✓ <strong>Feature Design:</strong> Added personality through facial features and proportions</li>
                            <li>✓ <strong>Complete Character:</strong> Designed professional-quality 32×32 character</li>
                            <li>✓ <strong>Cultural Sensitivity:</strong> Demonstrated inclusive design awareness</li>
                            <li>✓ <strong>Layer Workflow:</strong> Used layers effectively for complex artwork</li>
                        </ul>
                        
                        <div class="tip-box">
                            <h4>Self-Assessment Questions:</h4>
                            <ul>
                                <li>Are your characters instantly recognizable from their silhouettes?</li>
                                <li>Do your shape choices support the character's personality?</li>
                                <li>Have you considered cultural sensitivity in your designs?</li>
                                <li>Can you communicate character traits through minimal details?</li>
                                <li>Are you comfortable using layers for complex artwork?</li>
                            </ul>
                        </div>
                        
                        <p><strong>Ready for Week 4?</strong> You should feel confident creating memorable characters and be excited to explore environmental design and world-building!</p>
                    </div>

                    <div class="info-box mt-2">
                        <h3>🌟 Congratulations on Character Design Mastery!</h3>
                        <p>You've developed sophisticated character creation skills that balance artistic expression with cultural sensitivity. The ability to create memorable, inclusive characters is a valuable professional skill.</p>
                        
                        <p><strong>What You've Achieved:</strong></p>
                        <ul>
                            <li>Mastered silhouette design and shape language principles</li>
                            <li>Learned to create diverse, culturally sensitive characters</li>
                            <li>Developed professional layer workflow techniques</li>
                            <li>Applied color theory to character personality expression</li>
                            <li>Created portfolio-quality character artwork</li>
                        </ul>
                        
                        <p><strong>Next Week Preview:</strong> We'll explore environmental design and tilemap creation - building the worlds where your characters will live and adventure!</p>
                    </div>
                `
            }
        }
    },
    // Week 4: Environment Art and Tilemaps
    week4: {
        title: "Environment Art and Tilemaps",
        tabs: {
            overview: {
                title: "Overview",
                content: `
                    <h2>Week 4: Environment Art and Tilemaps</h2>
                    
                    <div class="info-box">
                        <h3>Learning Objectives</h3>
                        <ul>
                            <li>Master seamless tile creation techniques</li>
                            <li>Design cohesive environment tilesets</li>
                            <li>Create atmospheric backgrounds and scenes</li>
                            <li>Understand tile-based level construction</li>
                            <li>Apply environmental storytelling principles</li>
                            <li>Integrate characters with environmental designs</li>
                        </ul>
                    </div>

                    <p>This week explores the art of creating game environments through tiles and environmental art. You'll learn how to create seamless patterns, design modular tilesets, and build atmospheric game worlds that support and enhance your character designs.</p>

                    <p>Environmental art in pixel games serves multiple purposes: it sets the mood, guides player movement, tells stories about the game world, and provides the stage where your characters perform. Every environmental choice contributes to the player's emotional experience.</p>

                    <h3>Environmental Challenges</h3>
                    <ul>
                        <li><strong>Concepts:</strong> Seamless tile design and environmental storytelling</li>
                        <li><strong>Practice 1:</strong> Basic seamless patterns and tile mathematics</li>
                        <li><strong>Practice 2:</strong> Creating tile variations and environmental diversity</li>
                        <li><strong>Challenge:</strong> Design a complete environment tileset with live preview</li>
                        <li><strong>Assessment:</strong> Environmental design knowledge and portfolio evaluation</li>
                    </ul>

                    <h3>The Mathematics of Seamless Design</h3>
                    <p>Creating tiles that connect perfectly requires understanding edge relationships and pattern mathematics. You'll master the technical skills needed for professional tile creation while maintaining artistic quality.</p>

                    <div class="tip-box">
                        <p><strong>💡 Environment Focus:</strong> Great environmental art supports gameplay and storytelling while remaining visually interesting but not distracting from character action.</p>
                    </div>

                    <h3>Cultural Sensitivity in World Building</h3>
                    <p>Environmental design choices carry cultural implications. We'll explore how to create inclusive game worlds that draw inspiration respectfully from diverse cultures while avoiding appropriation or stereotyping.</p>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Environmental Design Fundamentals</h2>
                    
                    <h3>Understanding Seamless Tiles</h3>
                    <p>Seamless tiles are the foundation of efficient game world construction. A properly designed tile connects perfectly with copies of itself and other tiles in the set.</p>
                    
                    <div class="info-box">
                        <p><strong>Seamless Tile Principles:</strong></p>
                        <ul>
                            <li><strong>Edge Continuity:</strong> Left edge pixels must match right edge pixels</li>
                            <li><strong>Corner Precision:</strong> All four corners must align perfectly</li>
                            <li><strong>Pattern Flow:</strong> Visual elements should create natural-looking repetition</li>
                            <li><strong>Variation Balance:</strong> Enough variety to avoid obvious repetition</li>
                        </ul>
                    </div>

                    <div style="text-align: center; margin: 20px 0;">
                        <img src="images/examples/seamless-grass-tile.svg" alt="Example of seamless grass tile showing original tile next to identical copy with matching edges" class="pixel-example" style="width: 400px; height: auto;"/>
                        <p class="example-caption">Example: Seamless grass tile demonstrating perfect edge alignment</p>
                    </div>

                    <h3>Types of Environmental Elements</h3>
                    <p>Different environmental elements serve different purposes:</p>
                    <ul>
                        <li><strong>Ground Tiles:</strong> Walkable surfaces that define player movement areas</li>
                        <li><strong>Wall Tiles:</strong> Barriers that block movement and define space boundaries</li>
                        <li><strong>Decoration Tiles:</strong> Non-functional elements that add visual interest</li>
                        <li><strong>Transition Tiles:</strong> Elements that blend different environmental zones</li>
                        <li><strong>Interactive Elements:</strong> Environmental objects players can engage with</li>
                    </ul>

                    <h3>Environmental Storytelling</h3>
                    <p>Game environments tell stories without words:</p>
                    
                    <div class="tip-box">
                        <h4>Storytelling Through Environment:</h4>
                        <ul>
                            <li><strong>Wear and Age:</strong> Cracks, moss, and damage suggest history</li>
                            <li><strong>Human Presence:</strong> Tools, furniture, and paths show habitation</li>
                            <li><strong>Natural Forces:</strong> Weather effects, erosion, and growth patterns</li>
                            <li><strong>Cultural Elements:</strong> Architecture and decoration reveal civilizations</li>
                            <li><strong>Emotional Atmosphere:</strong> Light, color, and composition affect mood</li>
                        </ul>
                    </div>

                    <h3>Tile Mathematics and Grid Systems</h3>
                    <p>Understanding the mathematical relationships in tile design:</p>
                    <ul>
                        <li><strong>16×16 Standard:</strong> Most common tile size, balances detail with efficiency</li>
                        <li><strong>32×32 Detailed:</strong> Allows more complex environmental elements</li>
                        <li><strong>8×8 Retro:</strong> Classic arcade style with extreme constraints</li>
                        <li><strong>Mixed Sizes:</strong> Combining different tile sizes for variety</li>
                    </ul>

                    <h3>Live Preview Systems</h3>
                    <p>Modern tile design benefits from real-time pattern preview:</p>
                    <ul>
                        <li><strong>3×3 Tiling:</strong> Shows how tiles repeat in small groups</li>
                        <li><strong>Edge Checking:</strong> Immediately reveals alignment problems</li>
                        <li><strong>Pattern Recognition:</strong> Helps identify and fix obvious repetition</li>
                        <li><strong>Flow Analysis:</strong> Ensures natural visual movement across tiles</li>
                    </ul>

                    <h3>Cultural Considerations in Environmental Design</h3>
                    <p>Creating inclusive and respectful environmental art:</p>
                    
                    <div class="warning-box">
                        <h4>Cultural Sensitivity Guidelines:</h4>
                        <ul>
                            <li><strong>Research Respectfully:</strong> Understand cultural significance before using elements</li>
                            <li><strong>Avoid Sacred Imagery:</strong> Don't casually use religious or sacred symbols</li>
                            <li><strong>Generic Fantasy:</strong> Create original cultures rather than copying existing ones</li>
                            <li><strong>Universal Elements:</strong> Focus on natural environments and universal human experiences</li>
                            <li><strong>Community Consultation:</strong> Seek feedback from relevant cultural communities</li>
                        </ul>
                    </div>

                    <h3>Color and Atmosphere in Environments</h3>
                    <p>Environmental color choices shape player emotions:</p>
                    <ul>
                        <li><strong>Warm Environments:</strong> Oranges, reds, yellows create comfort and energy</li>
                        <li><strong>Cool Environments:</strong> Blues, greens, purples suggest calm or mystery</li>
                        <li><strong>Monochromatic Schemes:</strong> Single color ranges create strong moods</li>
                        <li><strong>Accent Colors:</strong> Small pops of contrasting color draw attention</li>
                        <li><strong>Time of Day:</strong> Different lighting suggests different times and moods</li>
                    </ul>

                    <h3>Integration with Character Design</h3>
                    <p>Environments must work harmoniously with characters:</p>
                    <ul>
                        <li><strong>Contrast Balance:</strong> Environments should support, not compete with characters</li>
                        <li><strong>Style Consistency:</strong> Same artistic approach for characters and environments</li>
                        <li><strong>Color Harmony:</strong> Environmental palettes that complement character colors</li>
                        <li><strong>Scale Relationships:</strong> Environmental elements appropriately sized for characters</li>
                    </ul>

                    <h3>Professional Environmental Workflow</h3>
                    <ol>
                        <li><strong>Concept Phase:</strong> Define environmental mood, purpose, and cultural context</li>
                        <li><strong>Research Phase:</strong> Study real-world references and cultural appropriateness</li>
                        <li><strong>Palette Creation:</strong> Establish harmonious color schemes</li>
                        <li><strong>Base Tile Design:</strong> Create fundamental seamless elements</li>
                        <li><strong>Variation Development:</strong> Add diversity while maintaining consistency</li>
                        <li><strong>Integration Testing:</strong> Verify tiles work well with character designs</li>
                        <li><strong>Cultural Review:</strong> Ensure respectful and appropriate representation</li>
                    </ol>

                    <div class="info-box">
                        <p><strong>Professional Insight:</strong> Great environmental design is invisible to players - it feels so natural and appropriate that they don't consciously notice it, but it strongly influences their emotional experience and immersion in the game world.</p>
                    </div>
                `
            },
            practice1: {
                title: "Practice 1: Seamless Patterns",
                content: `
                    <h2>Practice 1: Top-Down Grass Tile Creation</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Creating Seamless Top-Down Grass Tiles</h3>
                            <p>Learn to create grass textures viewed from above (top-down perspective) that tile seamlessly. This is a fundamental skill for creating ground textures in many 2D games, especially RPGs and strategy games.</p>
                            
                            <div class="info-box">
                                <p><strong>Video Tutorial:</strong> <a href="https://www.youtube.com/watch?v=W9bpaSrytBM" target="_blank">Creating Seamless Grass Textures in Pixel Art</a> - Watch this demonstration of professional grass tile techniques.</p>
                            </div>

                            <div class="info-box">
                                <p><strong>Additional Resources:</strong> <a href="https://lospec.com/pixel-art-tutorials/tags/grass" target="_blank">Lospec Grass Tutorials Collection</a> - Browse multiple approaches to creating pixel art grass textures.</p>
                            </div>
                            
                            <h4>Top-Down Grass Tile Challenges:</h4>
                            <ol>
                                <li><strong>Grass Blade Patterns:</strong> Create varied grass blade shapes as seen from above</li>
                                <li><strong>Color Variation:</strong> Use 3-4 shades of green for depth and variety</li>
                                <li><strong>Edge Alignment:</strong> Ensure grass patterns flow seamlessly across tile borders</li>
                                <li><strong>Natural Randomness:</strong> Avoid obvious geometric patterns in grass placement</li>
                                <li><strong>Live Preview Testing:</strong> Use the 3×3 preview to verify seamless repetition</li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Edge Mathematics:</strong> The pixel at position (0,0) must match the pixel at (15,0), (0,15), and (15,15) for perfect tiling in a 16×16 tile.</p>
                            </div>
                            
                            <h4>Top-Down Grass Design Techniques:</h4>
                            <ul>
                                <li><strong>Grass Blade Shapes:</strong> Create short, irregular shapes representing grass viewed from above</li>
                                <li><strong>Clumping Patterns:</strong> Group grass blades in natural clusters with gaps between</li>
                                <li><strong>Color Depth:</strong> Use darker greens for shadows between blades, lighter for tips</li>
                                <li><strong>Edge Flow:</strong> Ensure grass patterns continue naturally across tile boundaries</li>
                                <li><strong>Organic Distribution:</strong> Avoid grid-like placement of grass elements</li>
                            </ul>

                            <h4>Common Top-Down Grass Mistakes:</h4>
                            <ul>
                                <li><strong>Side-View Grass:</strong> Drawing grass blades as if viewed from the side instead of above</li>
                                <li><strong>Too Uniform:</strong> Making all grass blades the same size and color</li>
                                <li><strong>Grid Pattern:</strong> Placing grass elements in obvious rows and columns</li>
                                <li><strong>Edge Breaks:</strong> Grass patterns that don't continue across tile edges</li>
                                <li><strong>Wrong Scale:</strong> Individual blades too large or detailed for top-down view</li>
                            </ul>

                            <h4>Top-Down Grass Inspiration:</h4>
                            <div class="tip-box">
                                <h5>Real-World References:</h5>
                                <ul>
                                    <li><strong>Lawn Texture:</strong> Look at grass from above in yards and parks</li>
                                    <li><strong>Aerial Photos:</strong> Study satellite images of grassy areas</li>
                                    <li><strong>Game References:</strong> Analyze grass tiles in successful 2D games</li>
                                    <li><strong>Texture Libraries:</strong> Study seamless grass textures in game asset stores</li>
                                </ul>
                            </div>

                            <h4>Cultural Sensitivity in Environmental Textures:</h4>
                            <p>When creating environmental elements:</p>
                            <ul>
                                <li><strong>Natural Elements:</strong> Focus on universal natural textures</li>
                                <li><strong>Generic Materials:</strong> Avoid culturally specific architectural elements</li>
                                <li><strong>Research Carefully:</strong> If using cultural motifs, understand their significance</li>
                                <li><strong>Universal Appeal:</strong> Create environments that feel welcoming to diverse players</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Live Preview Usage:</strong> The 3×3 preview shows how your tile repeats. Use it constantly while designing to catch edge alignment problems immediately.</p>
                            </div>

                            <h4>Professional Quality Standards:</h4>
                            <ul>
                                <li>Perfect edge alignment with no visible seams</li>
                                <li>Natural-looking repetition without obvious patterns</li>
                                <li>Appropriate detail level for intended viewing distance</li>
                                <li>Color harmony that supports overall environmental palette</li>
                                <li>Cultural appropriateness and inclusive design</li>
                            </ul>
                        </div>
                        
                        <div id="week4-practice1-canvas"></div>
                        <div class="tile-preview">
                            <h4>Live Tiling Preview (3×3)</h4>
                            <div id="week4-practice1-preview"></div>
                        </div>
                    </div>
                `,
                canvas: {
                    type: 'tile',
                    gridSize: 16,
                    colors: ['#228B22', '#32CD32', '#90EE90', '#006400', '#8B4513', '#D2691E', '#F4A460', '#DEB887'],
                    showPreview: true
                }
            },
            practice2: {
                title: "Practice 2: Tile Variations",
                content: `
                    <h2>Practice 2: Creating Environmental Diversity</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Building Cohesive Tile Families</h3>
                            <p>Learn to create multiple tiles that work together while maintaining visual consistency. This skill is essential for building interesting, varied game environments.</p>
                            
                            <div class="info-box">
                                <p><strong>Video Tutorial:</strong> <a href="https://www.slynyrd.com/blog/2019/8/27/pixelblog-20-top-down-tiles" target="_blank">SLYNYRD's Top-Down Tiles Tutorial</a> - Learn professional techniques for creating cohesive tile variations.</p>
                            </div>

                            <div class="info-box">
                                <p><strong>Complete Guide:</strong> <a href="https://www.sandromaglione.com/articles/how-to-create-a-pixel-art-tileset-complete-guide" target="_blank">How to Create a Pixel Art Tileset</a> - Comprehensive tutorial covering tile variations and environmental diversity.</p>
                            </div>

                            <div class="info-box">
                                <p><strong>Advanced Techniques:</strong> <a href="https://pinnguaq.com/learn/pixel-art/pixel-art-3c-tile-permutations-in-graphicsgale/" target="_blank">Pinnguaq's Tile Permutations Tutorial</a> - Learn how to create transitional tiles for natural environmental blending.</p>
                            </div>

                            <div style="text-align: center; margin: 20px 0;">
                                <img src="images/examples/grass-variation-family.svg" alt="Example showing four grass tile variations: base grass, grass with flowers, grass with rocks, and dense grass" class="pixel-example" style="width: 300px; height: auto;"/>
                                <p class="example-caption">Example: 2D side-on grass tile family showing base tile plus three variations</p>
                            </div>
                            
                            <div class="warning-box">
                                <p><strong>Perspective Note:</strong> The grass variations shown above are designed for 2D side-on/platformer games where you see grass from the side. For top-down games (like RPGs), grass would look different - more like scattered dots and patches viewed from above, as practiced in Week 4 Practice 1.</p>
                            </div>
                            
                            <h4>Tile Family Development:</h4>
                            <ol>
                                <li><strong>Base Texture:</strong> Start with one seamless tile as your foundation</li>
                                <li><strong>Subtle Variations:</strong> Create 2-3 variations with small differences</li>
                                <li><strong>Edge Transitions:</strong> Design tiles that blend between different textures</li>
                                <li><strong>Special Elements:</strong> Add unique tiles with distinctive features</li>
                                <li><strong>Corner Pieces:</strong> Create tiles for corners and intersections</li>
                            </ol>
                            
                            <h4>Variation Techniques:</h4>
                            <ul>
                                <li><strong>Color Shifts:</strong> Slight hue or saturation changes for variety</li>
                                <li><strong>Detail Addition:</strong> Small rocks, flowers, or wear patterns</li>
                                <li><strong>Density Changes:</strong> More or fewer texture elements</li>
                                <li><strong>Directional Elements:</strong> Grass blowing, water flowing</li>
                                <li><strong>Weathering Effects:</strong> Age, damage, or growth patterns</li>
                            </ul>

                            <div class="tip-box">
                                <p><strong>💡 Consistency Key:</strong> All variations should feel like they belong in the same world. Maintain consistent lighting, color temperature, and artistic style across all tiles.</p>
                            </div>
                            
                            <h4>Environmental Storytelling Through Tiles:</h4>
                            <ul>
                                <li><strong>Pathways:</strong> Worn areas suggesting foot traffic</li>
                                <li><strong>Natural Growth:</strong> Plants breaking through stone</li>
                                <li><strong>Human Impact:</strong> Tool marks, construction, or decay</li>
                                <li><strong>Time Passage:</strong> Weathering, erosion, or seasonal changes</li>
                                <li><strong>Hidden Details:</strong> Small elements that reward close observation</li>
                            </ul>

                            <h4>Tile Transition Strategies:</h4>
                            <div class="info-box">
                                <h5>Blending Different Materials:</h5>
                                <ul>
                                    <li><strong>Gradient Transitions:</strong> Gradual change from one material to another</li>
                                    <li><strong>Organic Edges:</strong> Natural, irregular boundaries between textures</li>
                                    <li><strong>Overlay Elements:</strong> Scattered details that bridge different surfaces</li>
                                    <li><strong>Elevation Changes:</strong> Height differences that justify material changes</li>
                                </ul>
                            </div>

                            <h4>Cultural Considerations in Environmental Storytelling:</h4>
                            <p>When adding cultural elements to environments:</p>
                            <ul>
                                <li><strong>Universal Themes:</strong> Focus on shared human experiences</li>
                                <li><strong>Natural Elements:</strong> Emphasize natural rather than cultural wear patterns</li>
                                <li><strong>Generic Tools:</strong> Avoid culturally specific implements or symbols</li>
                                <li><strong>Respectful Research:</strong> If adding cultural elements, understand their significance</li>
                            </ul>

                            <h4>Advanced Tile Design Concepts:</h4>
                            <ul>
                                <li><strong>Modular Systems:</strong> Tiles that combine in multiple ways</li>
                                <li><strong>Layered Details:</strong> Background base with foreground elements</li>
                                <li><strong>Seasonal Variations:</strong> Same location in different weather/seasons</li>
                                <li><strong>Damage States:</strong> Pristine to worn versions of the same tile</li>
                                <li><strong>Interactive Elements:</strong> Tiles that suggest player interaction</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Avoid Over-Variation:</strong> Too many different tiles can make environments feel chaotic. Aim for subtle variation that adds interest without overwhelming the player.</p>
                            </div>

                            <h4>Rule Tiles for Automated World Building</h4>
                            <p>Once you've mastered manual tile variations, rule tiles can automate much of the world-building process by intelligently choosing which tiles to place based on their surroundings.</p>

                            <div class="info-box">
                                <p><strong>Unity Rule Tiles Tutorial:</strong> <a href="https://learn.unity.com/tutorial/using-rule-tiles" target="_blank">Unity Learn - Using Rule Tiles</a> - Official tutorial for implementing automated tiling systems.</p>
                            </div>

                            <div class="info-box">
                                <p><strong>Video Tutorial:</strong> <a href="https://www.bitchute.com/video/XLrgP65BfhOw/" target="_blank">Auto Tiling with Rule Tiles in Unity 2022</a> - Step-by-step pixel art tileset implementation with rule tiles.</p>
                            </div>

                            <h5>What Are Rule Tiles?</h5>
                            <p>Rule tiles automatically choose which sprite to display based on the tiles around them. Instead of manually placing each tile variation, you paint with one brush and the system selects the appropriate tile based on predefined rules.</p>

                            <h5>Rule Tile Benefits for Pixel Artists:</h5>
                            <ul>
                                <li><strong>Rapid Prototyping:</strong> Quickly paint large areas and let the system handle transitions</li>
                                <li><strong>Consistent Logic:</strong> Tiles always connect properly according to your rules</li>
                                <li><strong>Easy Iteration:</strong> Modify rules to instantly update entire levels</li>
                                <li><strong>Reduced Errors:</strong> No manual placement mistakes or forgotten edge cases</li>
                                <li><strong>Artist-Friendly:</strong> Focus on creating art rather than tedious placement</li>
                            </ul>

                            <h5>Setting Up Rule Tiles (Unity Workflow):</h5>
                            <ol>
                                <li><strong>Install 2D Tilemap Extras:</strong> Get Unity's 2D-extras package for rule tile functionality</li>
                                <li><strong>Create Rule Tile Asset:</strong> Make a new Rule Tile asset in your project</li>
                                <li><strong>Add Sprite Variations:</strong> Import all your tile variations (base, corners, edges, etc.)</li>
                                <li><strong>Define Rules:</strong> Set grid patterns for when each sprite should appear</li>
                                <li><strong>Paint and Test:</strong> Use the rule tile brush to paint areas and see automatic adaptation</li>
                            </ol>

                            <div class="tip-box">
                                <p><strong>💡 Rule Tile Strategy:</strong> Start by creating a complete set of manual tile variations (like the grass family above). Then use these variations as the sprites in your rule tile system for fully automated world building.</p>
                            </div>

                            <h5>Rule Patterns You'll Need:</h5>
                            <ul>
                                <li><strong>Interior Tiles:</strong> Surrounded by the same material on all sides</li>
                                <li><strong>Edge Tiles:</strong> Different sprites for top, bottom, left, right edges</li>
                                <li><strong>Corner Tiles:</strong> Internal and external corners (8 variations)</li>
                                <li><strong>Single Tiles:</strong> Isolated tiles with no neighbors</li>
                                <li><strong>End Caps:</strong> Terminal points of paths or structures</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Learning Path:</strong> Master manual tile creation first (as practiced in this exercise), then move to rule tiles for automation. Understanding manual techniques helps you design better rule systems.</p>
                            </div>
                        </div>
                        
                        <div id="week4-practice2-canvas"></div>
                        <div class="tile-preview">
                            <h4>Live Tiling Preview (3×3)</h4>
                            <div id="week4-practice2-preview"></div>
                        </div>
                    </div>
                `,
                canvas: {
                    type: 'tile',
                    gridSize: 16,
                    colors: ['#8B4513', '#CD853F', '#F4A460', '#DEB887', '#228B22', '#32CD32', '#654321', '#D2691E', '#90EE90', '#FFFFE0'],
                    showPreview: true
                }
            },
            challenge: {
                title: "Challenge: Environment Tileset",
                content: `
                    <h2>Challenge: Complete Environmental Tileset</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Environmental Masterpiece</h3>
                            <p>Create a cohesive environmental tileset that demonstrates mastery of seamless design, cultural sensitivity, and professional environmental art techniques.</p>
                            
                            <div class="warning-box">
                                <h4>Perspective Focus: Top-Down View</h4>
                                <p>For this challenge, create tiles from a <strong>top-down perspective</strong> (bird's eye view). This perspective is ideal for RPGs, strategy games, and adventure games where players look down at the world from above.</p>
                            </div>

                            <div class="info-box">
                                <h4>Top-Down Environment Themes:</h4>
                                <p>Choose one theme and create a professional tileset as seen from above:</p>
                                <ul>
                                    <li><strong>Grass Plains:</strong> Various grass textures with dirt paths and scattered flowers</li>
                                    <li><strong>Stone Courtyard:</strong> Flagstone tiles with moss, cracks, and weathering</li>
                                    <li><strong>Forest Floor:</strong> Dirt, fallen leaves, tree roots, and undergrowth</li>
                                    <li><strong>Desert Terrain:</strong> Sand dunes, rocky patches, and sparse vegetation</li>
                                    <li><strong>Cave Interior:</strong> Stone floors with stalactites shadows and moisture</li>
                                </ul>
                            </div>

                            <div style="text-align: center; margin: 20px 0;">
                                <img src="images/examples/reference-tiles-topdown.svg" alt="Reference examples showing grass, stone, and dirt tiles from top-down perspective" class="pixel-example" style="width: 400px; height: auto;"/>
                                <p class="example-caption">Reference tiles: Use these as starting points or inspiration for your environment</p>
                            </div>
                            
                            <div class="tip-box">
                                <h4>Getting Started with References:</h4>
                                <ol>
                                    <li><strong>Choose Your Base:</strong> Pick one of the reference tiles above as inspiration</li>
                                    <li><strong>Modify Colors:</strong> Adjust colors to match your chosen environment theme</li>
                                    <li><strong>Add Personal Touch:</strong> Include unique elements that make it your own</li>
                                    <li><strong>Test Seamless Edges:</strong> Ensure your tile works when repeated</li>
                                    <li><strong>Create Variations:</strong> Make 2-3 versions for visual diversity</li>
                                </ol>
                            </div>

                            <h4>Professional Tileset Creation Process:</h4>
                            <ol>
                                <li><strong>Reference Selection:</strong> Choose which reference tile best matches your theme</li>
                                <li><strong>Environmental Concept:</strong> Define mood, purpose, and cultural context</li>
                                <li><strong>Color Palette:</strong> Adapt colors to support your environment's atmosphere</li>
                                <li><strong>Base Tile Design:</strong> Create primary seamless texture using reference patterns</li>
                                <li><strong>Edge Perfection:</strong> Ensure all four edges align seamlessly</li>
                                <li><strong>Variation Development:</strong> Add 2-3 subtle variations for visual interest</li>
                                <li><strong>Detail Enhancement:</strong> Add unique features that enhance the top-down perspective</li>
                                <li><strong>Cultural Sensitivity:</strong> Ensure respectful and inclusive design choices</li>
                            </ol>
                            
                            <h4>Professional Canvas Size:</h4>
                            <p>This challenge uses a professional 32×32 pixel canvas to allow for:</p>
                            <ul>
                                <li>Highly detailed environmental elements and textures</li>
                                <li>Complex patterns with multiple layers of depth</li>
                                <li>Industry-standard tile dimensions used in commercial games</li>
                                <li>Maximum artistic expression in your environmental masterpiece</li>
                                <li>Room for intricate details like individual stones, leaves, or weathering</li>
                            </ul>

                            <h4>Quality Assessment Criteria:</h4>
                            <ul>
                                <li>✓ <strong>Seamless Perfection:</strong> Edges must align perfectly when tiles are repeated</li>
                                <li>✓ <strong>Environmental Cohesion:</strong> All elements feel like they belong together</li>
                                <li>✓ <strong>Cultural Sensitivity:</strong> Respectful and inclusive design choices</li>
                                <li>✓ <strong>Character Integration:</strong> Works harmoniously with Week 3 character designs</li>
                                <li>✓ <strong>Atmospheric Quality:</strong> Successfully conveys intended mood and setting</li>
                                <li>✓ <strong>Technical Excellence:</strong> Professional pixel art execution</li>
                            </ul>

                            <h4>Advanced Environmental Techniques:</h4>
                            <ul>
                                <li><strong>Atmospheric Perspective:</strong> Subtle color shifts suggesting depth</li>
                                <li><strong>Lighting Consistency:</strong> Unified light source across all tiles</li>
                                <li><strong>Material Suggestion:</strong> Texture patterns that imply different materials</li>
                                <li><strong>Seasonal Storytelling:</strong> Elements that suggest time of year or weather</li>
                                <li><strong>Subtle Animation Preparation:</strong> Design elements that could be animated later</li>
                            </ul>

                            <div class="tip-box">
                                <p><strong>💡 Professional Insight:</strong> Great environmental art enhances gameplay without distracting from it. Your tileset should create a strong sense of place while remaining visually comfortable for extended play.</p>
                            </div>

                            <h4>Cultural Sensitivity Excellence:</h4>
                            <ul>
                                <li>Have I researched any cultural elements I'm incorporating?</li>
                                <li>Do my environmental choices avoid harmful stereotypes?</li>
                                <li>Would this environment feel welcoming to players from diverse backgrounds?</li>
                                <li>Am I representing nature and human impact respectfully?</li>
                                <li>Have I considered consulting with relevant communities if needed?</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Portfolio Quality Standard:</strong> This environmental art should be professional enough to include in a portfolio. Every tile should contribute to a cohesive, immersive game world.</p>
                            </div>
                        </div>
                        
                        <div id="week4-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'tile',
                    gridSize: 32,
                    colors: ['#228B22', '#32CD32', '#90EE90', '#006400', '#8B4513', '#D2691E', '#F4A460', '#DEB887', '#87CEEB', '#FFE4B5', '#CD853F', '#F0E68C'],
                    showPreview: false
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 4 Comprehensive Assessment</h2>
                    
                    <p>Evaluate your environmental art and tilemap mastery through this comprehensive assessment!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What is the most critical requirement for a seamless tile?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using as many colors as possible</div>
                            <div class="quiz-option" data-correct="true">Perfect edge alignment so tiles connect without visible seams</div>
                            <div class="quiz-option" data-correct="false">Including complex details in every tile</div>
                            <div class="quiz-option" data-correct="false">Making the tile perfectly symmetrical</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Seamless tiles must have perfect edge alignment - the pixels on adjacent edges must match exactly so that when tiles are placed next to each other, no seams are visible.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: What is "environmental storytelling" in game design?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Adding text descriptions to every environmental element</div>
                            <div class="quiz-option" data-correct="true">Using visual environmental details to convey story and history without words</div>
                            <div class="quiz-option" data-correct="false">Making environments that change based on story progression</div>
                            <div class="quiz-option" data-correct="false">Creating environments that talk to the player</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Environmental storytelling uses visual details like wear patterns, tool marks, natural growth, and architectural styles to tell stories about the game world's history and inhabitants without explicit narration.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: Why is the 3×3 live preview system useful for tile design?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">It makes tiles look more colorful</div>
                            <div class="quiz-option" data-correct="true">It shows how tiles repeat and helps identify seaming problems immediately</div>
                            <div class="quiz-option" data-correct="false">It automatically fixes edge alignment issues</div>
                            <div class="quiz-option" data-correct="false">It adds more detail to the tiles</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> The 3×3 preview shows how your tile looks when repeated, making it easy to spot edge alignment problems, obvious repetition patterns, and visual flow issues in real-time.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: When creating tile variations, what is most important to maintain?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Exactly identical colors across all tiles</div>
                            <div class="quiz-option" data-correct="true">Visual consistency so all tiles feel like they belong in the same world</div>
                            <div class="quiz-option" data-correct="false">Identical details in every tile</div>
                            <div class="quiz-option" data-correct="false">Perfect symmetry in all variations</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Visual consistency in lighting, color temperature, artistic style, and overall mood ensures that all tile variations feel cohesive and belong in the same game world.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 5: What should be the primary consideration when incorporating cultural elements into environmental design?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Making them as prominent as possible</div>
                            <div class="quiz-option" data-correct="true">Ensuring respectful, researched representation that avoids stereotypes</div>
                            <div class="quiz-option" data-correct="false">Using as many different cultural elements as possible</div>
                            <div class="quiz-option" data-correct="false">Making them blend in completely</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Cultural elements require respectful research and representation. Avoid stereotypes, understand the significance of what you're including, and consider consulting with relevant cultural communities.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 6: How should environmental art relate to character design in a game?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Environment should be more detailed than characters</div>
                            <div class="quiz-option" data-correct="true">Environment should support and complement characters without competing for attention</div>
                            <div class="quiz-option" data-correct="false">Environment should use completely different colors than characters</div>
                            <div class="quiz-option" data-correct="false">Environment should be designed completely independently</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Environmental art should create a harmonious backdrop that supports characters. It should complement character colors, maintain consistent artistic style, and provide appropriate contrast without overwhelming the characters.</p>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>Practical Assessment Requirements</h3>
                        <p>To demonstrate mastery of Week 4 concepts, ensure you have completed:</p>
                        <ul>
                            <li>✓ <strong>Seamless Tile Creation:</strong> Perfect edge alignment with no visible seams</li>
                            <li>✓ <strong>Pattern Mathematics:</strong> Understanding of tile edge relationships</li>
                            <li>✓ <strong>Tile Variations:</strong> Cohesive family of related environmental elements</li>
                            <li>✓ <strong>Live Preview Usage:</strong> Effective use of 3×3 preview system</li>
                            <li>✓ <strong>Environmental Storytelling:</strong> Tiles that suggest history and atmosphere</li>
                            <li>✓ <strong>Cultural Sensitivity:</strong> Respectful and inclusive environmental design</li>
                        </ul>
                        
                        <div class="tip-box">
                            <h4>Self-Assessment Questions:</h4>
                            <ul>
                                <li>Can you create tiles that connect seamlessly without visible edges?</li>
                                <li>Do your environmental choices tell a story about the game world?</li>
                                <li>Are your tile variations cohesive while providing visual interest?</li>
                                <li>Have you considered cultural sensitivity in your environmental design?</li>
                                <li>Do your environments work harmoniously with your character designs?</li>
                            </ul>
                        </div>
                        
                        <p><strong>Ready for Week 5?</strong> You should feel confident creating professional environmental art and be excited to bring everything to life through animation!</p>
                    </div>

                    <div class="info-box mt-2">
                        <h3>🌍 Congratulations on Environmental Art Mastery!</h3>
                        <p>You've developed sophisticated environmental design skills that balance technical precision with artistic storytelling. The ability to create immersive, culturally sensitive game worlds is a valuable professional skill.</p>
                        
                        <p><strong>What You've Achieved:</strong></p>
                        <ul>
                            <li>Mastered seamless tile creation with perfect edge alignment</li>
                            <li>Learned environmental storytelling through visual details</li>
                            <li>Developed cultural sensitivity in world-building</li>
                            <li>Created cohesive tile families with professional consistency</li>
                            <li>Integrated environmental art with character design</li>
                        </ul>
                        
                        <p><strong>Next Week Preview:</strong> We'll bring everything to life through animation - making your characters move and your environments dynamic!</p>
                    </div>
                `
            }
        }
    },

    week5: {
        title: "Pixel Art Animation",
        tabs: {
            overview: {
                title: "Overview",
                content: `
                    <h2>Week 5: Pixel Art Animation</h2>
                    
                    <div class="info-box">
                        <h3>Learning Objectives</h3>
                        <ul>
                            <li>Apply animation principles to pixel art constraints</li>
                            <li>Create smooth character animations</li>
                            <li>Master timing and spacing in limited frames</li>
                            <li>Use onion skinning effectively</li>
                            <li>Develop professional animation workflows</li>
                        </ul>
                    </div>

                    <p>Animation brings your pixel art to life! This week, you'll learn how to create fluid movements within the constraints of pixel art, from simple bouncing balls to complex character animations.</p>

                    <h3>What You'll Master This Week</h3>
                    <ul>
                        <li><strong>Practice 1:</strong> Bouncing ball fundamentals - timing and animation principles</li>
                        <li><strong>Practice 2:</strong> Character idle animation - bringing characters to life</li>
                        <li><strong>Challenge:</strong> Create a complete walk cycle animation</li>
                        <li><strong>Assessment:</strong> Animation knowledge test and practical evaluation</li>
                    </ul>

                    <div class="tip-box">
                        <p><strong>💡 Animation Tip:</strong> Start with simple movements before attempting complex character animation. Every great animator masters the bouncing ball first!</p>
                    </div>

                    <h3>Professional Animation Workflow</h3>
                    <p>You'll learn industry-standard techniques including onion skinning, timing charts, and frame management that are used in professional game development studios.</p>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Animation Principles for Pixel Art</h2>
                    
                    <h3>The Twelve Principles in Pixel Constraints</h3>
                    <p>Disney's animation principles apply to pixel art, but require adaptation for grid-based constraints:</p>

                    <div class="info-box">
                        <h4>Key Principles for Pixel Animation:</h4>
                        <ul>
                            <li><strong>Squash and Stretch:</strong> Use selective pixels to suggest deformation</li>
                            <li><strong>Anticipation:</strong> Prepare viewers for action with clear setup frames</li>
                            <li><strong>Timing:</strong> Control speed and emotion through frame spacing</li>
                            <li><strong>Follow Through:</strong> Show secondary motion after main action</li>
                        </ul>
                    </div>

                    <h3>Frame Rate and Timing</h3>
                    <p>Pixel art animation typically uses lower frame rates than traditional animation:</p>
                    <ul>
                        <li><strong>8-12 FPS:</strong> Standard for pixel art games, creates distinctive feel</li>
                        <li><strong>Timing on 2s:</strong> Hold frames for 2+ screen refreshes for smooth motion</li>
                        <li><strong>Limited Frames:</strong> 4-8 frames can create convincing loops</li>
                    </ul>

                    <h3>Onion Skinning Technique</h3>
                    <p>See previous and next frames as transparent overlays to maintain consistency and smooth motion paths.</p>

                    <h3>Character Animation Fundamentals</h3>
                    <p>Bringing characters to life requires understanding:</p>
                    <ul>
                        <li><strong>Silhouette Changes:</strong> Clear shape variation between frames</li>
                        <li><strong>Weight Distribution:</strong> Show character mass and balance</li>
                        <li><strong>Personality Expression:</strong> Movement style conveys character traits</li>
                        <li><strong>Secondary Animation:</strong> Hair, clothing, accessories that follow main motion</li>
                    </ul>

                    <div class="tip-box">
                        <p><strong>Professional Insight:</strong> Great pixel animation isn't about having many frames - it's about making every frame count for maximum impact.</p>
                    </div>
                `
            },
            practice1: {
                title: "Practice 1: Bouncing Ball",
                content: `
                    <h2>Practice 1: Master Animation Fundamentals</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Create a Bouncing Ball Animation</h3>
                            <p>Master the foundational principles of timing, arcs, and squash/stretch through the classic bouncing ball exercise.</p>
                            
                            <h4>Animation Goals:</h4>
                            <ol>
                                <li><strong>Timing:</strong> Create 8-12 frame loop showing ball bouncing</li>
                                <li><strong>Arc Motion:</strong> Natural curved path, not straight lines</li>
                                <li><strong>Squash/Stretch:</strong> Ball deforms on impact and stretch in air</li>
                                <li><strong>Weight:</strong> Ball shows gravity and momentum</li>
                            </ol>
                            
                            <h4>Step-by-Step Process:</h4>
                            <div class="tip-box">
                                <h5>Frame Planning:</h5>
                                <ul>
                                    <li><strong>Frame 1-2:</strong> Ball at highest point (left)</li>
                                    <li><strong>Frame 3-4:</strong> Ball falling, gaining speed</li>
                                    <li><strong>Frame 5:</strong> Ball compressed on ground impact</li>
                                    <li><strong>Frame 6-7:</strong> Ball rising, losing speed</li>
                                    <li><strong>Frame 8:</strong> Ball at highest point (right)</li>
                                </ul>
                            </div>

                            <h4>Technical Tips:</h4>
                            <ul>
                                <li><strong>Use Onion Skinning:</strong> Enable to see previous frame as guide</li>
                                <li><strong>Arc Paths:</strong> Ball follows curved trajectory, not linear</li>
                                <li><strong>Speed Variation:</strong> Faster near ground, slower at peak</li>
                                <li><strong>Deformation:</strong> Squash on impact, stretch when fast</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Common Mistakes:</strong> Avoid linear motion, uniform timing, or forgetting squash/stretch. Every frame should show the ball's weight and momentum.</p>
                            </div>
                        </div>
                        
                        <div id="week5-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'animation',
                    gridSize: 16,
                    colors: ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#1ABC9C', '#000000', '#FFFFFF'],
                    fps: 8
                }
            },
            practice2: {
                title: "Practice 2: Character Animation",
                content: `
                    <h2>Practice 2: Character Idle Animation</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Create Character Breathing Animation</h3>
                            <p>Bring your character designs to life with subtle idle animation that shows personality and life.</p>
                            
                            <h4>Animation Objectives:</h4>
                            <ol>
                                <li><strong>Subtle Movement:</strong> Gentle breathing or swaying motion</li>
                                <li><strong>Personality:</strong> Animation reflects character archetype</li>
                                <li><strong>Loop Seamlessly:</strong> Animation cycles smoothly</li>
                                <li><strong>Secondary Animation:</strong> Hair, clothing, or accessories move naturally</li>
                            </ol>
                            
                            <h4>Character Animation Types:</h4>
                            <div class="info-box">
                                <h5>Choose Your Animation Style:</h5>
                                <ul>
                                    <li><strong>🛡️ Knight:</strong> Steady breathing, armor slightly shifting</li>
                                    <li><strong>🧙 Wizard:</strong> Robes flowing, staff glowing rhythmically</li>
                                    <li><strong>🏃 Rogue:</strong> Alert stance, hood moving with quick breathing</li>
                                    <li><strong>⚔️ Fighter:</strong> Confident pose, cape or hair flowing</li>
                                </ul>
                            </div>

                            <h4>Technical Approach:</h4>
                            <ul>
                                <li><strong>4-6 Frame Loop:</strong> Keep it simple but effective</li>
                                <li><strong>Chest Movement:</strong> Slight expansion/contraction for breathing</li>
                                <li><strong>Eye Blinks:</strong> Occasional blink adds life (every 8-12 frames)</li>
                                <li><strong>Secondary Elements:</strong> Hair, clothing, accessories follow main motion</li>
                            </ul>

                            <div class="tip-box">
                                <p><strong>Animation Principle:</strong> Idle animations should be subtle enough not to distract during gameplay, but present enough to make characters feel alive.</p>
                            </div>
                        </div>
                        
                        <div id="week5-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'animation',
                    gridSize: 32,
                    colors: ['#2C3E50', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#ECF0F1', '#9B59B6', '#1ABC9C'],
                    fps: 6
                }
            },
            challenge: {
                title: "Challenge: Walk Cycle",
                content: `
                    <h2>Challenge: Create a Character Walk Cycle</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Master Challenge: Professional Walk Cycle Animation</h3>
                            <p>Create a complete walk cycle that demonstrates professional animation skills and character personality.</p>
                            
                            <h4>Walk Cycle Requirements:</h4>
                            <ol>
                                <li><strong>8-Frame Cycle:</strong> Complete walk cycle that loops seamlessly</li>
                                <li><strong>Character Personality:</strong> Walk style matches character archetype</li>
                                <li><strong>Proper Timing:</strong> Natural rhythm and weight distribution</li>
                                <li><strong>Secondary Animation:</strong> Hair, clothing, equipment moves naturally</li>
                                <li><strong>Professional Quality:</strong> Portfolio-ready animation</li>
                            </ol>
                            
                            <h4>Walk Cycle Breakdown:</h4>
                            <div class="info-box">
                                <h5>8-Frame Walk Cycle Structure:</h5>
                                <ul>
                                    <li><strong>Frame 1:</strong> Contact - left foot down, right leg forward</li>
                                    <li><strong>Frame 2:</strong> Recoil - body compresses, weight shifts</li>
                                    <li><strong>Frame 3:</strong> Passing - right leg passes left, body rises</li>
                                    <li><strong>Frame 4:</strong> High Point - body at highest position</li>
                                    <li><strong>Frame 5:</strong> Contact - right foot down, left leg forward</li>
                                    <li><strong>Frame 6:</strong> Recoil - body compresses, weight shifts</li>
                                    <li><strong>Frame 7:</strong> Passing - left leg passes right, body rises</li>
                                    <li><strong>Frame 8:</strong> High Point - body at highest, returns to frame 1</li>
                                </ul>
                            </div>

                            <h4>Personality Through Animation:</h4>
                            <ul>
                                <li><strong>Confident Character:</strong> Upright posture, steady rhythm, purposeful stride</li>
                                <li><strong>Sneaky Character:</strong> Low crouch, uneven timing, cautious steps</li>
                                <li><strong>Heavy Character:</strong> Strong impacts, delayed secondary motion, wide stance</li>
                                <li><strong>Graceful Character:</strong> Smooth arcs, minimal vertical movement, flowing secondary</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Portfolio Standard:</strong> This walk cycle should be professional quality - smooth, characterful, and technically excellent. Take time to polish every frame.</p>
                            </div>
                        </div>
                        
                        <div id="week5-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'animation',
                    gridSize: 32,
                    colors: ['#2C3E50', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#ECF0F1', '#9B59B6', '#1ABC9C', '#E67E22', '#95A5A6'],
                    fps: 8
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 5 Animation Assessment</h2>
                    
                    <p>Test your animation knowledge and demonstrate your practical skills!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What is the most important principle for creating believable character animation?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using as many frames as possible</div>
                            <div class="quiz-option" data-correct="true">Showing proper weight and timing through movement</div>
                            <div class="quiz-option" data-correct="false">Making every frame perfectly smooth</div>
                            <div class="quiz-option" data-correct="false">Adding lots of secondary animation details</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Weight and timing are fundamental to believable animation. Characters must feel like they have mass and move with natural rhythm, regardless of frame count.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: What does "onion skinning" help achieve in animation?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Adding more colors to the animation</div>
                            <div class="quiz-option" data-correct="true">Seeing previous and next frames to maintain consistency and smooth motion</div>
                            <div class="quiz-option" data-correct="false">Making the animation faster to create</div>
                            <div class="quiz-option" data-correct="false">Automatically generating in-between frames</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Onion skinning shows transparent versions of adjacent frames, helping animators maintain consistent positioning and create smooth motion paths.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: In a walk cycle, what creates the sense of weight and impact?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Making the character move faster</div>
                            <div class="quiz-option" data-correct="true">Body compression on foot contact and rising between steps</div>
                            <div class="quiz-option" data-correct="false">Adding more frames to the animation</div>
                            <div class="quiz-option" data-correct="false">Making the character jump instead of walk</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> The vertical movement of the body - compressing on impact and rising between steps - is what creates the sense of weight and natural walking rhythm.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: What is "secondary animation" in character design?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">The character's second most important movement</div>
                            <div class="quiz-option" data-correct="true">Elements like hair, clothing, or accessories that follow the main character motion</div>
                            <div class="quiz-option" data-correct="false">Animation that happens in the background</div>
                            <div class="quiz-option" data-correct="false">Animation created by a different artist</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Secondary animation refers to elements that react to the primary motion - like hair bouncing when a character jumps, or a cape flowing when they turn.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 5: Why do pixel art animations often use lower frame rates (8-12 FPS)?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Because it's easier to animate</div>
                            <div class="quiz-option" data-correct="true">It creates a distinctive aesthetic and reduces workload while maintaining visual appeal</div>
                            <div class="quiz-option" data-correct="false">Because old computers couldn't handle higher frame rates</div>
                            <div class="quiz-option" data-correct="false">Because pixel art looks bad at high frame rates</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Lower frame rates are an aesthetic choice that creates the distinctive "pixel art" feel while being practical for production. Each frame is held longer, creating a unique visual rhythm.</p>
                        </div>
                    </div>

                    <div class="info-box mt-2">
                        <h3>Practical Assessment Requirements</h3>
                        <p>To demonstrate mastery of Week 5 animation concepts, ensure you have completed:</p>
                        <ul>
                            <li>✓ <strong>Bouncing Ball:</strong> Shows proper timing, arcs, and squash/stretch</li>
                            <li>✓ <strong>Character Idle:</strong> Subtle animation that adds personality</li>
                            <li>✓ <strong>Walk Cycle:</strong> Professional 8-frame cycle with character personality</li>
                            <li>✓ <strong>Onion Skinning Usage:</strong> Effective use of animation tools</li>
                            <li>✓ <strong>Secondary Animation:</strong> Natural movement of hair, clothing, accessories</li>
                        </ul>
                        
                        <div class="tip-box">
                            <h4>Self-Assessment Questions:</h4>
                            <ul>
                                <li>Do your animations show proper weight and timing?</li>
                                <li>Does character movement reflect their personality?</li>
                                <li>Are your animation loops seamless and natural?</li>
                                <li>Have you mastered the onion skinning workflow?</li>
                                <li>Do secondary elements move believably?</li>
                            </ul>
                        </div>
                        
                        <p><strong>Ready for Week 6?</strong> You should feel confident creating professional character animations and be excited to integrate everything into Unity!</p>
                    </div>

                    <div class="info-box mt-2">
                        <h3>🎬 Congratulations on Animation Mastery!</h3>
                        <p>You've developed professional animation skills that bring pixel art to life with personality and technical excellence. Character animation is one of the most valued skills in game development.</p>
                        
                        <p><strong>What You've Achieved:</strong></p>
                        <ul>
                            <li>Mastered fundamental animation principles in pixel art constraints</li>
                            <li>Created believable character movement with personality</li>
                            <li>Developed professional animation workflows and tool usage</li>
                            <li>Built a portfolio of character animations ready for game integration</li>
                            <li>Understood timing, weight, and secondary animation principles</li>
                        </ul>
                        
                        <p><strong>Next Week Preview:</strong> We'll integrate everything into Unity, creating a complete game development pipeline from concept to playable game!</p>
                    </div>
                `
            }
        }
    },
    week6: {
        title: "Unity Integration and Game Pipeline",
        tabs: {
            overview: {
                title: "Overview",
                content: `
                    <h2>Week 6: Unity Integration and Game Pipeline</h2>
                    
                    <div class="info-box">
                        <h3>Learning Objectives</h3>
                        <ul>
                            <li>Master Unity import settings for pixel art</li>
                            <li>Create optimized sprite atlases and sheets</li>
                            <li>Implement animations in Unity's Animator</li>
                            <li>Build complete game-ready asset pipelines</li>
                            <li>Understand performance optimization for pixel art games</li>
                        </ul>
                    </div>

                    <p>This final week brings everything together! You'll learn how to properly import your pixel art into Unity, create efficient animation systems, and build a complete asset pipeline for game development.</p>

                    <h3>What You'll Master This Week</h3>
                    <ul>
                        <li><strong>Practice 1:</strong> Unity import settings and sprite configuration</li>
                        <li><strong>Practice 2:</strong> Animation controller setup and optimization</li>
                        <li><strong>Challenge:</strong> Complete game character implementation</li>
                        <li><strong>Assessment:</strong> Professional pipeline knowledge test</li>
                    </ul>

                    <div class="tip-box">
                        <p><strong>💡 Professional Tip:</strong> Proper Unity setup can make the difference between crisp pixel art and blurry, unprofessional results. These settings are crucial!</p>
                    </div>

                    <h3>Industry Pipeline Integration</h3>
                    <p>Learn how professional game studios organize pixel art assets, manage performance, and create scalable systems for large-scale game development.</p>
                `
            },
            concepts: {
                title: "Concepts", 
                content: `
                    <h2>Unity Pipeline for Pixel Art</h2>
                    
                    <h3>Critical Unity Settings for Pixel Art</h3>
                    <p>Unity's default settings are designed for high-resolution art and must be adjusted for pixel art to maintain crisp, pixel-perfect results.</p>

                    <div class="info-box">
                        <h4>Essential Import Settings:</h4>
                        <ul>
                            <li><strong>Filter Mode:</strong> Point (no filter) - prevents blurring</li>
                            <li><strong>Compression:</strong> None - maintains pixel accuracy</li>
                            <li><strong>Pixels Per Unit:</strong> Match your pixel art resolution</li>
                            <li><strong>Generate Mip Maps:</strong> Disabled - prevents scaling artifacts</li>
                        </ul>
                    </div>

                    <h3>Sprite Atlas Organization</h3>
                    <p>Efficient sprite organization improves performance and workflow:</p>
                    <ul>
                        <li><strong>Character Sheets:</strong> All character frames in single atlas</li>
                        <li><strong>Environment Atlases:</strong> Related tiles grouped together</li>
                        <li><strong>UI Elements:</strong> Interface graphics in dedicated atlas</li>
                        <li><strong>Effects:</strong> Particle and VFX sprites organized by system</li>
                    </ul>

                    <h3>Animation Controller Setup</h3>
                    <p>Unity's Animator Controller manages character states and transitions:</p>
                    <ul>
                        <li><strong>State Organization:</strong> Idle, walk, jump, attack states</li>
                        <li><strong>Transition Conditions:</strong> Parameter-based state changes</li>
                        <li><strong>Animation Events:</strong> Trigger gameplay actions from animation</li>
                        <li><strong>Blend Trees:</strong> Smooth transitions between movement directions</li>
                    </ul>

                    <h3>Performance Optimization</h3>
                    <p>Pixel art games require specific optimization strategies:</p>
                    <ul>
                        <li><strong>Draw Call Batching:</strong> Combine sprites to reduce draw calls</li>
                        <li><strong>Texture Compression:</strong> Balance quality vs. file size</li>
                        <li><strong>LOD Systems:</strong> Simplify distant or small sprites</li>
                        <li><strong>Animation Culling:</strong> Disable off-screen animation updates</li>
                    </ul>

                    <div class="tip-box">
                        <p><strong>Professional Insight:</strong> Many indie developers struggle with blurry pixel art in Unity. Mastering these settings immediately elevates your game's visual quality.</p>
                    </div>
                `
            },
            practice1: {
                title: "Practice 1: Asset Export",
                content: `
                    <h2>Practice 1: Professional Asset Export and Unity Setup</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Export and Configure Assets for Unity</h3>
                            <p>Learn the complete workflow for exporting pixel art from your canvas to Unity with optimal settings.</p>
                            
                            <h4>Export Process:</h4>
                            <ol>
                                <li><strong>Canvas Export:</strong> Export your Week 3 character as PNG</li>
                                <li><strong>Sprite Sheet Creation:</strong> Organize animation frames</li>
                                <li><strong>Unity Import:</strong> Configure optimal settings</li>
                                <li><strong>Quality Verification:</strong> Ensure pixel-perfect results</li>
                            </ol>
                            
                            <h4>Unity Import Settings Walkthrough:</h4>
                            <div class="info-box">
                                <h5>Step-by-Step Import Configuration:</h5>
                                <ul>
                                    <li><strong>Texture Type:</strong> Sprite (2D and UI)</li>
                                    <li><strong>Sprite Mode:</strong> Single (for individual sprites) or Multiple (for sheets)</li>
                                    <li><strong>Pixels Per Unit:</strong> 16 (for 16px sprites) or 32 (for 32px sprites)</li>
                                    <li><strong>Filter Mode:</strong> Point (no filter)</li>
                                    <li><strong>Compression:</strong> None</li>
                                    <li><strong>Generate Mip Maps:</strong> Unchecked</li>
                                </ul>
                            </div>

                            <h4>Export Quality Checklist:</h4>
                            <ul>
                                <li><strong>No Blurring:</strong> Edges remain sharp and pixel-perfect</li>
                                <li><strong>Color Accuracy:</strong> Colors match original canvas exactly</li>
                                <li><strong>Proper Scaling:</strong> Sprites scale evenly without distortion</li>
                                <li><strong>Transparent Backgrounds:</strong> Alpha channels preserved correctly</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Common Unity Mistakes:</strong> Using Linear filter mode, enabling compression, or wrong Pixels Per Unit settings will make your pixel art look blurry and unprofessional.</p>
                            </div>
                        </div>
                        
                        <div id="week6-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'basic',
                    gridSize: 32,
                    colors: ['#2C3E50', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#ECF0F1', '#9B59B6', '#1ABC9C']
                }
            },
            practice2: {
                title: "Practice 2: Unity Settings",
                content: `
                    <h2>Practice 2: Unity Import Configuration</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Critical Unity Settings</h3>
                            <p>These settings make the difference between crisp and blurry pixel art!</p>
                            
                            <h4>Import Settings Walkthrough:</h4>
                            <div class="comparison-container">
                                <div class="settings-comparison">
                                    <h5>✅ Correct Settings (Crisp Result)</h5>
                                    <ul>
                                        <li>Filter Mode: Point (no filter)</li>
                                        <li>Compression: None</li>
                                        <li>Generate Mip Maps: False</li>
                                        <li>Pixels Per Unit: 16 or 32</li>
                                    </ul>
                                </div>
                                
                                <div class="settings-comparison">
                                    <h5>❌ Wrong Settings (Blurry Result)</h5>
                                    <ul>
                                        <li>Filter Mode: Bilinear/Trilinear</li>
                                        <li>Compression: Normal Quality</li>
                                        <li>Generate Mip Maps: True</li>
                                        <li>Pixels Per Unit: Default values</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="visual-example">
                                <h4>Unity Settings Example:</h4>
                                <div class="unity-settings-demo">
                                    <div class="settings-image-placeholder" style="width: 300px; height: 200px; background: linear-gradient(45deg, #3498DB, #2980B9); border: 2px solid #2C3E50; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                                        Unity Import Settings Screenshot
                                        <br>
                                        (Filter: Point, Compression: None)
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div id="week6-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'basic',
                    gridSize: 16,
                    colors: ['#2C3E50', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#ECF0F1']
                }
            },
            challenge: {
                title: "Challenge: Complete Setup",
                content: `
                    <h2>Challenge: Complete Game Character Setup</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Professional Game Development Challenge</h3>
                            <p>Create a complete, game-ready character system in Unity using all your assets from previous weeks.</p>
                            
                            <h4>Challenge Requirements:</h4>
                            <ol>
                                <li><strong>Character Import:</strong> Week 3 character with perfect Unity settings</li>
                                <li><strong>Animation Setup:</strong> Week 5 animations in Unity Animator Controller</li>
                                <li><strong>Environment Integration:</strong> Week 4 tiles as level backgrounds</li>
                                <li><strong>Performance Optimization:</strong> Proper atlasing and draw call reduction</li>
                                <li><strong>Quality Verification:</strong> Pixel-perfect results at all scale levels</li>
                            </ol>
                            
                            <h4>Professional Workflow Steps:</h4>
                            <div class="info-box">
                                <h5>Complete Integration Process:</h5>
                                <ul>
                                    <li><strong>Asset Organization:</strong> Folders for Characters, Environments, Animations</li>
                                    <li><strong>Sprite Atlas Creation:</strong> Combine related sprites for performance</li>
                                    <li><strong>Animator Controller:</strong> State machine for character behavior</li>
                                    <li><strong>Scene Setup:</strong> Camera settings for pixel-perfect rendering</li>
                                    <li><strong>Testing:</strong> Verify quality at different resolutions</li>
                                </ul>
                            </div>

                            <h4>Portfolio Quality Standards:</h4>
                            <ul>
                                <li><strong>Professional Organization:</strong> Clean folder structure and naming</li>
                                <li><strong>Optimal Performance:</strong> Efficient sprite atlases and low draw calls</li>
                                <li><strong>Visual Quality:</strong> Perfect pixel art rendering without artifacts</li>
                                <li><strong>Complete Documentation:</strong> Settings and workflow clearly documented</li>
                            </ul>

                            <div class="warning-box">
                                <p><strong>Industry Standard:</strong> This setup should be professional enough to submit to a game studio. Every setting must be intentional and optimized.</p>
                            </div>
                        </div>
                        
                        <div id="week6-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'basic',
                    gridSize: 32,
                    colors: ['#2C3E50', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#ECF0F1', '#9B59B6', '#1ABC9C', '#E67E22', '#95A5A6']
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 6 Unity Integration Assessment</h2>
                    
                    <p>Test your Unity pipeline knowledge and demonstrate professional integration skills!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What is the most critical Unity setting for maintaining pixel art sharpness?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using the highest compression quality</div>
                            <div class="quiz-option" data-correct="true">Setting Filter Mode to Point (no filter)</div>
                            <div class="quiz-option" data-correct="false">Enabling Generate Mip Maps</div>
                            <div class="quiz-option" data-correct="false">Using Bilinear filtering for smoothness</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Point filtering prevents Unity from smoothing pixels, maintaining the sharp, crisp appearance essential to pixel art aesthetics.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: Why should you disable "Generate Mip Maps" for pixel art sprites?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">It uses too much memory</div>
                            <div class="quiz-option" data-correct="true">Mip maps blur pixel art when viewed at different distances</div>
                            <div class="quiz-option" data-correct="false">It makes sprites load slower</div>
                            <div class="quiz-option" data-correct="false">It's incompatible with 2D games</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Mip maps create pre-scaled versions for distance viewing, but this blurs pixel art. Pixel art should maintain its crisp appearance at all viewing distances.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: What does "Pixels Per Unit" control in Unity sprite setup?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">The color depth of the sprite</div>
                            <div class="quiz-option" data-correct="true">How many pixels equal one Unity unit, affecting sprite scale and collision accuracy</div>
                            <div class="quiz-option" data-correct="false">The compression ratio of the image</div>
                            <div class="quiz-option" data-correct="false">The frame rate of animated sprites</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Pixels Per Unit determines the relationship between pixel art resolution and Unity's world scale, affecting how sprites scale and align in the game world.</p>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: What is the benefit of using Sprite Atlases in Unity?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">They automatically animate sprites</div>
                            <div class="quiz-option" data-correct="true">They reduce draw calls by combining multiple sprites into single textures</div>
                            <div class="quiz-option" data-correct="false">They compress sprites more efficiently</div>
                            <div class="quiz-option" data-correct="false">They enable higher resolution art</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> Sprite Atlases combine multiple sprites into single texture sheets, allowing Unity to draw many sprites in fewer draw calls, significantly improving performance.</p>
                        </div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 5: When setting up an Animator Controller for a pixel art character, what's most important?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using as many states as possible</div>
                            <div class="quiz-option" data-correct="true">Organizing states logically and setting appropriate transition conditions</div>
                            <div class="quiz-option" data-correct="false">Making all transitions instant</div>
                            <div class="quiz-option" data-correct="false">Using only blend trees for all animations</div>
                        </div>
                        <div class="quiz-explanation">
                            <p><strong>Explanation:</strong> A well-organized Animator Controller with logical state organization and appropriate transition conditions creates responsive, predictable character behavior.</p>
                        </div>
                    </div>

                    <div class="info-box mt-2">
                        <h3>Practical Assessment Requirements</h3>
                        <p>To demonstrate mastery of Week 6 Unity integration concepts, ensure you have completed:</p>
                        <ul>
                            <li>✓ <strong>Unity Import Mastery:</strong> Perfect settings for pixel-sharp results</li>
                            <li>✓ <strong>Asset Organization:</strong> Professional folder structure and naming</li>
                            <li>✓ <strong>Animation Integration:</strong> Working Animator Controller with all states</li>
                            <li>✓ <strong>Performance Optimization:</strong> Efficient sprite atlases and draw call management</li>
                            <li>✓ <strong>Quality Verification:</strong> Pixel-perfect rendering at all scales</li>
                        </ul>
                        
                        <div class="tip-box">
                            <h4>Professional Portfolio Checklist:</h4>
                            <ul>
                                <li>Do your sprites maintain crisp pixel edges in Unity?</li>
                                <li>Are your assets organized professionally?</li>
                                <li>Do your animations play smoothly with proper transitions?</li>
                                <li>Have you optimized for performance with atlases?</li>
                                <li>Is your Unity setup ready for production use?</li>
                            </ul>
                        </div>
                        
                        <p><strong>Course Complete!</strong> You now have professional pixel art and Unity integration skills ready for industry use!</p>
                    </div>

                    <div class="info-box mt-2">
                        <h3>🎮 Congratulations on Course Completion!</h3>
                        <p>You've mastered the complete pixel art to Unity pipeline! This end-to-end workflow skill is highly valued in the game development industry.</p>
                        
                        <p><strong>What You've Achieved:</strong></p>
                        <ul>
                            <li>Mastered professional pixel art creation from fundamentals to animation</li>
                            <li>Developed cultural sensitivity and inclusive design principles</li>
                            <li>Created portfolio-quality characters and environments</li>
                            <li>Learned professional Unity integration workflows</li>
                            <li>Built complete game-ready asset pipelines</li>
                            <li>Acquired industry-standard technical skills</li>
                        </ul>
                        
                        <p><strong>Your Professional Skills:</strong></p>
                        <ul>
                            <li>✅ Pixel Art Fundamentals</li>
                            <li>✅ Color Theory Application</li>
                            <li>✅ Character Design Excellence</li>
                            <li>✅ Environmental Art Creation</li>
                            <li>✅ Professional Animation</li>
                            <li>✅ Unity Pipeline Integration</li>
                        </ul>
                        
                        <p><strong>Ready for Industry:</strong> Your skillset now includes everything needed to create professional pixel art games from concept to completion!</p>
                    </div>
                `
            }
        }
    }
};


// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courseContent;
}