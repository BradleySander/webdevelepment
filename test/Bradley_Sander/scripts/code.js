const setup = () => {
    const image = document.getElementById('kip');
    const letterElement = document.getElementById('letter');
    const letter = letterElement.value;
    const imageValue = image.value;
    const div = document.getElementById('img');
    let text = "Hierboven, een kip " + imageValue;

    const toonFotoEnText = () =>{

        if (imageValue === "Met een ei") {
            div.style.backgroundImage = "../without-egg.png";
        } else {
            div.style.backgroundImage = "../with-egg.png";
        }
        let amountOfTimes = 0;
        for (let i = 0 ; i < text.length; i++){
            if (text[i] === letter.value){
                amountOfTimes++;
            }
        }
        let textMetLetter = "Letter " + letter + " komt " + amountOfTimes + " keer voor in de bovenstaande zin"
        div.innerHTML = text + textMetLetter;
    }
    image.addEventListener("change", toonFotoEnText);
}
window.addEventListener("load", setup);