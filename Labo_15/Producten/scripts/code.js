const setup = () => {
    // Voeg een event listener toe aan de knop om herberekeningen uit te voeren
    let berekenKnop = document.getElementById('berekenKnop');
    berekenKnop.addEventListener('click', herbereken);
}

function herbereken() {
    let aantalInputs = document.getElementsByClassName('aantal');
    let subtotaalCellen = document.getElementsByClassName('subtotaal');
    let prijsCellen = document.getElementsByClassName('prijs');
    let btwCellen = document.getElementsByClassName('btw');
    let subtotaalAll = 0; // Initialiseer subtotaalAll

    for (let i = 0; i < aantalInputs.length; i++) {
        let aantal = parseInt(aantalInputs[i].value);
        let prijs = parseFloat(prijsCellen[i].textContent);
        let btwPercentage = parseFloat(btwCellen[i].textContent) / 100;

        let subtotaal = aantal * prijs;
        let btwBedrag = subtotaal * btwPercentage;
        subtotaal += btwBedrag;

        subtotaalCellen[i].textContent = subtotaal.toFixed(2) + ' Eur';

        subtotaalAll += subtotaal; // Update subtotaalAll met huidige subtotaal
    }

    // Update subtotaalAll in de DOM
    let subtotaalAllElement = document.getElementsByClassName('subtotaalAll')[0];
    subtotaalAllElement.textContent = subtotaalAll.toFixed(2) + ' Eur';
}

window.addEventListener("load", setup);
