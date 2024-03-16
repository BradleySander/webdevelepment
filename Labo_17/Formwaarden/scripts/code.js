const setup = () => {
    function showResult() {
        const formData = new FormData(document.getElementById("myForm"));
        const result = {};

        for (let [key, value] of formData) {
            result[key] = result[key] ? result[key] + ', ' + value : value;
        }

        const isSmoker = result['smoker'] ? 'is roker' : 'is geen roker';
        const language = `moedertaal is ${result['language']}`;
        const neighbor = `favoriete buurland is ${result['neighbor']}`;
        const order = `bestelling bestaat uit ${result['order'] ? result['order'] : 'geen'}`;

        console.log(isSmoker);
        console.log(language);
        console.log(neighbor);
        console.log(order);
    }

    document.getElementById("showResultButton").addEventListener("click", () => {
        const languageRadioButtons = document.getElementsByName("language");
        let languageSelected = false;
        for (const radioButton of languageRadioButtons) {
            if (radioButton.checked) {
                languageSelected = true;
                break;
            }
        }

        const orderSelect = document.getElementById("order");
        const orderSelected = orderSelect.selectedOptions.length > 0;

        if (languageSelected && orderSelected) {
            showResult();
        } else {
            alert("Selecteer ten minste één moedertaal en één bestelling.");
        }
    });
}

window.addEventListener("load", setup);
