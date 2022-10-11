
function changestyle() {
    const sourceText = document.getElementById("input").value;
    const outputText = document.getElementById("output");

    outputText.innerHTML = sourceText;

    var random = Math.floor(Math.random()*16777215).toString(16)
    var farbe = "#" + random;

    outputText.style["color"] = farbe;
    outputText.style["font-size"] = "30px";
    outputText.style["padding"] = "32px 32px";
    outputText.style["text-aligne"] = "center";
    
}