const setup = () => {
    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    const saveButton = document.getElementById("saveButton");
    const savedColorsContainer = document.getElementById("savedColors");

    const colorDemo = document.getElementById("colorDemo");

    // Laad opgeslagen kleuren uit local storage (indien beschikbaar)
    const loadSavedColors = () => {
        const savedColorsJson = localStorage.getItem("savedColors");
        return savedColorsJson ? JSON.parse(savedColorsJson) : [];
    };

    // Sla kleuren op in local storage
    const saveColors = (savedColors) => {
        const savedColorsJson = JSON.stringify(savedColors);
        localStorage.setItem("savedColors", savedColorsJson);
    };

    const savedColors = loadSavedColors();

    // Update UI met opgeslagen kleuren
    const updateSavedColors = () => {
        savedColorsContainer.innerHTML = "";
        for (const swatch of savedColors) {
            const swatchDiv = document.createElement("div");
            swatchDiv.classList.add("swatch");
            swatchDiv.style.backgroundColor = `rgb(${swatch.red}, ${swatch.green}, ${swatch.blue})`;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("deleteButton");

            // Event listener voor verwijderknop
            deleteButton.addEventListener("click", () => {
                savedColors.splice(savedColors.indexOf(swatch), 1);
                saveColors(savedColors);
                updateSavedColors();
                updateSliderValues(); // Verplaats deze aanroep hier
            });

            swatchDiv.appendChild(deleteButton);
            savedColorsContainer.appendChild(swatchDiv);

            // Event listener voor klik op kleurstaal
            swatchDiv.addEventListener("click", () => {
                redSlider.value = swatch.red;
                greenSlider.value = swatch.green;
                blueSlider.value = swatch.blue;
                updateColor(redSlider, greenSlider, blueSlider, colorDemo);
                updateSliderValues();
                saveSliderValues(redSlider.value, greenSlider.value, blueSlider.value); // Voeg deze aanroep toe
            });
        }
    };

    // Functie om de waarden van de sliders op te slaan
    const saveSliderValues = (redValue, greenValue, blueValue) => {
        localStorage.setItem("sliderValues", JSON.stringify({ red: redValue, green: greenValue, blue: blueValue }));
    };

    // Functie om de waarden van de sliders in te stellen vanuit localStorage
    const setSliderValuesFromLocalStorage = () => {
        const lastSliderValues = JSON.parse(localStorage.getItem("sliderValues"));
        if (lastSliderValues) {
            redSlider.value = lastSliderValues.red;
            greenSlider.value = lastSliderValues.green;
            blueSlider.value = lastSliderValues.blue;
            updateSliderValues(); // Update de waarden van de sliders in de UI
            updateColor(redSlider, greenSlider, blueSlider, colorDemo); // Update de kleurweergave
        }
    };

    // Roep de functie aan om de laatst opgeslagen slider waarden in te stellen
    setSliderValuesFromLocalStorage(); // Verplaats deze aanroep naar boven

    // Initialiseer UI met opgeslagen kleuren
    updateSavedColors();

    // Event listeners voor schuifregelaars
    redSlider.addEventListener("input", () => {
        updateColor(redSlider, greenSlider, blueSlider, colorDemo);
        updateSliderValues(redSlider.value, greenSlider.value, blueSlider.value); // Voeg deze aanroep toe
        saveSliderValues(redSlider.value, greenSlider.value, blueSlider.value); // Voeg deze aanroep toe
    });
    greenSlider.addEventListener("input", () => {
        updateColor(redSlider, greenSlider, blueSlider, colorDemo);
        updateSliderValues(redSlider.value, greenSlider.value, blueSlider.value); // Voeg deze aanroep toe
        saveSliderValues(redSlider.value, greenSlider.value, blueSlider.value); // Voeg deze aanroep toe
    });
    blueSlider.addEventListener("input", () => {
        updateColor(redSlider, greenSlider, blueSlider, colorDemo);
        updateSliderValues(redSlider.value, greenSlider.value, blueSlider.value); // Voeg deze aanroep toe
        saveSliderValues(redSlider.value, greenSlider.value, blueSlider.value); // Voeg deze aanroep toe
    });

    // Event listener voor opslaan
    saveButton.addEventListener("click", () => {
        const redValue = redSlider.value;
        const greenValue = greenSlider.value;
        const blueValue = blueSlider.value;

        savedColors.push({ red: redValue, green: greenValue, blue: blueValue });
        saveColors(savedColors);
        updateSavedColors();
    });
};

// Definieer de updateColor-functie
const updateColor = (redSlider, greenSlider, blueSlider, colorDemo) => {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    colorDemo.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
};

const updateSliderValues = () => {
    document.getElementById("redValue").textContent = redSlider.value;
    document.getElementById("greenValue").textContent = greenSlider.value;
    document.getElementById("blueValue").textContent = blueSlider.value;
};

// Roep de setup-functie aan wanneer het venster wordt geladen
window.addEventListener("load", setup);