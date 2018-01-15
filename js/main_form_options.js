var optionsButton = document.getElementById('more_options_expand');
var moreOptions = document.getElementById('options');

function changeClass() {
    var currentClass = moreOptions.className;
    if (currentClass == "main_form_hide") {
        moreOptions.className = "main_form_show";
        console.log('toon opties geactiveerd');
    }
    else if (currentClass == "main_form_show") {
        moreOptions.className = "main_form_hide";
    }
}
optionsButton.addEventListener("click", changeClass);
