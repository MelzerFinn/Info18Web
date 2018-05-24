var btn1state = 1;
var btn2state = 0;
document.getElementById("btn1").addEventListener("click", function () {
    console.log("hi");
    if (btn1state == 1) {
        document.getElementById("canvas2D").getContext("2d").strokeStyle = "#ff9900";
        document.getElementById("btn1").setAttribute("state", "stop");
        btn1state = 2;
        document.getElementById("btn2").setAttribute("state", "pause");
        document.getElementById("btn2").className = "togglebutton";
        btn2state = 1;
    } else {
        document.getElementById("canvas2D").getContext("2d").strokeStyle = "#bf8c40";
        document.getElementById("btn1").setAttribute("state", "record");
        btn1state = 1;
        document.getElementById("btn2").setAttribute("state", "pause");
        document.getElementById("btn2").className = "togglebutton disabled";
        btn2state = 0;
    }
});
document.getElementById("btn2").addEventListener("click", function () {
    if (btn2state == 0) return false;
    else if (btn2state == 1) {
        btn2state = 2;
        document.getElementById("btn2").setAttribute("state", "play");
    } else if (btn2state == 2) {
        btn2state = 1;
        document.getElementById("btn2").setAttribute("state", "pause");
    }
});
