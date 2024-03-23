const setup = () => {
    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    const colorDemo = document.getElementById("colorDemo");
    const saveButton = document.getElementById("saveButton");
    const savedColorsContainer = document.getElementById("savedColors");

    const redValueSpan = document.getElementById("redValue");
    const greenValueSpan = document.getElementById("greenValue");
    const blueValueSpan = document.getElementById("blueValue");

    function updateColor() {
        const redValue = redSlider.value;
        const greenValue = greenSlider.value;
        const blueValue = blueSlider.value;

        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        colorDemo.style.backgroundColor = color;

        redValueSpan.textContent = redValue;
        greenValueSpan.textContent = greenValue;
        blueValueSpan.textContent = blueValue;
    }

    function saveColor() {
        const redValue = redSlider.value;
        const greenValue = greenSlider.value;
        const blueValue = blueSlider.value;

        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        const swatch = document.createElement("div");
        swatch.classList.add("swatch");
        swatch.style.backgroundColor = color;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("deleteButton");

        deleteButton.addEventListener("click", function () {
            savedColorsContainer.removeChild(swatch);
        });

        swatch.appendChild(deleteButton);
        savedColorsContainer.appendChild(swatch);

        swatch.addEventListener("click", function () {
            redSlider.value = redValue;
            greenSlider.value = greenValue;
            blueSlider.value = blueValue;
            updateColor();
        });
    }

    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);
    saveButton.addEventListener("click", saveColor);

    updateColor();
}

window.addEventListener("load", setup);
