/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
var downloadKnop = document.querySelector("#download");
downloadKnop.addEventListener("click", downloadfunctie);

function downloadfunctie() {
    downloadKnop.classList.toggle("download_checked");
    if (downloadKnop.innerHTML = "Download") {
        console.log("gedownload tekst")
        downloadKnop.innerHTML = "Downloaden...";
        setTimeout(function () {
            downloadKnop.innerHTML = "Gedownload";
        }, 4000);
    }
    else {
        console.log("download tekst")
        downloadKnop.innerHTML = "Download";
    }
}
