const setup = () => {

    const maakMetSpaties = (inputText) => {
        let result = "";

        for (let i = 0; i < inputText.length; i++) {
            result += inputText[i];

            // Check if the current character is not the last character in the inputText
            if (i < inputText.length - 1) {
                result += ' ';
            }
        }

        return result;
    };
    //test functie
    const userInput = "Dit is een tekst.";
    const spacedResult = maakMetSpaties(userInput);

    console.log(spacedResult);

    const displayTextWithSpaces = () => {
        const inputText = document.getElementById('textInput').value;

        const spacedText = maakMetSpaties(inputText);

        console.log(spacedText);
    };

    document.getElementById('submitBtn').addEventListener('click', displayTextWithSpaces);
};

window.addEventListener("load", setup);

