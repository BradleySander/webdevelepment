const setup = () => {
    let btnChange=document.getElementById("btnChange");

    btnChange.addEventListener("click", Change);
}
const Change = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}


window.addEventListener("load", setup);