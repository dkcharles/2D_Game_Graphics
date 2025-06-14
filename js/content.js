// Course content organized by weeks
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
                        </ul>
                    </div>

                    <p>Welcome to the world of pixel art! This week, you'll discover how simple pixels can create complex and beautiful game graphics. We'll explore the history of pixel art, understand its unique constraints and opportunities, and begin creating your own pixel art masterpieces.</p>

                    <h3>What You'll Create This Week</h3>
                    <ul>
                        <li><strong>Practice 1:</strong> Your first pixel - understanding the grid</li>
                        <li><strong>Practice 2:</strong> Basic geometric shapes and patterns</li>
                        <li><strong>Challenge:</strong> A complete 16×16 game icon</li>
                        <li><strong>Assessment:</strong> Test your knowledge and skills</li>
                    </ul>
                    
                    <div class="tip-box">
                        <p><strong>💡 Study Tip:</strong> Complete one tab per day for best retention, or work through all content in a focused 3-hour session.</p>
                    </div>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Core Concepts: Understanding Pixel Art</h2>
                    
                    <h3>What is Pixel Art?</h3>
                    <p>Pixel art is a form of digital art where images are created and edited at the pixel level. Each individual pixel is deliberately placed to create forms, characters, and environments. Unlike other digital art forms that rely on brushes, gradients, and anti-aliasing, pixel art embraces the grid-based nature of digital displays.</p>

                    <div class="info-box">
                        <p><strong>Key Principle:</strong> In pixel art, every pixel matters. Each pixel placement is a conscious decision that contributes to the overall image.</p>
                    </div>

                    <h3>Historical Context</h3>
                    <p>Pixel art originated in the late 1970s and early 1980s when computer graphics were severely limited by hardware constraints. Early arcade games like <em>Space Invaders</em> (1978) and <em>Pac-Man</em> (1980) used pixel art not by choice, but by necessity.</p>

                    <p>As technology advanced, pixel art evolved from a technical limitation to an artistic choice. Modern games like <em>Celeste</em>, <em>Stardew Valley</em>, and <em>Minecraft</em> prove that pixel art remains a powerful and popular aesthetic.</p>

                    <h3>The Pixel Grid</h3>
                    <p>The foundation of all pixel art is the grid. Common canvas sizes include:</p>
                    <ul>
                        <li><strong>8×8:</strong> Minimal sprites, basic tiles</li>
                        <li><strong>16×16:</strong> Standard small sprites, detailed tiles</li>
                        <li><strong>32×32:</strong> Character sprites, complex objects</li>
                        <li><strong>64×64:</strong> Detailed characters, small scenes</li>
                    </ul>

                    <h3>Resolution and Constraints</h3>
                    <p>Working within constraints is what makes pixel art unique:</p>
                    <ul>
                        <li><strong>Limited Resolution:</strong> Forces creative problem-solving</li>
                        <li><strong>No Anti-aliasing:</strong> Creates distinctive "jagged" edges</li>
                        <li><strong>Color Restrictions:</strong> Often uses limited palettes</li>
                        <li><strong>Pixel-Perfect Precision:</strong> Every pixel must be intentional</li>
                    </ul>

                    <div class="tip-box">
                        <p><strong>💡 Pro Tip:</strong> Start small! It's easier to create compelling 16×16 sprites than to fill a 64×64 canvas when you're beginning.</p>
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
                            <p>Let's start with the absolute basics - placing individual pixels to understand how the grid works.</p>
                            
                            <h4>Your Tasks:</h4>
                            <ol>
                                <li>Click on the grid to place pixels</li>
                                <li>Create a simple checkerboard pattern</li>
                                <li>Try writing your initials</li>
                                <li>Make a simple emoji face</li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Tip:</strong> Use the grid lines as guides. Each square is one pixel!</p>
                            </div>
                            
                            <h4>Understanding Pixel Placement</h4>
                            <p>Notice how:</p>
                            <ul>
                                <li>Each click fills exactly one grid square</li>
                                <li>Diagonal lines look "stepped" or "jagged"</li>
                                <li>Even simple shapes require careful planning</li>
                            </ul>
                        </div>
                        
                        <div id="week1-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'basic',
                    gridSize: 8,
                    colors: ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF']
                }
            },
            practice2: {
                title: "Practice 2: Basic Shapes",
                content: `
                    <h2>Practice 2: Basic Shapes</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Geometric Foundations</h3>
                            <p>Now let's create basic geometric shapes - the building blocks of more complex pixel art.</p>
                            
                            <h4>Shape Challenges:</h4>
                            <ol>
                                <li><strong>Square:</strong> Create a perfect square (try 4×4 pixels)</li>
                                <li><strong>Circle:</strong> Approximate a circle (notice the pixel "steps")</li>
                                <li><strong>Triangle:</strong> Draw triangles with different angles</li>
                                <li><strong>Star:</strong> Create a 5-pointed star</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>Learning Point:</strong> Pixel art can't create perfect curves or diagonal lines. We approximate these shapes using careful pixel placement.</p>
                            </div>
                            
                            <h4>Tips for Better Shapes:</h4>
                            <ul>
                                <li>For circles: Use a pattern like 3-1-1-3 pixels</li>
                                <li>For diagonals: Consistent stepping (1-1-1 or 2-1-2-1)</li>
                                <li>For symmetry: Count pixels from the center</li>
                            </ul>
                        </div>
                        
                        <div id="week1-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#2C3E50', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#ECF0F1']
                }
            },
            challenge: {
                title: "Challenge: Create an Icon",
                content: `
                    <h2>Challenge: Create a Game Icon</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Creative Challenge</h3>
                            <p>Put everything you've learned together to create a 16×16 game icon!</p>
                            
                            <h4>Icon Ideas:</h4>
                            <ul>
                                <li>💰 A coin or gem</li>
                                <li>🗡️ A sword or shield</li>
                                <li>❤️ A heart or health potion</li>
                                <li>⭐ A star or power-up</li>
                                <li>🔑 A key or treasure chest</li>
                            </ul>
                            
                            <h4>Design Process:</h4>
                            <ol>
                                <li><strong>Sketch:</strong> Plan your icon shape</li>
                                <li><strong>Outline:</strong> Create the basic silhouette</li>
                                <li><strong>Fill:</strong> Add base colors</li>
                                <li><strong>Detail:</strong> Add highlights and shadows</li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Challenge Yourself:</strong> Try creating the same icon in different color schemes. How does color affect the feel of your icon?</p>
                            </div>
                            
                            <h4>Quality Checklist:</h4>
                            <ul>
                                <li>✓ Clear, recognizable silhouette</li>
                                <li>✓ Good contrast between elements</li>
                                <li>✓ At least one highlight for depth</li>
                                <li>✓ Reads well at small size</li>
                            </ul>
                        </div>
                        
                        <div id="week1-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#1a1a1a', '#4a4a4a', '#7a7a7a', '#aaaaaa', '#ffffff', 
                             '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7']
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 1 Assessment</h2>
                    
                    <p>Test your understanding of pixel art fundamentals with this short quiz!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What makes pixel art unique compared to other digital art forms?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">It uses more colors than other art forms</div>
                            <div class="quiz-option" data-correct="true">Each pixel is deliberately placed and visible</div>
                            <div class="quiz-option" data-correct="false">It requires expensive software</div>
                            <div class="quiz-option" data-correct="false">It can only be used for retro games</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: Which canvas size would be best for a beginner creating their first character sprite?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">8×8 pixels</div>
                            <div class="quiz-option" data-correct="true">16×16 pixels</div>
                            <div class="quiz-option" data-correct="false">64×64 pixels</div>
                            <div class="quiz-option" data-correct="false">128×128 pixels</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: Why did early video games use pixel art?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">It was the most popular art style</div>
                            <div class="quiz-option" data-correct="false">Artists preferred working with pixels</div>
                            <div class="quiz-option" data-correct="true">Hardware limitations required it</div>
                            <div class="quiz-option" data-correct="false">It was easier than other methods</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: What is the main challenge when creating circles in pixel art?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Circles require too many colors</div>
                            <div class="quiz-option" data-correct="true">Pixels can only approximate curves</div>
                            <div class="quiz-option" data-correct="false">Circles are not allowed in pixel art</div>
                            <div class="quiz-option" data-correct="false">The tools don't support circles</div>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>Practical Assessment</h3>
                        <p>To complete Week 1, make sure you've:</p>
                        <ul>
                            <li>✓ Created at least one pattern in the 8×8 grid</li>
                            <li>✓ Made three different geometric shapes</li>
                            <li>✓ Completed one 16×16 game icon</li>
                            <li>✓ Answered all quiz questions correctly</li>
                        </ul>
                        
                        <p><strong>Ready to move on?</strong> You should be comfortable with basic pixel placement and understand how the grid system works.</p>
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
                        </ul>
                    </div>

                    <p>This week, we dive into the heart of what makes pixel art visually compelling - colour and shading. You'll learn how to work with limited palettes, create the illusion of depth, and make your pixel art come alive with carefully chosen colours.</p>

                    <h3>What You'll Master This Week</h3>
                    <ul>
                        <li><strong>Practice 1:</strong> Colour theory basics and palette creation</li>
                        <li><strong>Practice 2:</strong> Basic shading techniques</li>
                        <li><strong>Challenge:</strong> Complete the heart shading exercise</li>
                        <li><strong>Assessment:</strong> Test your colour knowledge</li>
                    </ul>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Colour Theory for Pixel Art</h2>
                    
                    <h3>Working with Limited Palettes</h3>
                    <p>One of pixel art's defining characteristics is the use of limited colour palettes. Early games were restricted to just a few colours due to hardware limitations, but modern pixel artists often choose to limit their palettes for artistic cohesion.</p>

                    <div class="info-box">
                        <p><strong>Why Limit Colours?</strong> Constraints foster creativity, ensure visual harmony, and create a distinctive aesthetic that's easier for players to process.</p>
                    </div>

                    <h3>Colour Properties</h3>
                    <ul>
                        <li><strong>Hue:</strong> The colour itself (red, blue, green, etc.)</li>
                        <li><strong>Saturation:</strong> The intensity or purity of the colour</li>
                        <li><strong>Value:</strong> The lightness or darkness of the colour</li>
                    </ul>

                    <h3>Hue Shifting</h3>
                    <p>Rather than simply adding black or white to create shadows and highlights, pixel artists use "hue shifting" - slightly changing the hue as the value changes.</p>
                    
                    <div class="tip-box">
                        <p><strong>💡 Pro Tip:</strong> Shadows tend toward cooler hues (blues/purples), while highlights lean toward warmer hues (yellows/oranges).</p>
                    </div>

                    <h3>Creating Depth with Shading</h3>
                    <p>In pixel art, we typically use 3-4 shades per colour:</p>
                    <ol>
                        <li><strong>Shadow:</strong> The darkest shade</li>
                        <li><strong>Base:</strong> The main colour</li>
                        <li><strong>Highlight:</strong> The lightest shade</li>
                        <li><strong>Accent:</strong> Optional extreme highlight</li>
                    </ol>

                    <h3>Dithering</h3>
                    <p>Dithering uses patterns of pixels to create the illusion of intermediate colours or smooth gradients. Common patterns include:</p>
                    <ul>
                        <li>Checkerboard (50/50 blend)</li>
                        <li>Scattered pattern (25/75 or 75/25 blend)</li>
                        <li>Gradient dithering (progressive patterns)</li>
                    </ul>

                    <div class="warning-box">
                        <p><strong>⚠️ Warning:</strong> Use dithering sparingly! Over-dithering can make pixel art look noisy and lose its clean aesthetic.</p>
                    </div>
                `
            },
            practice1: {
                title: "Practice 1: Colour Palettes",
                content: `
                    <h2>Practice 1: Creating Colour Palettes</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Build Your First Palette</h3>
                            <p>Learn to create harmonious colour palettes by experimenting with different colour relationships.</p>
                            
                            <h4>Palette Exercises:</h4>
                            <ol>
                                <li><strong>Monochromatic:</strong> Create 4 shades of one colour</li>
                                <li><strong>Complementary:</strong> Use opposite colours on the colour wheel</li>
                                <li><strong>Analogous:</strong> Use neighbouring colours</li>
                                <li><strong>Limited Palette:</strong> Create a full scene with just 4 colours</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>Palette Creation Tips:</strong></p>
                                <ul>
                                    <li>Start with a base colour you like</li>
                                    <li>Create lighter/darker versions with hue shifting</li>
                                    <li>Test your palette with simple shapes</li>
                                    <li>Ensure good contrast between shades</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div id="week2-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#2C3E50', '#34495E', '#7F8C8D', '#95A5A6', '#BDC3C7', '#ECF0F1']
                }
            },
            practice2: {
                title: "Practice 2: Shading Basics",
                content: `
                    <h2>Practice 2: Basic Shading Techniques</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Shading Simple Forms</h3>
                            <p>Practice shading techniques on basic geometric shapes to understand how light creates form.</p>
                            
                            <h4>Shading Challenges:</h4>
                            <ol>
                                <li><strong>Sphere:</strong> Create a ball with smooth shading</li>
                                <li><strong>Cube:</strong> Show three visible faces with different values</li>
                                <li><strong>Cylinder:</strong> Demonstrate curved surface shading</li>
                                <li><strong>Pyramid:</strong> Angular shading with clear edges</li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Light Source:</strong> Always decide where your light is coming from first. Top-left is traditional for pixel art.</p>
                            </div>
                            
                            <h4>Shading Guidelines:</h4>
                            <ul>
                                <li>Use 3-4 shades maximum per object</li>
                                <li>Keep light source consistent</li>
                                <li>Shadows are cooler, highlights are warmer</li>
                                <li>Don't outline everything - let shading define edges</li>
                            </ul>
                        </div>
                        
                        <div id="week2-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#1a1a1a', '#4a4a4a', '#7a7a7a', '#aaaaaa', '#dadada', '#ffffff']
                }
            },
            challenge: {
                title: "Challenge: Shade a Heart",
                content: `
                    <h2>Challenge: Heart Shading Exercise</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Shading Challenge</h3>
                            <p>Use the provided 4-colour palette to shade this heart sprite. The outline is already drawn - your task is to bring it to life with colour and shading!</p>
                            
                            <h4>The Palette:</h4>
                            <ul>
                                <li><span style="display:inline-block; width:20px; height:20px; background:#442432; border:1px solid #000;"></span> Outline (darkest)</li>
                                <li><span style="display:inline-block; width:20px; height:20px; background:#9e2835; border:1px solid #000;"></span> Shadow</li>
                                <li><span style="display:inline-block; width:20px; height:20px; background:#d8504e; border:1px solid #000;"></span> Base colour</li>
                                <li><span style="display:inline-block; width:20px; height:20px; background:#ff7b7b; border:1px solid #000;"></span> Highlight</li>
                            </ul>
                            
                            <h4>Shading Steps:</h4>
                            <ol>
                                <li>Fill the entire heart with the base colour</li>
                                <li>Add shadows on the bottom and right side</li>
                                <li>Place highlights on the top-left area</li>
                                <li>Use the darkest colour to enhance depth in crevices</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>Goal:</strong> Create a heart that appears three-dimensional and could work as a game collectible or health indicator.</p>
                            </div>
                        </div>
                        
                        <div id="week2-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#442432', '#9e2835', '#d8504e', '#ff7b7b'],
                    preloadData: {
                        outline: [
                            "0000000000000000",
                            "0001100011000000",
                            "0010010100100000",
                            "0100001000001000",
                            "1000000000000100",
                            "1000000000000100",
                            "1000000000000100",
                            "0100000000001000",
                            "0010000000100000",
                            "0001000001000000",
                            "0000100010000000",
                            "0000010100000000",
                            "0000001000000000",
                            "0000000000000000",
                            "0000000000000000",
                            "0000000000000000"
                        ]
                    }
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 2 Assessment</h2>
                    
                    <p>Test your understanding of colour theory and shading principles!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What is "hue shifting" in pixel art?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using only grayscale colours</div>
                            <div class="quiz-option" data-correct="true">Changing hue slightly when creating shadows and highlights</div>
                            <div class="quiz-option" data-correct="false">Rotating the entire image</div>
                            <div class="quiz-option" data-correct="false">Using the maximum number of colours possible</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: How many shades are typically used for a single colour in pixel art?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">1-2 shades</div>
                            <div class="quiz-option" data-correct="true">3-4 shades</div>
                            <div class="quiz-option" data-correct="false">10-12 shades</div>
                            <div class="quiz-option" data-correct="false">As many as possible</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: Which direction is the traditional light source in pixel art?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="true">Top-left</div>
                            <div class="quiz-option" data-correct="false">Bottom-right</div>
                            <div class="quiz-option" data-correct="false">Directly above</div>
                            <div class="quiz-option" data-correct="false">From below</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: What is dithering used for in pixel art?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Making images larger</div>
                            <div class="quiz-option" data-correct="false">Adding more colours to the palette</div>
                            <div class="quiz-option" data-correct="true">Creating the illusion of intermediate colours or gradients</div>
                            <div class="quiz-option" data-correct="false">Removing unwanted pixels</div>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>Skills Checklist</h3>
                        <p>Before moving to Week 3, ensure you can:</p>
                        <ul>
                            <li>✓ Create a harmonious 4-colour palette</li>
                            <li>✓ Apply basic shading to simple shapes</li>
                            <li>✓ Understand hue shifting principles</li>
                            <li>✓ Complete the heart shading exercise</li>
                        </ul>
                    </div>
                `
            }
        }
    },
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
                        </ul>
                    </div>

                    <p>This week focuses on bringing characters to life through pixel art. You'll learn how to create memorable, expressive characters that work within the constraints of small sprite sizes while maintaining personality and appeal.</p>

                    <h3>Your Character Design Journey</h3>
                    <ul>
                        <li><strong>Practice 1:</strong> Silhouette and shape language</li>
                        <li><strong>Practice 2:</strong> Character proportions and features</li>
                        <li><strong>Challenge:</strong> Design a complete 32×32 character</li>
                        <li><strong>Assessment:</strong> Test your character design knowledge</li>
                    </ul>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Character Design Fundamentals</h2>
                    
                    <h3>The Power of Silhouettes</h3>
                    <p>In pixel art, a strong silhouette is crucial. Your character should be recognizable from their outline alone. This is especially important for small sprites where details are limited.</p>

                    <div class="info-box">
                        <p><strong>Silhouette Test:</strong> Fill your character with black. Can you still tell what it is? Can you identify its personality or role?</p>
                    </div>

                    <h3>Shape Language</h3>
                    <p>Different shapes convey different personalities:</p>
                    <ul>
                        <li><strong>Circles:</strong> Friendly, approachable, cute</li>
                        <li><strong>Squares:</strong> Stable, strong, dependable</li>
                        <li><strong>Triangles:</strong> Dynamic, aggressive, sharp</li>
                    </ul>

                    <h3>Character Proportions</h3>
                    <p>For pixel art characters, exaggerated proportions often work better than realistic ones:</p>
                    <ul>
                        <li><strong>Chibi style:</strong> Large head (1/3 to 1/2 of body height)</li>
                        <li><strong>Classic sprite:</strong> 1/4 head-to-body ratio</li>
                        <li><strong>Hero proportions:</strong> Broader shoulders, defined stance</li>
                    </ul>

                    <h3>Cultural Sensitivity in Design</h3>
                    <div class="warning-box">
                        <p><strong>Important:</strong> When designing characters, avoid stereotypes and research respectfully. Diverse representation enriches games when done thoughtfully.</p>
                    </div>

                    <h3>Working with Layers</h3>
                    <p>Professional pixel artists use layers to manage complex sprites:</p>
                    <ol>
                        <li><strong>Guide Layer:</strong> Rough silhouette or proportions</li>
                        <li><strong>Base Layer:</strong> Main character colours</li>
                        <li><strong>Detail Layer:</strong> Clothing, features, accessories</li>
                        <li><strong>Effects Layer:</strong> Shadows, highlights, special effects</li>
                    </ol>
                `
            },
            practice1: {
                title: "Practice 1: Silhouettes",
                content: `
                    <h2>Practice 1: Character Silhouettes</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Shape Language in Action</h3>
                            <p>Create character silhouettes that communicate personality through shape alone.</p>
                            
                            <h4>Silhouette Challenges:</h4>
                            <ol>
                                <li><strong>Friendly NPC:</strong> Use round shapes</li>
                                <li><strong>Villain:</strong> Angular, sharp shapes</li>
                                <li><strong>Hero:</strong> Balanced, dynamic pose</li>
                                <li><strong>Creature:</strong> Unique, memorable form</li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Pro Tip:</strong> Start with basic shapes (circles, squares, triangles) then refine into your character.</p>
                            </div>
                            
                            <h4>Silhouette Checklist:</h4>
                            <ul>
                                <li>✓ Instantly readable at small size</li>
                                <li>✓ Unique and memorable shape</li>
                                <li>✓ Communicates personality/role</li>
                                <li>✓ Clear action line or pose</li>
                            </ul>
                        </div>
                        
                        <div id="week3-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 32,
                    colors: ['#000000', '#333333', '#666666', '#999999', '#CCCCCC', '#FFFFFF']
                }
            },
            practice2: {
                title: "Practice 2: Character Features",
                content: `
                    <h2>Practice 2: Character Features and Details</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Adding Life to Characters</h3>
                            <p>Learn to add features and details that bring personality to your pixel art characters.</p>
                            
                            <h4>Feature Exercises:</h4>
                            <ol>
                                <li><strong>Eyes:</strong> Create expressive eyes (2-4 pixels)</li>
                                <li><strong>Hair:</strong> Suggest hairstyles with minimal pixels</li>
                                <li><strong>Clothing:</strong> Simple but recognizable outfits</li>
                                <li><strong>Accessories:</strong> Character-defining items</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>Less is More:</strong> In pixel art, a single pixel can be an eye, a button, or a detail. Choose carefully!</p>
                            </div>
                            
                            <h4>Detail Guidelines:</h4>
                            <ul>
                                <li>Focus on most important features first</li>
                                <li>Use colour to separate elements</li>
                                <li>Don't over-detail small areas</li>
                                <li>Maintain overall readability</li>
                            </ul>
                        </div>
                        
                        <div id="week3-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 32,
                    colors: ['#2B1B17', '#F5DEB3', '#8B4513', '#FF6B6B', '#4ECDC4', '#45B7D1', '#F7DC6F', '#BB8FCE']
                }
            },
            challenge: {
                title: "Challenge: Complete Character",
                content: `
                    <h2>Challenge: Design a Game Character</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Character Design Challenge</h3>
                            <p>Create a complete 32×32 character sprite using the layered canvas system. A guide silhouette is provided to help with proportions.</p>
                            
                            <h4>Character Brief:</h4>
                            <p>Design one of these character types:</p>
                            <ul>
                                <li>🗡️ Brave adventurer</li>
                                <li>🧙 Wise wizard</li>
                                <li>🏃 Speedy rogue</li>
                                <li>🛡️ Sturdy knight</li>
                            </ul>
                            
                            <h4>Design Process:</h4>
                            <ol>
                                <li>Use the guide layer for basic proportions</li>
                                <li>Create your character outline on Layer 1</li>
                                <li>Add base colours and details</li>
                                <li>Apply shading for dimension</li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Layer Tip:</strong> Toggle the guide layer on/off to check your progress. Use it for proportions but create your own unique character!</p>
                            </div>
                            
                            <h4>Character Checklist:</h4>
                            <ul>
                                <li>✓ Clear, readable silhouette</li>
                                <li>✓ Consistent colour palette (6-8 colours)</li>
                                <li>✓ Personality expressed through design</li>
                                <li>✓ Ready for animation (neutral pose)</li>
                            </ul>
                        </div>
                        
                        <div id="week3-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'layered',
                    gridSize: 32,
                    colors: ['#1a1a1a', '#4a4a4a', '#7a7a7a', '#F5DEB3', '#8B4513', 
                             '#FF6B6B', '#4ECDC4', '#45B7D1', '#F7DC6F', '#BB8FCE'],
                    guideData: [
                        "00000000000000111110000000000000",
                        "00000000000011111111100000000000",
                        "00000000000111111111110000000000",
                        "00000000001111111111111000000000",
                        "00000000011111111111111100000000",
                        "00000000111111111111111110000000",
                        "00000001111111111111111111000000",
                        "00000001111111111111111111000000",
                        "00000000111111111111111110000000",
                        "00000000011111111111111100000000",
                        "00000000001111111111111000000000",
                        "00000000000111111111110000000000",
                        "00000000000011111111100000000000",
                        "00000000000011111111100000000000",
                        "00000000000111111111110000000000",
                        "00000000001111111111111000000000",
                        "00000000011111111111111100000000",
                        "00000000111111111111111110000000",
                        "00000000111111111111111110000000",
                        "00000000111111111111111110000000",
                        "00000000111111111111111110000000",
                        "00000000011111111111111100000000",
                        "00000000011111111111111100000000",
                        "00000000011111111111111100000000",
                        "00000000011111111111111100000000",
                        "00000000001111111111111000000000",
                        "00000000001111111111111000000000",
                        "00000000001111001111111000000000",
                        "00000000001111001111111000000000",
                        "00000000001111001111111000000000",
                        "00000000001111001111111000000000",
                        "00000000000000000000000000000000"
                    ]
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 3 Assessment</h2>
                    
                    <p>Test your understanding of character design principles!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: Why are silhouettes important in pixel art character design?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">They make characters look more realistic</div>
                            <div class="quiz-option" data-correct="true">They ensure characters are recognizable even at small sizes</div>
                            <div class="quiz-option" data-correct="false">They are easier to animate</div>
                            <div class="quiz-option" data-correct="false">They use fewer colours</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: What shape language typically conveys a friendly character?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Sharp triangles</div>
                            <div class="quiz-option" data-correct="false">Rigid squares</div>
                            <div class="quiz-option" data-correct="true">Soft circles</div>
                            <div class="quiz-option" data-correct="false">Jagged edges</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: For a 32×32 pixel character, what's a good head-to-body ratio?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">1:10 (tiny head)</div>
                            <div class="quiz-option" data-correct="true">1:3 or 1:4 (larger head for clarity)</div>
                            <div class="quiz-option" data-correct="false">1:1 (half head, half body)</div>
                            <div class="quiz-option" data-correct="false">No specific ratio needed</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: When designing diverse characters, what's most important?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using as many colours as possible</div>
                            <div class="quiz-option" data-correct="false">Making all characters look similar</div>
                            <div class="quiz-option" data-correct="true">Researching and avoiding stereotypes</div>
                            <div class="quiz-option" data-correct="false">Only designing one type of character</div>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>Character Design Mastery</h3>
                        <p>Before proceeding to Week 4, you should be able to:</p>
                        <ul>
                            <li>✓ Create readable character silhouettes</li>
                            <li>✓ Apply shape language effectively</li>
                            <li>✓ Work with layers for complex sprites</li>
                            <li>✓ Design with cultural sensitivity</li>
                        </ul>
                    </div>
                `
            }
        }
    },
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
                        </ul>
                    </div>

                    <p>This week explores the art of creating game environments through tiles. You'll learn how to create seamless patterns, design modular tilesets, and build atmospheric game worlds efficiently.</p>

                    <h3>Environmental Challenges</h3>
                    <ul>
                        <li><strong>Practice 1:</strong> Basic seamless patterns</li>
                        <li><strong>Practice 2:</strong> Creating tile variations</li>
                        <li><strong>Challenge:</strong> Design a complete environment tileset</li>
                        <li><strong>Assessment:</strong> Test your tilemap knowledge</li>
                    </ul>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Understanding Tiles and Tilemaps</h2>
                    
                    <h3>What Are Tiles?</h3>
                    <p>Tiles are small, square images that can be repeated and combined to create larger environments. They're the building blocks of game levels, allowing developers to create vast worlds from a small set of reusable assets.</p>

                    <div class="info-box">
                        <p><strong>Efficiency:</strong> A 20-tile set can create infinite level variations, making tiles perfect for games with large worlds or procedural generation.</p>
                    </div>

                    <h3>The Mathematics of Seamless Tiles</h3>
                    <p>For a tile to be seamless, its edges must match perfectly when repeated:</p>
                    <ul>
                        <li><strong>Top edge</strong> must match bottom edge</li>
                        <li><strong>Left edge</strong> must match right edge</li>
                        <li><strong>Corners</strong> must work with all adjacent tiles</li>
                    </ul>

                    <h3>Types of Tiles</h3>
                    <ol>
                        <li><strong>Basic Tiles:</strong> Simple repeating patterns (grass, water, sand)</li>
                        <li><strong>Edge Tiles:</strong> Transitions between different terrain types</li>
                        <li><strong>Corner Tiles:</strong> Smooth turns and intersections</li>
                        <li><strong>Decorative Tiles:</strong> Break up repetition (rocks, plants, details)</li>
                    </ol>

                    <h3>Creating Visual Interest</h3>
                    <p>Avoid the "grid look" with these techniques:</p>
                    <ul>
                        <li><strong>Variation tiles:</strong> Multiple versions of the same terrain</li>
                        <li><strong>Irregular patterns:</strong> Avoid perfect grids in your designs</li>
                        <li><strong>Overlapping elements:</strong> Let details cross tile boundaries</li>
                        <li><strong>Strategic decoration:</strong> Place unique elements to break monotony</li>
                    </ul>

                    <div class="tip-box">
                        <p><strong>💡 Pro Tip:</strong> Test your tiles early and often. The live preview helps catch seaming issues immediately!</p>
                    </div>
                `
            },
            practice1: {
                title: "Practice 1: Seamless Patterns",
                content: `
                    <h2>Practice 1: Creating Seamless Patterns</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Master Seamless Tiles</h3>
                            <p>Learn to create patterns that tile perfectly in all directions. Watch the live preview to see your tile repeat!</p>
                            
                            <h4>Pattern Challenges:</h4>
                            <ol>
                                <li><strong>Grass:</strong> Natural, organic pattern</li>
                                <li><strong>Stone:</strong> Regular but not monotonous</li>
                                <li><strong>Water:</strong> Flowing, animated feel</li>
                                <li><strong>Path:</strong> Directional but seamless</li>
                            </ol>
                            
                            <div class="warning-box">
                                <p><strong>Common Mistakes:</strong></p>
                                <ul>
                                    <li>Too much detail in center, empty edges</li>
                                    <li>Obvious repeating elements</li>
                                    <li>Not testing corner connections</li>
                                </ul>
                            </div>
                            
                            <h4>Seamless Tile Tips:</h4>
                            <ul>
                                <li>Work on edges first, then fill center</li>
                                <li>Use the preview constantly</li>
                                <li>Keep patterns subtle</li>
                                <li>Test with different tile counts</li>
                            </ul>
                        </div>
                        
                        <div id="week4-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'tile',
                    gridSize: 16,
                    colors: ['#3E2723', '#5D4037', '#6D4C41', '#8D6E63', '#A1887F', '#BCAAA4']
                }
            },
            practice2: {
                title: "Practice 2: Tile Variations",
                content: `
                    <h2>Practice 2: Creating Tile Variations</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Breaking the Monotony</h3>
                            <p>Create multiple versions of the same tile type to add visual interest to large areas.</p>
                            
                            <h4>Variation Techniques:</h4>
                            <ol>
                                <li><strong>Subtle changes:</strong> Move a few pixels</li>
                                <li><strong>Add details:</strong> Small rocks, grass tufts</li>
                                <li><strong>Lighting variation:</strong> Slightly different shading</li>
                                <li><strong>Wear patterns:</strong> Cracks, weathering</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>The 70-30 Rule:</strong> 70% of your tiles should be basic/neutral, 30% should have distinctive features. This creates interest without chaos.</p>
                            </div>
                            
                            <h4>Creating a Tile Family:</h4>
                            <ul>
                                <li>Start with your base tile</li>
                                <li>Create 2-3 subtle variations</li>
                                <li>Add 1-2 feature tiles (with rocks, plants, etc.)</li>
                                <li>Ensure all variations work together</li>
                            </ul>
                        </div>
                        
                        <div id="week4-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'tile',
                    gridSize: 16,
                    colors: ['#1B5E20', '#2E7D32', '#388E3C', '#4CAF50', '#66BB6A', '#81C784']
                }
            },
            challenge: {
                title: "Challenge: Environment Set",
                content: `
                    <h2>Challenge: Complete Environment Tileset</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Tilemap Challenge</h3>
                            <p>Create a cohesive environment tileset that could be used to build game levels. Focus on one biome type.</p>
                            
                            <h4>Biome Options:</h4>
                            <ul>
                                <li>🌲 Forest floor (grass, dirt, trees)</li>
                                <li>🏔️ Mountain path (stone, snow, rocks)</li>
                                <li>🏜️ Desert ruins (sand, stone blocks)</li>
                                <li>🏰 Castle interior (stone floors, walls)</li>
                            </ul>
                            
                            <h4>Your Tileset Should Include:</h4>
                            <ol>
                                <li>Base terrain tile (grass/stone/sand)</li>
                                <li>At least one variation tile</li>
                                <li>Path or secondary terrain</li>
                                <li>One decorative element</li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Design Tip:</strong> Keep a consistent light source and colour palette across all tiles for visual cohesion.</p>
                            </div>
                            
                            <h4>Quality Standards:</h4>
                            <ul>
                                <li>✓ All tiles seamlessly connect</li>
                                <li>✓ Consistent style and shading</li>
                                <li>✓ Interesting but not distracting</li>
                                <li>✓ Works at game scale</li>
                            </ul>
                        </div>
                        
                        <div id="week4-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'tile',
                    gridSize: 16,
                    colors: ['#263238', '#37474F', '#455A64', '#546E7A', '#607D8B', '#78909C', 
                             '#90A4AE', '#B0BEC5', '#CFD8DC', '#ECEFF1']
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 4 Assessment</h2>
                    
                    <p>Test your understanding of tiles and environment art!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What makes a tile "seamless"?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">It has no visible pixels</div>
                            <div class="quiz-option" data-correct="true">Its edges match perfectly when repeated</div>
                            <div class="quiz-option" data-correct="false">It uses seamless colours</div>
                            <div class="quiz-option" data-correct="false">It has no shading</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: Why use tile variations in game environments?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">To make the game file larger</div>
                            <div class="quiz-option" data-correct="false">Because one tile isn't enough</div>
                            <div class="quiz-option" data-correct="true">To break up visual repetition</div>
                            <div class="quiz-option" data-correct="false">To confuse players</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: What's the typical tile size for retro-style games?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">4×4 pixels</div>
                            <div class="quiz-option" data-correct="true">16×16 pixels</div>
                            <div class="quiz-option" data-correct="false">64×64 pixels</div>
                            <div class="quiz-option" data-correct="false">128×128 pixels</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: What should you avoid in seamless tile design?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using colours</div>
                            <div class="quiz-option" data-correct="true">Distinctive elements that create obvious patterns</div>
                            <div class="quiz-option" data-correct="false">Shading</div>
                            <div class="quiz-option" data-correct="false">Organic shapes</div>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>Environment Art Checklist</h3>
                        <p>Before moving to animation, ensure you can:</p>
                        <ul>
                            <li>✓ Create seamless tiles that connect properly</li>
                            <li>✓ Design tile variations for visual interest</li>
                            <li>✓ Maintain consistent style across a tileset</li>
                            <li>✓ Use the tile preview effectively</li>
                        </ul>
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
                            <li>Apply animation principles to pixel art</li>
                            <li>Create smooth character animations</li>
                            <li>Master timing and spacing in limited frames</li>
                            <li>Use onion skinning effectively</li>
                        </ul>
                    </div>

                    <p>Animation brings your pixel art to life! This week, you'll learn how to create fluid movements within the constraints of pixel art, from simple idle animations to complex character actions.</p>

                    <h3>Animation Exercises</h3>
                    <ul>
                        <li><strong>Practice 1:</strong> Bouncing ball fundamentals</li>
                        <li><strong>Practice 2:</strong> Character idle animation</li>
                        <li><strong>Challenge:</strong> Create a walk cycle</li>
                        <li><strong>Assessment:</strong> Test your animation knowledge</li>
                    </ul>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>Animation Principles for Pixel Art</h2>
                    
                    <h3>The 12 Principles Adapted</h3>
                    <p>Disney's 12 principles of animation apply to pixel art, but with unique constraints:</p>

                    <div class="info-box">
                        <p><strong>Key Principle:</strong> In pixel art, every frame counts. With limited resolution, each pixel movement must be deliberate and meaningful.</p>
                    </div>

                    <h3>Essential Animation Principles</h3>
                    <ol>
                        <li><strong>Squash and Stretch:</strong> Even 1-2 pixels can show impact</li>
                        <li><strong>Anticipation:</strong> A 1-2 frame setup for actions</li>
                        <li><strong>Follow Through:</strong> Secondary motion adds life</li>
                        <li><strong>Timing:</strong> Frame count determines feel</li>
                    </ol>

                    <h3>Frame Counts for Common Actions</h3>
                    <ul>
                        <li><strong>Idle breathing:</strong> 4-6 frames</li>
                        <li><strong>Walk cycle:</strong> 4-8 frames</li>
                        <li><strong>Run cycle:</strong> 4-6 frames</li>
                        <li><strong>Jump:</strong> 5-7 frames</li>
                        <li><strong>Attack:</strong> 3-5 frames</li>
                    </ul>

                    <h3>Pixel Art Animation Techniques</h3>
                    <ul>
                        <li><strong>Sub-pixel animation:</strong> Simulate smooth motion with colour</li>
                        <li><strong>Smear frames:</strong> Stretch pixels for fast motion</li>
                        <li><strong>Selective animation:</strong> Animate only key parts</li>
                        <li><strong>Looping:</strong> Design seamless cycles</li>
                    </ul>

                    <div class="tip-box">
                        <p><strong>💡 Pro Tip:</strong> Start with silhouettes! If the animation reads well in pure black, it will work with details.</p>
                    </div>

                    <h3>Working with Onion Skinning</h3>
                    <p>Onion skinning shows previous/next frames as ghosts:</p>
                    <ul>
                        <li>Helps maintain volume consistency</li>
                        <li>Shows motion arcs clearly</li>
                        <li>Prevents pixel "popping"</li>
                        <li>Essential for smooth animation</li>
                    </ul>
                `
            },
            practice1: {
                title: "Practice 1: Bouncing Ball",
                content: `
                    <h2>Practice 1: Bouncing Ball Animation</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Master the Fundamentals</h3>
                            <p>The bouncing ball teaches essential animation principles. Create a convincing bounce in just 6-8 frames!</p>
                            
                            <h4>Animation Steps:</h4>
                            <ol>
                                <li><strong>Frame 1:</strong> Ball at top (round shape)</li>
                                <li><strong>Frame 2-3:</strong> Falling (slight stretch)</li>
                                <li><strong>Frame 4:</strong> Impact (maximum squash)</li>
                                <li><strong>Frame 5:</strong> Rebound (stretch upward)</li>
                                <li><strong>Frame 6-7:</strong> Rising (returning to round)</li>
                                <li><strong>Frame 8:</strong> Peak (slight hang time)</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>Squash & Stretch:</strong> Maintain the ball's volume - if it gets wider, it must get shorter!</p>
                            </div>
                            
                            <h4>Tips for Success:</h4>
                            <ul>
                                <li>Use onion skin to check arcs</li>
                                <li>More frames at impact (slow in/out)</li>
                                <li>Keep consistent volume</li>
                                <li>Add a shadow for ground contact</li>
                            </ul>
                        </div>
                        
                        <div id="week5-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'animation',
                    gridSize: 16,
                    colors: ['#E74C3C', '#C0392B', '#F39C12', '#D68910', '#34495E', '#2C3E50'],
                    fps: 8
                }
            },
            practice2: {
                title: "Practice 2: Idle Animation",
                content: `
                    <h2>Practice 2: Character Idle Animation</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Breathing Life into Characters</h3>
                            <p>Create a subtle idle animation that shows your character is alive and breathing.</p>
                            
                            <h4>Idle Animation Elements:</h4>
                            <ol>
                                <li><strong>Breathing:</strong> Chest rises and falls (1-2 pixels)</li>
                                <li><strong>Weight shift:</strong> Slight sway or bounce</li>
                                <li><strong>Secondary motion:</strong> Hair, clothes, accessories</li>
                                <li><strong>Blink (optional):</strong> Every few cycles</li>
                            </ol>
                            
                            <div class="tip-box">
                                <p><strong>Subtlety is Key:</strong> Idle animations should be felt more than seen. Too much movement is distracting!</p>
                            </div>
                            
                            <h4>Creating Natural Motion:</h4>
                            <ul>
                                <li>Use 4-6 frames for smooth loop</li>
                                <li>Offset different parts (hair lags behind)</li>
                                <li>Vary timing (not everything moves together)</li>
                                <li>Keep extremes subtle (1-2 pixel max)</li>
                            </ul>
                        </div>
                        
                        <div id="week5-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'animation',
                    gridSize: 32,
                    colors: ['#2B1B17', '#F5DEB3', '#8B4513', '#FF6B6B', '#4ECDC4', 
                             '#45B7D1', '#F7DC6F', '#BB8FCE'],
                    fps: 6
                }
            },
            challenge: {
                title: "Challenge: Walk Cycle",
                content: `
                    <h2>Challenge: Create a Walk Cycle</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Animation Challenge</h3>
                            <p>Create a complete walk cycle - the most important animation in game development!</p>
                            
                            <h4>Walk Cycle Basics (4 frames):</h4>
                            <ol>
                                <li><strong>Contact:</strong> Front foot touches, back foot pushes</li>
                                <li><strong>Down:</strong> Weight shifts, body lowers slightly</li>
                                <li><strong>Passing:</strong> Back leg passes front, body rises</li>
                                <li><strong>Up:</strong> Highest point, legs crossed</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>Mirror Magic:</strong> Frames 3-4 can often mirror frames 1-2 with legs swapped!</p>
                            </div>
                            
                            <h4>Walk Cycle Checklist:</h4>
                            <ul>
                                <li>✓ Clear leg positions in each frame</li>
                                <li>✓ Body moves up and down slightly</li>
                                <li>✓ Arms swing opposite to legs</li>
                                <li>✓ Smooth loop back to frame 1</li>
                            </ul>
                            
                            <h4>Advanced Tips:</h4>
                            <ul>
                                <li>Add personality with posture</li>
                                <li>Consider character weight</li>
                                <li>Include secondary motion</li>
                                <li>Test at different speeds</li>
                            </ul>
                        </div>
                        
                        <div id="week5-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'animation',
                    gridSize: 32,
                    colors: ['#1a1a1a', '#4a4a4a', '#7a7a7a', '#F5DEB3', '#8B4513', 
                             '#FF6B6B', '#4ECDC4', '#45B7D1', '#F7DC6F', '#BB8FCE'],
                    fps: 8
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 5 Assessment</h2>
                    
                    <p>Test your understanding of pixel art animation!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: What's the minimum frame count for a basic walk cycle?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">2 frames</div>
                            <div class="quiz-option" data-correct="true">4 frames</div>
                            <div class="quiz-option" data-correct="false">12 frames</div>
                            <div class="quiz-option" data-correct="false">24 frames</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: What does "onion skinning" show in animation?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">The final animation only</div>
                            <div class="quiz-option" data-correct="false">Random frames</div>
                            <div class="quiz-option" data-correct="true">Previous/next frames as ghosts</div>
                            <div class="quiz-option" data-correct="false">Only the current frame</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: In pixel art, how much squash and stretch is typically used?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">None at all</div>
                            <div class="quiz-option" data-correct="true">1-3 pixels maximum</div>
                            <div class="quiz-option" data-correct="false">50% of the sprite size</div>
                            <div class="quiz-option" data-correct="false">As much as possible</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: What's most important for a smooth animation loop?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Using many colours</div>
                            <div class="quiz-option" data-correct="false">Having 60 frames</div>
                            <div class="quiz-option" data-correct="true">Last frame flows into first frame</div>
                            <div class="quiz-option" data-correct="false">Avoiding any movement</div>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>Animation Skills Checklist</h3>
                        <p>Before moving to Unity integration, ensure you can:</p>
                        <ul>
                            <li>✓ Apply squash and stretch effectively</li>
                            <li>✓ Create smooth looping animations</li>
                            <li>✓ Use onion skinning for consistency</li>
                            <li>✓ Animate with minimal frames</li>
                        </ul>
                    </div>
                `
            }
        }
    },
    week6: {
        title: "Game Art Pipeline & Unity Integration",
        tabs: {
            overview: {
                title: "Overview",
                content: `
                    <h2>Week 6: Game Art Pipeline & Unity Integration</h2>
                    
                    <div class="info-box">
                        <h3>Learning Objectives</h3>
                        <ul>
                            <li>Export pixel art correctly for game engines</li>
                            <li>Configure Unity for pixel-perfect rendering</li>
                            <li>Organize assets professionally</li>
                            <li>Implement animations in Unity</li>
                        </ul>
                    </div>

                    <p>The final week brings everything together! Learn how to properly export your pixel art and integrate it into Unity with pixel-perfect precision. This is where your art becomes playable!</p>

                    <h3>Pipeline Mastery</h3>
                    <ul>
                        <li><strong>Practice 1:</strong> Asset preparation and export</li>
                        <li><strong>Practice 2:</strong> Unity import settings</li>
                        <li><strong>Challenge:</strong> Complete scene setup</li>
                        <li><strong>Assessment:</strong> Test your pipeline knowledge</li>
                    </ul>
                `
            },
            concepts: {
                title: "Concepts",
                content: `
                    <h2>The Complete Game Art Pipeline</h2>
                    
                    <h3>From Pixels to Playable</h3>
                    <p>The journey from pixel art creation to in-game implementation requires careful attention to technical details. One wrong setting can blur your crisp pixels!</p>

                    <div class="warning-box">
                        <p><strong>Critical Setting:</strong> Unity's default import settings will DESTROY pixel art. You must configure every sprite correctly!</p>
                    </div>

                    <h3>Export Best Practices</h3>
                    <ul>
                        <li><strong>File Format:</strong> PNG with transparency</li>
                        <li><strong>Colour Mode:</strong> RGB (not indexed)</li>
                        <li><strong>Scale:</strong> Export at 1x (original size)</li>
                        <li><strong>Organization:</strong> Logical folder structure</li>
                    </ul>

                    <h3>Unity Import Settings</h3>
                    <div class="code-block">
Texture Type: Sprite (2D and UI)
Sprite Mode: Single/Multiple
Pixels Per Unit: [Your tile size]
Filter Mode: Point (no filter) ← CRITICAL!
Compression: None
                    </div>

                    <h3>Pixel Perfect Camera</h3>
                    <p>Unity's Pixel Perfect Camera ensures your art displays correctly:</p>
                    <ul>
                        <li><strong>Reference Resolution:</strong> Your target display size</li>
                        <li><strong>Pixels Per Unit:</strong> Must match sprite settings</li>
                        <li><strong>Upscale Render Texture:</strong> For crisp scaling</li>
                    </ul>

                    <h3>Asset Organisation</h3>
                    <div class="code-block">
Assets/
├── Sprites/
│   ├── Characters/
│   ├── Environment/
│   ├── UI/
│   └── Effects/
├── Animations/
├── Tilemaps/
└── Materials/
                    </div>

                    <div class="tip-box">
                        <p><strong>💡 Pro Tip:</strong> Create a sprite import preset in Unity to apply correct settings automatically!</p>
                    </div>
                `
            },
            practice1: {
                title: "Practice 1: Asset Export",
                content: `
                    <h2>Practice 1: Preparing Assets for Export</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Exercise: Professional Asset Preparation</h3>
                            <p>Learn to export your pixel art properly for game engine use.</p>
                            
                            <h4>Export Checklist:</h4>
                            <ol>
                                <li><strong>Clean your sprites:</strong> Remove stray pixels</li>
                                <li><strong>Check transparency:</strong> No white backgrounds</li>
                                <li><strong>Consistent sizing:</strong> Power of 2 when needed</li>
                                <li><strong>Logical naming:</strong> hero_idle_01.png</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>Naming Convention:</strong></p>
                                <ul>
                                    <li>character_action_frame.png</li>
                                    <li>tile_terrain_variant.png</li>
                                    <li>ui_element_state.png</li>
                                </ul>
                            </div>
                            
                            <h4>Sprite Sheet vs Individual Files:</h4>
                            <ul>
                                <li><strong>Sprite Sheets:</strong> Multiple frames in one image</li>
                                <li><strong>Individual Files:</strong> Easier to update</li>
                                <li><strong>Unity's Choice:</strong> Both work with proper setup</li>
                            </ul>
                            
                            <h4>Practice Task:</h4>
                            <p>Create a simple 16×16 test sprite to understand the export process. Add transparency and ensure clean edges.</p>
                        </div>
                        
                        <div id="week6-practice1-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF']
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
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" 
                                 alt="Unity Import Settings" 
                                 style="width: 100%; max-width: 400px; height: 300px; background: #37474F; border-radius: 5px; margin: 1rem 0;">
                            
                            <div class="warning-box">
                                <p><strong>Most Common Mistakes:</strong></p>
                                <ul>
                                    <li>❌ Bilinear filtering (causes blur)</li>
                                    <li>❌ Texture compression (changes colors)</li>
                                    <li>❌ Wrong pixels per unit (scaling issues)</li>
                                    <li>❌ Generate Mip Maps on (wastes memory)</li>
                                </ul>
                            </div>
                            
                            <h4>Correct Settings:</h4>
                            <table style="width: 100%; margin: 1rem 0;">
                                <tr>
                                    <td><strong>Setting</strong></td>
                                    <td><strong>Correct Value</strong></td>
                                    <td><strong>Why</strong></td>
                                </tr>
                                <tr>
                                    <td>Filter Mode</td>
                                    <td>Point (no filter)</td>
                                    <td>Preserves sharp pixels</td>
                                </tr>
                                <tr>
                                    <td>Compression</td>
                                    <td>None</td>
                                    <td>Maintains exact colors</td>
                                </tr>
                                <tr>
                                    <td>Pixels Per Unit</td>
                                    <td>16 (or your tile size)</td>
                                    <td>Defines world scale</td>
                                </tr>
                            </table>
                            
                            <h4>Practice Scenario:</h4>
                            <p>Design a sprite that will clearly show if import settings are wrong (like a checkerboard pattern or precise lines).</p>
                        </div>
                        
                        <div id="week6-practice2-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 16,
                    colors: ['#000000', '#FFFFFF', '#FF0000', '#00FF00']
                }
            },
            challenge: {
                title: "Challenge: Complete Setup",
                content: `
                    <h2>Challenge: Full Pipeline Test</h2>
                    
                    <div class="exercise-container">
                        <div class="exercise-instructions">
                            <h3>Your Final Challenge</h3>
                            <p>Create a complete set of assets ready for Unity integration!</p>
                            
                            <h4>Asset Package Requirements:</h4>
                            <ol>
                                <li><strong>Character Sprite:</strong> With idle animation (4 frames)</li>
                                <li><strong>Environment Tiles:</strong> At least 3 tiles that connect</li>
                                <li><strong>Game Object:</strong> Collectible or interactive item</li>
                                <li><strong>UI Element:</strong> Health bar or icon</li>
                            </ol>
                            
                            <div class="info-box">
                                <p><strong>Professional Standards:</strong></p>
                                <ul>
                                    <li>Consistent colour palette across all assets</li>
                                    <li>Matching pixel density (no mixed resolutions)</li>
                                    <li>Clear, descriptive filenames</li>
                                    <li>Proper transparency on all sprites</li>
                                </ul>
                            </div>
                            
                            <h4>Unity Scene Setup:</h4>
                            <ol>
                                <li>Import all assets with correct settings</li>
                                <li>Create a tilemap with your tiles</li>
                                <li>Place animated character in scene</li>
                                <li>Add Pixel Perfect Camera</li>
                                <li>Test at different resolutions</li>
                            </ol>
                            
                            <h4>Success Criteria:</h4>
                            <ul>
                                <li>✓ All pixels appear sharp at any zoom</li>
                                <li>✓ Animations play smoothly</li>
                                <li>✓ Tiles connect seamlessly</li>
                                <li>✓ Consistent visual style</li>
                            </ul>
                        </div>
                        
                        <div id="week6-challenge-canvas"></div>
                    </div>
                `,
                canvas: {
                    type: 'fill',
                    gridSize: 32,
                    colors: ['#1a1a1a', '#4a4a4a', '#7a7a7a', '#aaaaaa', '#ffffff',
                             '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7']
                }
            },
            assessment: {
                title: "Assessment",
                content: `
                    <h2>Week 6 Assessment</h2>
                    
                    <p>Test your understanding of the game art pipeline!</p>
                    
                    <div class="quiz-question">
                        <h4>Question 1: Which Filter Mode must be used for pixel art in Unity?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">Bilinear</div>
                            <div class="quiz-option" data-correct="true">Point (no filter)</div>
                            <div class="quiz-option" data-correct="false">Trilinear</div>
                            <div class="quiz-option" data-correct="false">Anisotropic</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 2: What file format is best for pixel art sprites?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">JPEG</div>
                            <div class="quiz-option" data-correct="true">PNG</div>
                            <div class="quiz-option" data-correct="false">BMP</div>
                            <div class="quiz-option" data-correct="false">GIF</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 3: What does "Pixels Per Unit" control in Unity?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">The sprite's color</div>
                            <div class="quiz-option" data-correct="false">Animation speed</div>
                            <div class="quiz-option" data-correct="true">How many pixels equal one Unity unit</div>
                            <div class="quiz-option" data-correct="false">File compression</div>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <h4>Question 4: Why use the Pixel Perfect Camera in Unity?</h4>
                        <div class="quiz-options">
                            <div class="quiz-option" data-correct="false">To add motion blur</div>
                            <div class="quiz-option" data-correct="true">To ensure pixels display without distortion</div>
                            <div class="quiz-option" data-correct="false">To increase file size</div>
                            <div class="quiz-option" data-correct="false">To slow down rendering</div>
                        </div>
                    </div>
                    
                    <div class="info-box mt-2">
                        <h3>🎉 Course Complete!</h3>
                        <p>Congratulations! You've mastered:</p>
                        <ul>
                            <li>✓ Pixel art fundamentals and techniques</li>
                            <li>✓ Colour theory and shading</li>
                            <li>✓ Character and environment design</li>
                            <li>✓ Animation principles</li>
                            <li>✓ Professional game art pipeline</li>
                        </ul>
                        
                        <p><strong>Next Steps:</strong> Create your own game art portfolio and start building games with your new skills!</p>
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