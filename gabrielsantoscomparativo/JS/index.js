function comparadatas() {
    var data1 = new Date(document.getElementById("data1cmt").value);
    var data2 = new Date(document.getElementById("data2cmt").value);

    const resultadoElement = document.getElementById("resultado");
    const resultado = data1 > data2 ? "A primeira data é maior." :
                      data1 < data2 ? "A segunda data é maior." :
                      "Ambas datas são iguais.";
    
    resultadoElement.textContent = resultado;
}

function dataatual() {
    
    var now = new Date();
   
    var formatarData = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();

    document.getElementById("resultado").textContent = formatarData;
}

function calculaintervalo() {
    var data1 = new Date(document.getElementById("data1cmt").value + "T00:00:00");
    var data2 = new Date(document.getElementById("data2cmt").value + "T00:00:00");

    if (data1 > data2) {
        var temp = data1;
        data1 = data2;
        data2 = temp;
    }

    var intervaloMs = Math.abs(data2 - data1);
    var intervaloDias = intervaloMs / (1000 * 60 * 60 * 24);

    document.getElementById("resultado").innerText = "O intervalo das datas é: " + intervaloDias + " dias.";
}