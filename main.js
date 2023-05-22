function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    modelo = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/A9mZeevSC/model.json", listo);
}
function listo() {
    console.log("ya cargue, booo");
    modelo.classify(respuesta)
}
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
function respuesta(error, resultado) {
    if (!error) {
        sonido = resultado[0].label;
        document.getElementById("detectando").innerHTML = "detectando..." + sonido + "!"
        if (sonido == "chispas") {
            p6.src = "p6.gif";
            p1.src = "p1.gif";
            setTimeout(function () {
                p6.src = "p6.png"
                p1.src = "p1.png"
            }, 5000)
        } else if (sonido == "hola") {
            p5.src = "p5.gif";
            p2.src = "p2.gif";
            setTimeout(function () {
                p5.src = "p5.png"
                p2.src = "p2.png"
            }, 5000)
        } else if (sonido == "aplausos") {
            p4.src = "p4.gif";
            p3.src = "p3.gif";
            setTimeout(function () {
                p4.src = "p4.png"
                p3.src = "p3.png"
            }, 5000)
        }
    }
}