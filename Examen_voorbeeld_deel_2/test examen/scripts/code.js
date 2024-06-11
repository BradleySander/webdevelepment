const setup = () => {
    document.getElementById("btnCompare").addEventListener("click", compareTanks);
};

const compareTanks = () => {
    if (valideerTank1() && valideerTank2()) {
        calculateDPM("tank1");
        calculateDPM("tank2");
        highlightComparison();
    }
};

const calculateDPM = (tank) => {
    let dmg = parseFloat(document.getElementById(`${tank === "tank1" ? "dmg1" : "dmg2"}`).value);
    let rof = parseFloat(document.getElementById(`${tank === "tank1" ? "rof1" : "rof2"}`).value);
    let dpm = dmg * rof;
    document.getElementById(`${tank}dpm`).innerHTML = dpm.toFixed(2);
};

const highlightComparison = () => {
    let fields = ["dmg", "rof", "pen", "ams", "acc", "gd", "tfs", "pwr"];
    fields.forEach(field => {
        let val1 = parseFloat(document.getElementById(`${field}1`).value);
        let val2 = parseFloat(document.getElementById(`${field}2`).value);

        if (field === "acc") { // For accuracy, lower is better
            if (val1 < val2) {
                setColor(`${field}1`, "green");
                setColor(`${field}2`, "red");
            } else if (val1 > val2) {
                setColor(`${field}1`, "red");
                setColor(`${field}2`, "green");
            } else {
                setColor(`${field}1`, "white");
                setColor(`${field}2`, "white");
            }
        } else {
            if (val1 > val2) {
                setColor(`${field}1`, "green");
                setColor(`${field}2`, "red");
            } else if (val1 < val2) {
                setColor(`${field}1`, "red");
                setColor(`${field}2`, "green");
            } else {
                setColor(`${field}1`, "white");
                setColor(`${field}2`, "white");
            }
        }
    });
};

const setColor = (elementId, color) => {
    document.getElementById(elementId).style.backgroundColor = color;
};

window.addEventListener("load", setup);
