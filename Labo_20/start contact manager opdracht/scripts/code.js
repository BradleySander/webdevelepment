let personen = [];

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", toonGeselecteerdePersoon);
};

const bewerkNieuwePersoon = () => {
    clearForm();
};
const bewaarBewerktePersoon = () => {

    valideer();
    if (document.getElementsByClassName("invalid").length <= 0){

        const voornaam = document.getElementById("txtVoornaam").value.trim();
        const familienaam = document.getElementById("txtFamilienaam").value.trim();
        const geboorteDatum = document.getElementById("txtGeboorteDatum").value.trim();
        const email = document.getElementById("txtEmail").value.trim();
        const aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();

        const persoon = {
            voornaam: voornaam,
            familienaam: familienaam,
            geboorteDatum: geboorteDatum,
            email: email,
            aantalKinderen: aantalKinderen
        };

        const selectedIndex = document.getElementById("lstPersonen").selectedIndex;

        if (selectedIndex === -1) {
            personen.push(persoon);
        } else {
            personen[selectedIndex] = persoon;
        }

        vernieuwLijst();

    }
}


const toonGeselecteerdePersoon = () => {
    const selectedIndex = document.getElementById("lstPersonen").selectedIndex;
    if (selectedIndex !== -1) {
        const persoon = personen[selectedIndex];
        document.getElementById("txtVoornaam").value = persoon.voornaam;
        document.getElementById("txtFamilienaam").value = persoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    }
};

const vernieuwLijst = () => {
    const selectElement = document.getElementById("lstPersonen");
    selectElement.innerHTML = "";
    personen.forEach((persoon, index) => {
        const option = document.createElement("option");
        option.text = persoon.voornaam + " " + persoon.familienaam;
        option.value = index;
        selectElement.add(option);
    });
};

const clearForm = () => {
    document.getElementById("persoonForm").reset();
};

window.addEventListener("load", setup);