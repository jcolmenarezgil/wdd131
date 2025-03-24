// loops.js
myInfo = {
    name: "Brother C",
    photo: "../images/jose-david-colmenarez-gil-profile-picture.webp",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shirmp", "Baked Potato"],
    hobbies: ["Reading", "Developing", "Traveling"],
    placesLived: [
        {
            place: "Redburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Redburg, ID",
            length: "5 years",
        },
    ],
};

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
function createFavoriteList(myInfo) {

    const ul = document.getElementById("favorite-foods");

    for (let i = 0; i < myInfo.favoriteFoods.length; i++) {

        const li = document.createElement("li");
        li.textContent = myInfo.favoriteFoods[i];

        ul.appendChild(li)

    }
}

function mapCreateFavoriteList(myInfo) {
    const ul = document.getElementById("favorite-foods");

    const listItems = myInfo.favoriteFoods.map(food => {
        const li = document.createElement("li")
        li.textContent = food;
        return li;
    });
    // agregar todos los <li> al <ul>
    listItems.forEach(li => ul.appendChild(li));
}

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
/* mapCreateFavoriteList(myInfo); */

const foodElement = document.querySelector('#favorite-foods');
const placesElement = document.querySelector('#places-lived');

// Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

// Create a function that will take a place string and return that string embedded in some html. 
// The place is a bit more complex. We have the location and the length. 
// You can use the following for the template: <dt>${place.place}</dt><dd>${place.length}</dd>)
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

//Create a function that will take a list, and a callback function to produce an HTML template.
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

//Call the function above once for the placesLived list and again for the favoriteFoods list.
//Set the innerHTML of the appropriate HTML element to the results of the function call.
foodElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
);

placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);

const DAYS = 6;
const LIMIT = 30;

let studentReport = [11, 42, 33, 64, 29, 37, 44]

// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// while loop

let i = 0;

while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// forEach Loop

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
})

// for... in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

const n = 6; // number of days forward
// get output location on document to append within list
const output = document.getElementsByTagName("ul");
// Intl.DateTimeFormat Options
const options = { weekday: 'long' }; // vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is ${todaystring}. `;

// next n days
for (let i = 1; i <= n; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    item = document.createElement("li"); // list item
    item.textContent = nextdaystring;
    output[0].appendChild(item);
}
