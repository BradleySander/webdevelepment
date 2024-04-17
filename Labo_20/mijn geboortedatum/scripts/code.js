const setup = () => {
    const geboortedatum = new Date(2001,8,7);

    const huidigeDatum = new Date();

    const verschilInTijd = huidigeDatum.getTime() - geboortedatum.getTime();

    const verschilInDagen = Math.floor(verschilInTijd / (1000 * 3600 * 24));

    const outputElement = document.getElementById("output");

    outputElement.textContent = "Ik ben all : " + verschilInDagen + " dagen op de wereld. of ik ben: " + Math.floor(verschilInDagen/365) + " jaar."

    console.log("Ik ben all : " + verschilInDagen + " dagen op de wereld. of ik ben: " + Math.floor(verschilInDagen/365) + " jaar.");
}
window.addEventListener("load", setup);

//ik ben gebooren op 07/09/2001 dus ik ben: