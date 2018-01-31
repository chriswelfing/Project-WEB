/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
var optionsButton = document.querySelector("#more_options_expand");
var moreOptions = document.querySelector("#options");
optionsButton.addEventListener("click", toggleoptions);

function toggleoptions() {
    moreOptions.classList.toggle("main_form_show");
}
