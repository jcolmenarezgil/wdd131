menubutton = document.querySelector("#Menu");
nav = document.querySelector('nav');

menubutton.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (menubutton.innerHTML === "menu") {
        menubutton.innerHTML = "X";
    } else {
        menubutton.innerHTML = "menu";
    }
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Caracas Venezuela",
        location: "Distrito Capital, Venezuela",
        dedicated: "2000, August, 20",
        area: 15332,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 26",
        area: 53500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
    },
    {
        templeName: "Guayaquil Ecuador",
        location: "Guayaquil, Ecuador",
        dedicated: "1999, August, 2",
        area: 45000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1871, January, 31",
        area: 143969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    },
    {
        templeName: "Tallahassee Florida",
        location: "Tallahassee, Florida, United States",
        dedicated: "2024, December, 8",
        area: 29255,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tallahassee-florida-temple/tallahassee-florida-temple-54655-main.jpg"
    }

];

createTempleCard(temples);

const disableFilter = document.querySelector("#Home");
const filterOld = document.querySelector("#Old");
const filterNew = document.querySelector("#New");
const filterLarge = document.querySelector("#Large");
const filterSmall = document.querySelector("#Small");

disableFilter.addEventListener("click", () => {
    createTempleCard(temples);
});

filterOld.addEventListener("click", () => {
    createTempleCard(filterOldArr);
});

const filterOldArr = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0].trim(), 10);
    return year < 1900;
});

filterNew.addEventListener("click", () => {
    createTempleCard(filterNewArr);
});

const filterNewArr = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0].trim(), 10);
    return year > 2000;
});

filterLarge.addEventListener("click", () => {
    createTempleCard(filterLargeArr);
})

const filterLargeArr = temples.filter((temple) => {
    return temple.area > 90000;
});

filterSmall.addEventListener("click", () => {
    createTempleCard(filterSmallArr);
});

const filterSmallArr = temples.filter((temple) => {
    return temple.area < 10000;
})

function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    })
}