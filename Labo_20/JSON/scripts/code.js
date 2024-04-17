const student = {
    voornaam : "Bradley",
    familienaam : "Sander",
    leeftijd: 22,
    geboortedatum: new Date(2001, 8, 7),
    adres : {
        straat : "Kerkstraat 13",
        postcode : "8500",
        gemeente : "Kortrijk"
    },
    isIngeschreven : true,
    namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
    aantalAutos : 1
};
const setup = () => {
    const outputElement = document.getElementById("output");

    const jsonString = JSON.stringify(student);
    console.log(jsonString);
    outputElement.innerHTML += '<br>' + jsonString;

    const parsedObject = JSON.parse(jsonString);

    console.log(parsedObject.name);
};

window.addEventListener("load", setup);
