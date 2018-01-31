/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
var verwijderKnop = document.querySelector("#savebuttonverwijder");
var eersteKaartje = document.querySelector("#kaartje1");
verwijderKnop.addEventListener("click", verwijderFunctie);

function verwijderFunctie() {
    console.log("het werkt hoor");
    if (confirm("Weet je zeker dat dit verhaal wilt verwijderen van je lijst met opgeslagen verhalen?")) {
        eersteKaartje.classList.toggle("kaartje1verwijderd");
        console.log("Kaartje 1 is verwijderd.");
    }
    else {}
}
