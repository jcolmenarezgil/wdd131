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

/* roadmap */

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
]

document.addEventListener('DOMContentLoaded', () => {
    const roadMapContainer = document.querySelector('#roadMap');

    javascriptRoadmap.forEach(level => {
        const pathElement = document.createElement('div');
        pathElement.classList.add('path');

        const titleElement = document.createElement('h3');
        titleElement.textContent = level.title;
        pathElement.appendChild(titleElement);

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
    })
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
