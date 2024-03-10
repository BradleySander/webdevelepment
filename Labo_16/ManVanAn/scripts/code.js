const setup = () => {
    const text = "De man van An geeft geen hand aan ambetante verwanten";

    let occurrencesIndexOf = 0;
    let index = text.indexOf("an");

    while (index !== -1) {
        occurrencesIndexOf++;
        index = text.indexOf("an", index + 2);
    }

    console.log("Occurrences (indexOf):", occurrencesIndexOf);

    let occurrencesLastIndexOf = 0;
    let lastIndex = text.lastIndexOf("an");

    while (lastIndex !== -1) {
        occurrencesLastIndexOf++;
        lastIndex = text.lastIndexOf("an", lastIndex - 2);
    }

    console.log("Occurrences (lastIndexOf):", occurrencesLastIndexOf);
}
window.addEventListener("load", setup);