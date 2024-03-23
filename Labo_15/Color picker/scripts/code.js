const setup = () => {
		const redSlider = document.getElementById("redSlider");
		const greenSlider = document.getElementById("greenSlider");
		const blueSlider = document.getElementById("blueSlider");
		const colorDemo = document.getElementById("colorDemo");

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

			console.log(`RGB: (${redValue}, ${greenValue}, ${blueValue})`);
		}

		redSlider.addEventListener("input", updateColor);
		greenSlider.addEventListener("input", updateColor);
		blueSlider.addEventListener("input", updateColor);

		updateColor();
}
window.addEventListener("load", setup);
