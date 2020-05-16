document.addEventListener("DOMContentLoaded", (event) => {
    
    PersistValues();
    
});

function Calcular() {
    
    let tipAmount = 0;
    let billAmount = parseFloat(document.querySelector("#billAmount").value);
    let nbPaying = parseFloat(document.querySelector("#nbPaying").value);
    if (!nbPaying || nbPaying === 0) {
        nbPaying = 1;
    }
    
    let isAddTip = document.getElementById("isAddTip").checked;
    let tipBase = parseFloat(document.querySelector("#tipBase").value);
    if (isAddTip) {
        let tipType = parseInt(getRadioSelectedOption("tipType"));
        tipAmount = tipType === 1 ? billAmount * (tipBase / 100) : tipBase;
    }
    
    let eachAmount = (billAmount + tipAmount) / nbPaying;
    
    sessionStorage.setItem("billAmountVal", billAmount);
    sessionStorage.setItem("nbPayingVal", nbPaying);
    sessionStorage.setItem("isAddTipVal", isAddTip);
    sessionStorage.setItem("tipBaseVal", tipBase);
    sessionStorage.setItem("tipAmountVal", tipAmount);
    sessionStorage.setItem("eachAmountVal", eachAmount);
    
}

function PersistValues() {
    if (sessionStorage.length === 0) {
        return;
    }

    for (key in sessionStorage) {
        if (typeof sessionStorage[key] === "function") {
            continue;
        }

        let persistCtrl = document.getElementById(key.substring(0, key.length - 3));
        if (!persistCtrl) {
            continue;
        } 
        
        persistCtrl.type === "checkbox" ? persistCtrl.checked = (sessionStorage[key] == "true") : persistCtrl.value = sessionStorage[key];
    }
}

function getRadioSelectedOption(radioElementName) {
    
    let radioCtrl = document.getElementsByName(radioElementName);
    
    if (!radioCtrl) {
        return null;
    }
    
    for (opt in radioCtrl) {
        if (radioCtrl[opt].checked) {
            return radioCtrl[opt].value;
        }
    }
}