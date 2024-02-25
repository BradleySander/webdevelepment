const setup = () => {
}

const familieleden = ["Dark Souls 1", "Dark Souls 2", "BloodBorne", "Dark Souls 3", "Elden Ring"];

console.log("Aantal elementen in de array: " + familieleden.length);

console.log("Eerste element: " + familieleden[0]);
console.log("Derde element: " + familieleden[2]);
console.log("Vijfde element: " + familieleden[4]);

function VoegNaamToe() {
    let extraNaam = prompt("Voer een extra naam in:");
    familieleden.push(extraNaam);
}

VoegNaamToe();

console.log("Array na het toevoegen van een extra naam: " + familieleden);

let arrayAlsString = familieleden.join('/ ');
console.log("Array als string: " + arrayAlsString);

window.addEventListener("load", setup);