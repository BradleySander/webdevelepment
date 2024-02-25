const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

function kopieer() {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML=tekst;
}

window.addEventListener("load", setup);