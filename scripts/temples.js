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