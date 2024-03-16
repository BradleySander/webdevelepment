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
        const order = `bestelling bestaat uit ${result['order'] || 'geen'}`;

        console.log(isSmoker);
        console.log(language);
        console.log(neighbor);
        console.log(order);

        console.log(result['smoker'] ? "is well been roker" : "is geen roker");
    }

    document.getElementById("showResultButton").addEventListener("click", showResult);
}

window.addEventListener("load", setup);
