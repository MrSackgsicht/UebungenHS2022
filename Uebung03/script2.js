const intervall = setInterval(IntFunc, 500);

function IntFunc() {

    d = new Date();
    ds = d.toDateString();
    ts = d.toTimeString();

    const TimeOutput = document.getElementById("output1");
    const DateOutput = document.getElementById("output2");
    
    DateOutput.innerHTML = ds;
    TimeOutput.innerHTML = ts;

    DateOutput.style["font-size"] = "30px";
    TimeOutput.style["font-size"] = "30px";
    DateOutput.style["text-aligne"] = "center";
    TimeOutput.style["text-aligne"] = "center";

}    

