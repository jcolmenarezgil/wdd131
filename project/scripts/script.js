document.addEventListener('DOMContentLoaded', function () {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        if (linkPage === currentPage) {
            link.classList.add('highlighted');
        }
    });
});

function getCurrentPage() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop();
    return pageName;
}

/* call-to-action */
document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.querySelector('.timer');
    const callToActionBtn = document.querySelector('#call-to-action');
    const initialMinutes = 59;
    const initialSeconds = 59;
    let timeLeft;

    function getTimeLeftFromStorage() {
        const storedTime = localStorage.getItem('timerTimeLeft');
        if (storedTime) {
            return parseInt(storedTime, 10);
        }
        return initialMinutes * 60 + initialSeconds;
    }

    function saveTimeToStorage(seconds) {
        localStorage.setItem('timerTimeLeft', seconds);
    }

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        return `<p>remaining time ${formattedMinutes}:${formattedSeconds}</p>`;
    }

    function updateTimerDisplay() {
        timerDisplay.innerHTML = formatTime(timeLeft);
    }

    function shakeButton() {
        callToActionBtn.classList.add('shake');
        setTimeout(() => {
            callToActionBtn.classList.remove('shake');
        }, 1000);
    }

    function startTimer() {
        timeLeft = getTimeLeftFromStorage();
        updateTimerDisplay();

        const timerInterval = setInterval(() => {
            timeLeft--;
            saveTimeToStorage(timeLeft);
            updateTimerDisplay();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.innerHTML = "<p>Offer expires soon</p>";
                shakeButton();
                localStorage.removeItem('timerTimeLeft');
            }
        }, 1000);
    }

    startTimer();
});

/* changeCharacter */

function changeCharacter() {
    const maleRadio = document.querySelector('#male');
    const femaleRadio = document.querySelector('#female');
    const instituteRadio = document.querySelector('#institution');
    const characterDiv = document.querySelector('#Character');

    maleRadio.addEventListener('change', function () {
        if (this.checked) {
            characterDiv.innerHTML = '<img src="images/male-magician.webp" alt="male-magician">';
        }
    });

    femaleRadio.addEventListener('change', function () {
        if (this.checked) {
            characterDiv.innerHTML = '<img src="images/female-magician.webp" alt="female-magician">';
        }
    });

    instituteRadio.addEventListener('change', function () {
        if (this.checked) {
            characterDiv.innerHTML = '<img src="images/institute.webp" alt="institute">';
        }
    })
}

document.addEventListener('DOMContentLoaded', changeCharacter);

document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('.signup');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const name = document.querySelector('#name').value;
        const lastname = document.querySelector('#lastname').value;

        const userAccount = {
            gender: gender,
            name: name,
            lastname: lastname
        };

        localStorage.setItem('userAccount', JSON.stringify(userAccount));

        window.location.href = 'index.html';
    });

    const storedAccount = localStorage.getItem('userAccount');
    if (storedAccount) {
        const parsedAccount = JSON.parse(storedAccount);
        document.querySelector('#name').value = parsedAccount.name || '';
        document.querySelector('#lastname').value = parsedAccount.lastname || '';
        const characterDiv = document.querySelector('#Character');
        if (parsedAccount.gender === 'male') {
            document.querySelector('#male').checked = true;
            characterDiv.innerHTML = '<img src="images/male-magician.webp" alt="male-magician">';

        } else if (parsedAccount.gender === 'female') {
            document.querySelector('#female').checked = true;
            characterDiv.innerHTML = '<img src="images/female-magician.webp" alt="female-magician">';

        }
        if (storedAccount) {
            const userNameElements = document.querySelectorAll('.user-name');

            userNameElements.forEach(element => {
                element.textContent = parsedAccount.name || 'adventurer';
            });
        }
    }
});

/* roadmap */
document.addEventListener('DOMContentLoaded', function () {
    const roadElements = document.querySelectorAll('.selector li');

    roadElements.forEach(function (listItem) {
        const roadDiv = listItem.querySelector('.road');
        if (roadDiv) {
            const roadText = roadDiv.textContent.trim().toLowerCase().replace(/ /g, '-');
            listItem.addEventListener('click', function () {
                window.location.href = `roadmap.html?roadmap=${roadText}`;
            });
            listItem.style.cursor = 'pointer';
        }
    });
});

const javascriptRoadmap = [
    {
        title: "Introduction to JavaScript",
        points: 200,
        level: "beginner",
        description: "In a kingdom of code, awaken the power of JS. Magical syntax and first-time spells await.",
        topics: [
            { name: "What is JavaScript", completed: false },
            { name: "Environment Configuration", completed: false },
            { name: "Hello World and Console", completed: false },
            { name: "Variables and Data Types", completed: false },
            { name: "Operators", completed: false }
        ],
    },
    {
        title: "Language Fundamentals",
        points: 350,
        level: "beginner",
        description: "Master the building blocks: conditionals, loops and functions. Your control over code flow will grow!",
        topics: [
            { name: "Conditional Statements (if/else)", completed: false },
            { name: "Loops (for, while)", completed: false },
            { name: "Functions: Declaration and Invocation", completed: false },
            { name: "Variable Scope (Scope)", completed: false },
            { name: "Arrays", completed: false },
            { name: "Literal Objects", completed: false }
        ],
    },
    {
        title: "JavaScript Intermediate",
        points: 450,
        level: "intermediate",
        description: "Go on an adventure with DOM, events and manipulation. The browser will respond to your will!",
        topics: [
            { name: "The Document Object Model (DOM)", completed: false },
            { name: "Selecting DOM Elements", completed: false },
            { name: "DOM Manipulation (HTML, CSS)", completed: false },
            { name: "Events (Clicks, Mouse, Keyboard)", completed: false },
            { name: "Event Handling", completed: false }
        ],
    },
    {
        title: "Modern JavaScript (ES6+)",
        points: 500,
        level: "intermediate",
        description: "Discover the new lands of ES6+: elegant syntax, promises and modules will make you more powerful.",
        topics: [
            { name: "Let and Const", completed: false },
            { name: "Arrow Functions", completed: false },
            { name: "Template Literals", completed: false },
            { name: "Destructuring", completed: false },
            { name: "Spread and Rest Operators", completed: false },
            { name: "Promises and Async/Await", completed: false },
            { name: "Modules (Import/Export)", completed: false },
        ],
    },
    {
        title: "Frameworks and Libraries (Introduction)",
        points: 600,
        level: "advanced",
        description: "Align yourself with powerful frameworks and libraries. React, Angular or Vue will open new horizons for you.",
        topics: [
            { name: "Introduction to Frameworks/Libraries", completed: false },
            { name: "React Basics (Components, Props, State)", completed: false },
            { name: "Angular Basics", completed: false },
            { name: "Vue Basics", completed: false }
        ],
    },
    {
        title: "Full-Stack Development (Basic)",
        points: 700,
        level: "advanced",
        description: "Connect the front-end with the back-end. Node.js will allow you to create magical servers and APIs.",
        topics: [
            { name: "Introduction to Node.js", completed: false },
            { name: "NPM and Package Management", completed: false },
            { name: "Creating a Basic Server with Express", completed: false },
            { name: "Introduction to RESTful APIs", completed: false },
            { name: "Front-end / Back-end Communication", completed: false }
        ],
    }
];

const pythonRoadmap = [
    {
        title: "The Awakening of the Python Sorcerer",
        points: 150,
        level: "beginner",
        description: "Open your magic book! Discover the secret language of Python and its first enchantments.",
        topics: [
            { name: "What is Python Magic?", completed: false },
            { name: "Installing your Magic Cauldron", completed: false },
            { name: "Hello, Magic World!", completed: false },
            { name: "Secret Names and Potion Types", completed: false },
            { name: "Symbols of Power (Operators)", completed: false },
        ],
    },
    {
        title: "Controlling the Elements",
        points: 250,
        level: "beginner",
        description: "Learn to command the wind and fire with the magic words of Python.",
        topics: [
            { name: "If this happens... (If/else Conditionals)", completed: false },
            { name: "Repeating the Enchantment (For and While Loops)", completed: false },
            { name: "Creating your Own Spells (Functions)", completed: false },
            { name: "Where to Keep your Treasures (Variables and Scope)", completed: false },
            { name: "Bags of Magic Objects (Lists)", completed: false },
        ],
    },
    {
        title: "Summoning Complex Creatures",
        points: 350,
        level: "intermediate",
        description: "Bring fantastic beings to life with the magic of objects and organize your grimoire.",
        topics: [
            { name: "Creating Magic Objects (Classes)", completed: false },
            { name: "The Properties of your Creatures (Attributes)", completed: false },
            { name: "What your Creatures Can Do (Methods)", completed: false },
            { name: "Keeping Magic Pairs (Dictionaries)", completed: false },
            { name: "Sets of Unique Elements (Sets)", completed: false },
        ],
    },
    {
        title: "Unleashing Power with Modules",
        points: 450,
        level: "intermediate",
        description: "Discover ancient scrolls (modules) that grant you powerful spells already created.",
        topics: [
            { name: "Opening Scrolls (Importing Modules)", completed: false },
            { name: "Using Existing Spells (Module Functions)", completed: false },
            { name: "Exploring the Magic Library of Python", completed: false },
            { name: "Creating your Own Scrolls (Creating Modules)", completed: false },
        ],
    },
    {
        title: "Connecting Realms (Interaction)",
        points: 550,
        level: "advanced",
        description: "Speak with other worlds and secret files using the magic of Python.",
        topics: [
            { name: "Reading and Writing on Rolls (Files)", completed: false },
            { name: "Asking the Oracle for Information (User Input)", completed: false },
            { name: "Showing Magic Messages (Formatted Output)", completed: false },
            { name: "Finding Errors and Fixing Them (Exception Handling)", completed: false },
        ],
    },
    {
        title: "Advanced Alchemy (Applications)",
        points: 650,
        level: "advanced",
        description: "Become a great alchemist! Use Python to create magic tools and solve challenges.",
        topics: [
            { name: "Automating Magic Tasks", completed: false },
            { name: "Introduction to Creating Simple Games", completed: false },
            { name: "Exploring the World of Magic Data", completed: false },
            { name: "Your Own Magic Project!", completed: false },
        ],
    },
];

const bugHunterRoadmap = [
    {
        title: "The Apprentice of Magic Bug Catching",
        points: 100,
        level: "beginner",
        description: "Become an apprentice! Discover what those mischievous bugs are in our spells.",
        topics: [
            { name: "What are Magic Bugs (Bugs)?", completed: false },
            { name: "Where Bugs Hide (Common Types)", completed: false },
            { name: "Your First Detection Lenses (Simple Tools)", completed: false },
            { name: "Following the Clues (Error Messages)", completed: false },
        ],
    },
    {
        title: "The Error-Detecting Sorcerer",
        points: 150,
        level: "beginner",
        description: "Use your spells to find and point out errors like a true sorcerer!",
        topics: [
            { name: "The Testing Spell (Basic Testing)", completed: false },
            { name: "Looking for Suspicious Steps (Error Reproduction)", completed: false },
            { name: "Magic Isolation (Reducing the Problem)", completed: false },
            { name: "Talking to the Code (Understanding the Spell)", completed: false },
        ],
    },
    {
        title: "The Master of the Magic Magnifying Glass",
        points: 200,
        level: "intermediate",
        description: "With your magic magnifying glass, examine every corner in search of the most elusive bugs!",
        topics: [
            { name: "Detailed Code Inspection", completed: false },
            { name: "Testing Different Magic Paths (Test Cases)", completed: false },
            { name: "Finding the Edges of the Magic World (Boundary Cases)", completed: false },
            { name: "Working in Hunter Teams", completed: false },
        ],
    },
    {
        title: "The Legendary Bug Hunter",
        points: 250,
        level: "advanced",
        description: "Become a legend by catching the most difficult bugs and protecting the magic!",
        topics: [
            { name: "Hunting Hidden Bugs (Advanced Common Errors)", completed: false },
            { name: "Writing Clear Magic Reports", completed: false },
            { name: "Suggesting Magic Solutions", completed: false },
            { name: "Preventing the Appearance of Bugs (Good Practices)", completed: false },
        ],
    },
    {
        title: "The Guardian of Pure Magic",
        points: 300,
        level: "advanced",
        description: "As a guardian, ensure that magic always works smoothly for everyone!",
        topics: [
            { name: "Automating Bug Hunting (Automatic Tools)", completed: false },
            { name: "Learning from Past Bugs (Error Analysis)", completed: false },
            { name: "Sharing your Magic Knowledge", completed: false },
            { name: "The Importance of Bug-Free Magic", completed: false },
        ],
    },
];

const webDevRoadmap = [
    {
        title: "The Portal to the Magic Web (HTML)",
        points: 200,
        level: "beginner",
        description: "Create the portal to your worlds! With HTML, build the walls and doors of your magic web.",
        topics: [
            { name: "What is the Secret Language HTML?", completed: false },
            { name: "Creating your First Scroll (.html)", completed: false },
            { name: "The Magic Bricks (Tags and Elements)", completed: false },
            { name: "Writing your Stories (Text and Formatting)", completed: false },
            { name: "Showing Enchanted Images (Images)", completed: false },
            { name: "Connecting Worlds (Links)", completed: false },
        ],
    },
    {
        title: "Giving Color and Style to Magic (CSS)",
        points: 250,
        level: "beginner",
        description: "Paint your portals with vibrant colors and give them an amazing appearance with CSS!",
        topics: [
            { name: "The CSS Style Wand", completed: false },
            { name: "Choosing your Elements (Selectors)", completed: false },
            { name: "Changing Magic Colors and Backgrounds", completed: false },
            { name: "Shaping your Elements (Size and Borders)", completed: false },
            { name: "Arranging your Elements (Basic Layout)", completed: false },
            { name: "Using Fonts with Power (Google Fonts)", completed: false },
        ],
    },
    {
        title: "Making Magic Interactive (Basic JavaScript)",
        points: 300,
        level: "intermediate",
        description: "Make your worlds react to your visitors with JavaScript spells!",
        topics: [
            { name: "Introduction to JavaScript Sorcery", completed: false },
            { name: "Giving Names to your Magic Objects (Variables)", completed: false },
            { name: "Performing Actions (Functions)", completed: false },
            { name: "Making Magic Decisions (Conditionals)", completed: false },
            { name: "Repeating Spells (Loops)", completed: false },
            { name: "Talking to the Portal (Basic DOM)", completed: false },
        ],
    },
    {
        title: "Animating the Worlds (Advanced CSS and Transitions)",
        points: 350,
        level: "intermediate",
        description: "Bring your creations to life with smooth movements and magic transformations of CSS!",
        topics: [
            { name: "Magic Transitions", completed: false },
            { name: "Bewitching Animations (Keyframes)", completed: false },
            { name: "Making Portals Flexible (Flexbox)", completed: false },
            { name: "Organizing in Magic Grids (CSS Grid)", completed: false },
            { name: "Adapting to Different Screens (Basic Responsive Design)", completed: false },
        ],
    },
    {
        title: "Spells that Listen and Respond (Intermediate JavaScript)",
        points: 400,
        level: "advanced",
        description: "Create more complex interactions and amaze your visitors!",
        topics: [
            { name: "Listening to Magic Clicks (Events)", completed: false },
            { name: "Changing Content Magically (DOM Manipulation)", completed: false },
            { name: "Remembering Things (Local Storage)", completed: false },
            { name: "Asking Other Worlds for Help (Basic APIs)", completed: false },
            { name: "Making Magic Wait (Promises)", completed: false },
        ],
    },
    {
        title: "Building Complex Realms (Frameworks/Libraries - Introduction)",
        points: 450,
        level: "advanced",
        description: "Learn to use powerful tools to build even larger and more magical web realms!",
        topics: [
            { name: "Knowing the Powerful Tools (Frameworks and Libraries)", completed: false },
            { name: "The Power of React (First Steps)", completed: false },
            // Or you can mention another library/framework like Vue or Angular (basic concepts)
            { name: "Organizing your Magic with Components", completed: false },
            { name: "Sharing Power Between Components", completed: false },
        ],
    },
];

const aiForKidsRoadmap = [
    {
      title: "The Awakening of the Magic Mind",
      points: 100,
      level: "beginner",
      description: "Awaken the magic in machines! Learn how to give them a little bit of intelligence.",
      topics: [
        { name: "What is an Artificial Magic Mind?", completed: false },
        { name: "Thinking like a Machine (Simple Steps)", completed: false },
        { name: "Giving Clear Orders (Simple Algorithms)", completed: false },
        { name: "Recognizing Magic Patterns", completed: false },
      ],
    },
    {
      title: "Learning from Wise Elves (Supervised Learning)",
      points: 150,
      level: "beginner",
      description: "Teach your machine by showing it many examples, just like wise elves do!",
      topics: [
        { name: "Showing Examples (Data for Training)", completed: false },
        { name: "Labeling the Magic Examples", completed: false },
        { name: "The Machine Learns to Sort (Classification)", completed: false },
        { name: "Predicting the Magic Future (Simple Regression)", completed: false },
      ],
    },
    {
      title: "Exploring Dungeons on Their Own (Unsupervised Learning)",
      points: 200,
      level: "intermediate",
      description: "Let your machine discover secrets and groups on its own in the dungeons!",
      topics: [
        { name: "Finding Hidden Groups (Clustering)", completed: false },
        { name: "Reducing Complex Magic (Dimensionality Reduction)", completed: false },
        { name: "Looking for Strange Things (Anomaly Detection)", completed: false },
      ],
    },
    {
      title: "Learning with Rewards and Punishments (Reinforcement Learning)",
      points: 250,
      level: "intermediate",
      description: "Give it rewards when it does the right thing, and it will learn to be the best!",
      topics: [
        { name: "Giving Magic Rewards", completed: false },
        { name: "Avoiding Punishments", completed: false },
        { name: "Learning Step by Step (Iterations)", completed: false },
        { name: "The Magic Agent and the Environment", completed: false },
      ],
    },
    {
      title: "Building Intelligent Spells (Basic Neural Networks)",
      points: 300,
      level: "advanced",
      description: "Create networks of connected magic like the brains of fantastic creatures!",
      topics: [
        { name: "What are Magic Neurons?", completed: false },
        { name: "Connecting the Neurons (Layers)", completed: false },
        { name: "Teaching the Network (Basic Training)", completed: false },
        { name: "Recognizing Magic Images (Introduction to Vision)", completed: false },
      ],
    },
    {
      title: "The Future of Magic (AI Applications)",
      points: 350,
      level: "advanced",
      description: "Discover how the magic mind can help in the real world and what surprises await us!",
      topics: [
        { name: "Intelligent Magic Helpers", completed: false },
        { name: "Creating Magic Art with AI", completed: false },
        { name: "AI in Magic Games", completed: false },
        { name: "Thinking About the Future of AI", completed: false },
      ],
    },
  ];

document.addEventListener('DOMContentLoaded', () => {
    const roadMapContainer = document.querySelector('#roadMap');
    const urlParams = new URLSearchParams(window.location.search);
    const selectedRoadmap = urlParams.get('roadmap');
    let currentRoadmap = javascriptRoadmap;
    const roadDivs = document.querySelectorAll('.selector .road');

    if (selectedRoadmap) {

        const normalizedSelectedRoadmap = selectedRoadmap.toLowerCase().replace('-', ' ');

        roadDivs.forEach(div => {
          const classes = div.classList;

          for (const className of classes) {
            if (className.toLowerCase().replace('-', ' ') === normalizedSelectedRoadmap) {
              div.classList.add('unfold');
              break;
            }
          }
        });

        switch (selectedRoadmap.toLowerCase()) {
            case 'javascript':
            case 'javascript-fundamentals':
                currentRoadmap = javascriptRoadmap;
                break;
            case 'python':
                currentRoadmap = pythonRoadmap;
                break;
            case 'bugs-hunter':
                currentRoadmap = bugHunterRoadmap;
                break;
            case 'front-webdeveloper':
                currentRoadmap = webDevRoadmap;
                break;
            case 'ia-for-beginner':
                currentRoadmap = aiForKidsRoadmap;
                break
            default:
                console.warn(`Roadmap "${selectedRoadmap}" not found. Using default (JavaScript).`);
                break;
        }
    }

    const renderRoadmap = (roadmapData) => {
        roadMapContainer.innerHTML = '';
        roadmapData.forEach(level => {
            const pathElement = document.createElement('div');
            pathElement.classList.add('path');

            const titleElement = document.createElement('h3');
            titleElement.textContent = level.title;
            pathElement.appendChild(titleElement);

            const infoDiv = document.createElement('div');

            const pointsElement = document.createElement('p');
            pointsElement.classList.add('points');
            pointsElement.textContent = level.points;
            infoDiv.appendChild(pointsElement);

            const levelElement = document.createElement('p');
            levelElement.classList.add('level', level.level);
            levelElement.textContent = level.level;
            infoDiv.appendChild(levelElement);

            pathElement.appendChild(infoDiv);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = level.description;
            pathElement.appendChild(descriptionElement);

            const topicsList = document.createElement('ul');
            topicsList.classList.add('topic-content');

            level.topics.forEach(topic => {
                const listItem = document.createElement('li');
                listItem.textContent = topic.name;
                topicsList.appendChild(listItem);
            });

            pathElement.appendChild(topicsList);
            roadMapContainer.appendChild(pathElement);
        });
    };

    renderRoadmap(currentRoadmap);
});

/* connector */

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const pathElements = document.querySelectorAll('.path');
    const gapValue = parseFloat(getComputedStyle(gridContainer).gap);

    function createConnector(type, x, y, length) {
        const connector = document.createElement('div');
        connector.classList.add('connector', `connector-${type}`);
        connector.style.left = `${x}px`;
        connector.style.top = `${y}px`;
        if (type === 'horizontal') {
            connector.style.width = `${length}px`;
        } else {
            connector.style.height = `${length}px`;
        }
        gridContainer.appendChild(connector);
    }

    if (pathElements.length > 1) {
        for (let i = 0; i < pathElements.length; i++) {
            const currentPathRect = pathElements[i].getBoundingClientRect();

            if (i % getComputedStyle(gridContainer).gridTemplateColumns.split(' ').length < getComputedStyle(gridContainer).gridTemplateColumns.split(' ').length - 1) {
                const nextPath = pathElements[i + 1];
                if (nextPath) {
                    const nextPathRect = nextPath.getBoundingClientRect();
                    const startX = currentPathRect.right;
                    const startY = currentPathRect.top + currentPathRect.height / 2;
                    const endX = nextPathRect.left;
                    const length = endX - startX;
                    createConnector('horizontal', startX + window.scrollX, startY + window.scrollY, length);
                }
            }

            const numColumns = getComputedStyle(gridContainer).gridTemplateColumns.split(' ').length;
            if (i < pathElements.length - numColumns) {
                const belowPath = pathElements[i + numColumns];
                if (belowPath) {
                    const belowPathRect = belowPath.getBoundingClientRect();
                    const startX = currentPathRect.left + currentPathRect.width / 2;
                    const startY = currentPathRect.bottom;
                    const endY = belowPathRect.top;
                    const length = endY - startY;
                    createConnector('vertical', startX + window.scrollX, startY + window.scrollY, length);
                }
            }
        }
    }
});
