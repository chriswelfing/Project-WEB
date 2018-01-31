/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
console.log("micro-interacties.js is succesvol gekoppeld.");
var likeKnop = document.querySelector("#likebutton");
var likeCounter = document.querySelector("#likecounter")
    , count = 23;
likeKnop.addEventListener("click", likefunctie);

function likefunctie() {
    likeKnop.classList.toggle("verhaal_card-like_checked");
    count += 1;
    likeCounter.innerHTML = count;
}
// Hieronder: De microinteractie die er voor zorgt dat de save button checked wordt wanneer er op wordt geklikt. Ook komt er een "1"-badge bij het save-icon in de main header.
var saveKnop = document.querySelector("#savebutton");
var saveIconHeader = document.querySelector(".header_icons_right_img-2");
saveKnop.addEventListener("click", savefunctie);

function savefunctie() {
    saveKnop.classList.toggle("verhaal_card-save_checked");
    saveIconHeader.classList.toggle("header_icons_right_img-2_save1");
}
