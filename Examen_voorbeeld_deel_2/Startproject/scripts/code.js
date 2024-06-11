let naamSpeler = "";
const woorden = ["woord", "spell", "huis", "fiets", "stoel"];
let teRadenWoord = "";
let pogingen = 0;
let highscores = [];
const setup = () => {
    inputContainer = document.getElementById("input-container");
    input = document.getElementById("gok");
    goButton = document.getElementById("go");
    nieuwSpelButton = document.getElementById("nieuw");
    helpText = document.querySelector(".help");
    gokkenDiv = document.getElementById("gokken");
    highscoresList = document.querySelector("#highscores ol");

    const startNieuwSpel = () => {
        vraagNaam();
        pogingen = 0;
        input.value = "";
        input.disabled = false;
        helpText.classList.add("hidden");

        gokkenDiv.innerHTML = "";

        teRadenWoord = woorden[Math.floor(Math.random() * woorden.length)];

        nieuwSpelButton.hidden = false;
    }

    const vraagNaam = () => {
        const naam = prompt("Voer je naam in:");
        if (naam) {
            naamSpeler = naam;
            input.disabled = false;
            nieuwSpelButton.hidden = true;
            nieuwSpelButton.style.display = "none";
        } else {
            nieuwSpelButton.disabled = false;
        }
    }

    const verwerkGok = () => {
        const gok = input.value.toLowerCase();

        if (gok.length !== 5) {
            helpText.innerText = "Het woord moet precies 5 letters bevatten.";
            helpText.classList.remove("hidden");
            return;
        }

        pogingen++;

        const resultDiv = document.createElement("div");
        resultDiv.classList.add("resultaat");

        for (let i = 0; i < gok.length; i++) {
            const letter = gok[i];
            const indexInWoord = teRadenWoord.indexOf(letter);

            if (indexInWoord === -1) {
                resultDiv.innerHTML += `<div class="fout">${letter}</div>`;
            } else if (indexInWoord === i) {
                resultDiv.innerHTML += `<div class="juist">${letter}</div>`;
            } else {
                resultDiv.innerHTML += `<div class="bevat">${letter}</div>`;
            }
        }

        gokkenDiv.appendChild(resultDiv);

        if (gok === teRadenWoord) {
            input.disabled = true;
            helpText.innerText = `Gefeliciteerd! Je hebt het woord geraden in ${pogingen} pogingen.`;
            helpText.classList.remove("hidden");

            highscores.push({
                naam: naamSpeler,
                woord: teRadenWoord,
                pogingen: pogingen
            });

            highscores.sort((a, b) => a.pogingen - b.pogingen);
            updateHighscores();

            nieuwSpelButton.hidden = true;
            nieuwSpelButton.style.display = "block";
        }
    }

    const updateHighscores = () => {
        highscoresList.innerHTML = "";

        highscores.forEach(score => {
            const listItem = document.createElement("li");
            listItem.textContent = `${score.naam}: ${score.woord} - ${score.pogingen} pogingen`;
            highscoresList.appendChild(listItem);
        });
    }
    goButton.addEventListener("click", verwerkGok);
    nieuwSpelButton.addEventListener("click", startNieuwSpel);
}

window.addEventListener("load", setup);