const setup = () => {
    const rangeSlider = document.getElementById("rangeSlider");
    const selectedValue = document.getElementById("selectedValue");
    const updateFileName = () => {
        const fileInput = document.getElementById('fileInput');
        const fileNameLabel = document.getElementById('fileNameLabel');

        if (fileInput.files.length > 0) {
            fileNameLabel.textContent = `Chosen file: ${fileInput.files[0].name}`;
        } else {
            fileNameLabel.textContent = 'No file chosen';
        }
    };

    rangeSlider.addEventListener("input", function() {
        selectedValue.textContent = rangeSlider.value;
    });
}
window.addEventListener("load", setup);