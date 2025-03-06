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