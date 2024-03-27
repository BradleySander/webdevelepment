const setup = () => {
    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    const saveButton = document.getElementById("saveButton");
    const savedColorsContainer = document.getElementById("savedColors");

    const colorDemo = document.getElementById("colorDemo");

    updateColor(redSlider, greenSlider, blueSlider, colorDemo);
    saveButton.addEventListener("click", () => saveColor(redSlider, greenSlider, blueSlider, savedColorsContainer, colorDemo));

    redSlider.addEventListener("input", () => updateColor(redSlider, greenSlider, blueSlider, colorDemo));
    greenSlider.addEventListener("input", () => updateColor(redSlider, greenSlider, blueSlider, colorDemo));
    blueSlider.addEventListener("input", () => updateColor(redSlider, greenSlider, blueSlider, colorDemo));
}

window.addEventListener("load", setup);

const updateColor = (red, green, blue, colorDemo) => {
    const redValueSpan = document.getElementById("redValue");
    const greenValueSpan = document.getElementById("greenValue");
    const blueValueSpan = document.getElementById("blueValue");

    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;

    colorDemo.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;
}

const saveColor = (red, green, blue, savedColorsContainer, colorDemo) => {
    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;

    const swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("deleteButton");

    deleteButton.addEventListener("click", () => {
        savedColorsContainer.removeChild(swatch);
    });

    swatch.appendChild(deleteButton);
    savedColorsContainer.appendChild(swatch);

    swatch.addEventListener("click", () => {
        red.value = redValue;
        green.value = greenValue;
        blue.value = blueValue;
        updateColor(red, green, blue, colorDemo);
    });
}