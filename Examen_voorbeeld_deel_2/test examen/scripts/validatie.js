const valideerTank1 = () => {
    return valideerDamage1() && valideerRateOfFire1() && valideerPen1() && valideerAms1() && valideerAcc1() && valideerGd1() && valideerTfs1() && valideerPwr1();
};

const valideerTank2 = () => {
    return valideerDamage2() && valideerRateOfFire2() && valideerPen2() && valideerAms2() && valideerAcc2() && valideerGd2() && valideerTfs2() && valideerPwr2();
};

const valideerDamage1 = () => {
    let txtDamage1 = document.getElementById("dmg1");
    let dmg1 = parseFloat(txtDamage1.value);
    if (dmg1 < 0 || isNaN(dmg1)) {
        reportError(txtDamage1, "Needs to be a number and can't be less than 0");
        return false;
    } else {
        clearError(txtDamage1);
        return true;
    }
};

const valideerRateOfFire1 = () => {
    let txtRateOfFire1 = document.getElementById("rof1");
    let rof1 = parseFloat(txtRateOfFire1.value);
    if (rof1 < 0 || isNaN(rof1)) {
        reportError(txtRateOfFire1, "Needs to be a decimal number and can't be less than 0");
        return false;
    } else {
        clearError(txtRateOfFire1);
        return true;
    }
};

const valideerPen1 = () => {
    let txtPen1 = document.getElementById("pen1");
    let pen1 = parseFloat(txtPen1.value);
    if (pen1 < 0 || isNaN(pen1)) {
        reportError(txtPen1, "Needs to be a number and can't be less than 0");
        return false;
    } else {
        clearError(txtPen1);
        return true;
    }
};

const valideerAms1 = () => {
    let txtAms1 = document.getElementById("ams1");
    let ams1 = parseFloat(txtAms1.value);
    if (ams1 < 0 || isNaN(ams1)) {
        reportError(txtAms1, "Needs to be a number and can't be less than 0");
        return false;
    } else {
        clearError(txtAms1);
        return true;
    }
};

const valideerAcc1 = () => {
    let txtAcc1 = document.getElementById("acc1");
    let acc1 = parseFloat(txtAcc1.value);
    if (acc1 < 0 || isNaN(acc1)) {
        reportError(txtAcc1, "Needs to be a decimal number and can't be less than 0");
        return false;
    } else {
        clearError(txtAcc1);
        return true;
    }
};

const valideerGd1 = () => {
    let txtGd1 = document.getElementById("gd1");
    let gd1 = parseFloat(txtGd1.value);
    if (gd1 < 0 || isNaN(gd1)) {
        reportError(txtGd1, "Needs to be a number and can't be less than 0");
        return false;
    } else {
        clearError(txtGd1);
        return true;
    }
};

const valideerTfs1 = () => {
    let txtTfs1 = document.getElementById("tfs1");
    let tfs1 = parseFloat(txtTfs1.value);
    if (tfs1 < 0 || isNaN(tfs1)) {
        reportError(txtTfs1, "Needs to be a decimal number and can't be less than 0");
        return false;
    } else {
        clearError(txtTfs1);
        return true;
    }
};

const valideerPwr1 = () => {
    let txtPwr1 = document.getElementById("pwr1");
    let pwr1 = parseFloat(txtPwr1.value);
    if (pwr1 < 0 || isNaN(pwr1)) {
        reportError(txtPwr1, "Needs to be a decimal number and can't be less than 0");
        return false;
    } else {
        clearError(txtPwr1);
        return true;
    }
};

const valideerDamage2 = () => {
    let txtDamage2 = document.getElementById("dmg2");
    let dmg2 = parseFloat(txtDamage2.value);
    if (dmg2 < 0 || isNaN(dmg2)) {
        reportError(txtDamage2, "Needs to be a number and can't be less than 0");
        return false;
    } else {
        clearError(txtDamage2);
        return true;
    }
};

const valideerRateOfFire2 = () => {
    let txtRateOfFire2 = document.getElementById("rof2");
    let rof2 = parseFloat(txtRateOfFire2.value);
    if (rof2 < 0 || isNaN(rof2)) {
        reportError(txtRateOfFire2, "Needs to be a decimal number and can't be less than 0");
        return false;
    } else {
        clearError(txtRateOfFire2);
        return true;
    }
};

const valideerPen2 = () => {
    let txtPen2 = document.getElementById("pen2");
    let pen2 = parseFloat(txtPen2.value);
    if (pen2 < 0 || isNaN(pen2)) {
        reportError(txtPen2, "Needs to be a number and can't be less than 0");
        return false;
    } else {
        clearError(txtPen2);
        return true;
    }
};

const valideerAms2 = () => {
    let txtAms2 = document.getElementById("ams2");
    let ams2 = parseFloat(txtAms2.value);
    if (ams2 < 0 || isNaN(ams2)) {
        reportError(txtAms2, "Needs to be a number and can't be less than 0");
        return false;
    } else {
        clearError(txtAms2);
        return true;
    }
};

const valideerAcc2 = () => {
    let txtAcc2 = document.getElementById("acc2");
    let acc2 = parseFloat(txtAcc2.value);
    if (acc2 < 0 || isNaN(acc2)) {
        reportError(txtAcc2, "Needs to be a decimal number and can't be less than 0");
        return false;
    } else {
        clearError(txtAcc2);
        return true;
    }
};

const valideerGd2 = () => {
    let txtGd2 = document.getElementById("gd2");
    let gd2 = parseFloat(txtGd2.value);
    if (gd2 < 0 || isNaN(gd2)) {
        reportError(txtGd2, "Needs to be a number and can't be less than 0");
        return false;
    } else {
        clearError(txtGd2);
        return true;
    }
};

const valideerTfs2 = () => {
    let txtTfs2 = document.getElementById("tfs2");
    let tfs2 = parseFloat(txtTfs2.value);
    if (tfs2 < 0 || isNaN(tfs2)) {
        reportError(txtTfs2, "Needs to be a decimal number and can't be less than 0");
        return false;
    } else {
        clearError(txtTfs2);
        return true;
    }
};

const valideerPwr2 = () => {
    let txtPwr2 = document.getElementById("pwr2");
    let pwr2 = parseFloat(txtPwr2.value);
    if (pwr2 < 0 || isNaN(pwr2)) {
        reportError(txtPwr2, "Needs to be a decimal number and can't be less than 0");
        return false;
    } else {
        clearError(txtPwr2);
        return true;
    }
};

const reportError = (element, message) => {
    let elementId = element.getAttribute("id");
    let errElementId = "err" + elementId;
    let errElement = document.getElementById(errElementId);
    element.classList.add("invalid");
    errElement.textContent = message;
};

const clearError = (element) => {
    let elementId = element.getAttribute("id");
    let errElementId = "err" + elementId;
    let errElement = document.getElementById(errElementId);
    element.classList.remove("invalid");
    errElement.textContent = "";
};