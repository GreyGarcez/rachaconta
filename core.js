document.addEventListener("DOMContentLoaded", (event) => {
    
    persistValue("vTotalVal", "totVal");
    persistValue("nPessoasVal", "nbPessoas");
    persistValue("cadaUmPagaVal", "totCada");
    
});

function persistValue(sessionVarName, inputId) {
    if (!sessionStorage.getItem(sessionVarName)) {
        document.querySelector("#" + inputId).value = "";
        return;
    }

    document.querySelector("#" + inputId).value = sessionStorage.getItem(sessionVarName);
    sessionStorage.removeItem(sessionVarName);
}

let Calcular = () => {
    
    let vTotal = document.querySelector("#totVal").value;
    let nPessoas = document.querySelector("#nbPessoas").value;
    
    if (!nPessoas || nPessoas === 0) {
        nPessoas = 1;
    }
    
    let cadaUmPaga = vTotal / nPessoas;
    
    sessionStorage.setItem("vTotalVal", vTotal);
    sessionStorage.setItem("nPessoasVal", nPessoas);
    sessionStorage.setItem("cadaUmPagaVal", cadaUmPaga);
    
}
