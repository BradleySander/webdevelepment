const setup = () => {
    const replaceDeWithHet = (text) => {
        const words = [];
        let start = 0;

        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ' || i === text.length - 1) {
                const word = i === text.length - 1 ? text.slice(start) : text.slice(start, i);
                words.push(word);
                start = i + 1;
            }
        }

        const modifiedWords = words.map((word, index) => {
            const isLastWord = index === words.length - 1;
            const hasTrailingDot = word[word.length - 1] === '.';
            const isFirstWord = index === 0;

            if ((word === 'De' || word === 'de') && (isFirstWord || isLastWord)) {
                return 'Het' + (hasTrailingDot ? '.' : '');
            } else if (word === 'De') {
                return 'Het';
            } else if (word === 'de') {
                return 'het';
            } else {
                return word;
            }
        });

        const modifiedText = modifiedWords.join(' ');

        console.log(modifiedText);
    };

    const inputText = "De Gisteren zat de jongen op de stoep en at de helft van de appel";

    console.log("Originele tekst:");
    console.log(inputText);

    console.log("\nTekst na vervanging:");
    replaceDeWithHet(inputText);
};

window.addEventListener("load", setup);
