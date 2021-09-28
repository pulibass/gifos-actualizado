const menu = document.getElementsByClassName("menu")[0];
const hamburguesa = document.getElementsByClassName("button-menu-burger")[0];
const menuHamburguesa = document.getElementById("hamburguesa");

let abierto = false;

const toggleMenu = () => {
    menu.classList.toggle("is-active");
    menu.style.transition = "transform 0.5s ease-in-out";
}

hamburguesa.addEventListener("click", function () {
    toggleMenu();
    if (document.querySelector(".menu.is-active")) {
        abierto = true;

    } else {
        abierto = false;
    }
})



/* window.addEventListener("click", function (e) {
    this.console.log(e.target)
    if (abierto) {
        if (e.target !== menuHamburguesa) {
            toggleMenu();
            abierto = false;
        }
    }

}) */

window.addEventListener("resize", function () {
    if (screen.width > 800) {
        if (abierto) {
            toggleMenu();
            menu.style.transition = "none";
            abierto = false;
        }
    }
})

let imgBurger = "menu-hamburguesa";

function changeImage() {
    var imagen = document.getElementById("hamburguesa");
    if (imgBurger == "menu-hamburguesa") {
        imagen.src = "./svg/modo normal/close.svg"

        imgBurger = "menu-close";
    } else {
        imagen.src = "./svg/modo normal/burger.svg";

        imgBurger = "menu-hamburguesa";
    }
}


const verMas = document.getElementById('ver-mas');
const darkMode = document.getElementById('modo-nocturno');
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (verMas.className.includes('dark')) {
        verMas.src = "./svg/modo normal/CTA-ver-mas-modo-noc.svg";

    } else {
        verMas.src = "./svg/modo normal/CTA-ver-mas.svg";

    }

    console.log(verMas)

    /*  darkMode.classList.toggle('active'); */

})

const dayMode = document.getElementById('modo-diurno');
dayMode.addEventListener('click', () => {
    document.body.classList.remove('dark');
   /*  if (verMas == dayMode) {
        verMas.src = "./svg/modo normal/CTA-ver-mas.svg";

    } */

  
})



