const setup = () => {
    const findTrigrams = (word) => {
        for (let i = 0; i < word.length - 2; i++) {
            console.log(word.substring(i, i + 3));
        }
    }
    const word = "onoorbaar";
    const test = "BradleySander";
    findTrigrams(word);
    console.log("=================================================================================================");
    findTrigrams(test);
}
window.addEventListener("load", setup);