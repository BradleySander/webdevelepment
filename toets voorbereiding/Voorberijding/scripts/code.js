const setup = () => {
    let yes = true;

    const yesNo = () =>{
        if (yes){
            yes = false;
        } else {
            yes = true;
        }
        console.log(`this should change on press => ${yes}`);
    }
    const displayText = () => {
        const textInput = document.getElementById('text').value;
        const ptest = document.getElementById('ptest');
        ptest.innerHTML += "<p>Dit is een tekst</p>";
        console.log(textInput);
    };
    document.getElementById('btn').addEventListener("click", yesNo);
    document.getElementById('toonInConsole').addEventListener("click", displayText);
}
window.addEventListener("load", setup);