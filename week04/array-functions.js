let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

function filterByLetter(arr, query) {
    return arr.filter((items) => items.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterByLetter(names, "B"));

const namesLength = names.map(printLength);

function printLength(element) {
    return element.length;
}

const averageLength = getAverageLength(names);

console.log(namesLength);

function getAverageLength(arr) {
    let totalLength = arr.reduce((prev, next) => prev + next.length, 0);
    return totalLength / arr.length;

}

console.log(averageLength);