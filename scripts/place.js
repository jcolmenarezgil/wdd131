// get the id selectors
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// use the date object
const today = new Date();

// innerHTML the actual year
year.innerHTML = today.getFullYear();

// get last modified
let getLastModified = new Date(document.lastModified);

// innerHTML the lastmodified from document
lastModified.innerHTML = `Last Modified: ${getLastModified}`;

// get windChill selector
const windChill = document.querySelector('#calculateWindChill');

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        const _windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
        return _windChill.toFixed(2) + " &deg;C";
    } else {
        return "N/A";
    }
}

const temp = 10 //degrees Celsius
const wind = 5 //km/h

let result = calculateWindChill(temp, wind);
windChill.innerHTML = result;