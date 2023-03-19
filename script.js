let inputbox = document.getElementById("input");
let heading = document.getElementById("main");

inputbox.addEventListener("keydown", function(){
    document.querySelector("#input").style.color = "#609966";
    document.querySelector("#input").style.backgroundColor = "#EDF1D6";
    document.querySelector("#main").style.color = "#B3005E";

});


inputbox.addEventListener("keyup", function(){
    document.querySelector("#input").style.color = "#A459D1";
    document.querySelector("#input").style.backgroundColor = "#BFDB38";
    document.querySelector("#main").style.color = "#FFB84C";

});