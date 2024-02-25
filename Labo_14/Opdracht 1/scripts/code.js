const setup = () => {
}

// window.alert
window.alert("Dit is een alert-popup");

// window.confirm
const resultConfirm = window.confirm("Druk op OK of Cancel");
console.log("Return waarde van confirm: " + resultConfirm);

// window.prompt
const resultPrompt = window.prompt("Voer iets in", "Standaardwaarde");
console.log("Return waarde van prompt: " + resultPrompt);

window.addEventListener("load", setup);