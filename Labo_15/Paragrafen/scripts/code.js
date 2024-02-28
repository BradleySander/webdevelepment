const setup = () => {

}
window.addEventListener("load", setup);
document.addEventListener('DOMContentLoaded', function () {
    var belangrijkElementen = document.querySelectorAll('.belangrijk');

    for (var i = 0; i < belangrijkElementen.length; i++) {
        belangrijkElementen[i].classList.add('opvallend');
    }
});