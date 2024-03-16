const setup = () => {
    let i = 0;
    let gemeente;
    let gemeenten = [];
    let gemeentenSelect = document.getElementById("gemeenten");

    while (gemeente !== null) {
        gemeente = window.prompt("Gemeenten", "Roeselare");
        if (gemeente != null){
            gemeenten.push(gemeente);
        }
    }
    gemeenten.sort();
    while (i < gemeenten.length){
        gemeentenSelect.innerHTML += `<option value="${gemeenten[i]}">${gemeenten[i]}</option>`;
        i++;
    }

    console.log(gemeentenSelect);
};

window.addEventListener("load", setup);
