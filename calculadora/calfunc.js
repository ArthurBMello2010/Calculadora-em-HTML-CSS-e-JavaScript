function soma() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado:" + (n1 + n2);
}

function sub() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado:" + (n1 - n2);
}

function mult() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado:" + (n1 * n2);
}

function div() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Resultado:" + (n1 / n2);
}

function limp(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerHTML = "Resultado:";
}