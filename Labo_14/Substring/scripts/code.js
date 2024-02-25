document.addEventListener("DOMContentLoaded", function() {
    // Code uitgevoerd wanneer de DOM geladen is

    function extractSubstring() {
        let txtInput = document.getElementById("txtInput").value;
        let startInput = parseInt(document.getElementById("startInput").value);
        let endInput = parseInt(document.getElementById("endInput").value);

        if (!isNaN(startInput) && !isNaN(endInput)) {
            let result = txtInput.substring(startInput, endInput);
            document.getElementById("result").innerText = "Resultaat: " + result;
        } else {
            document.getElementById("result").innerText = "Voer geldige indexwaarden in.";
        }
    }

    // Voeg een event listener toe aan de knop
    document.getElementById("btnExtract").addEventListener("click", extractSubstring);
});