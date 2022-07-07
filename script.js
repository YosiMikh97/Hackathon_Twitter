let colors = ["rgb(77, 159, 236)", "rgb(248, 214, 72)", "rgb(229, 57, 127)", "rgb(115, 87, 246)", "rgb(238, 129, 49)", "rgb(83, 183, 129)"];
let customizecolor = document.getElementsByClassName("blockcolor")[0];
for (let i=0; i<colors.length; i++) {
    let customizecolordiv = document.createElement("div");
    customizecolordiv.classList.add("customizecolordiv");
    customizecolordiv.style.backgroundColor = colors[i];
    customizecolor.appendChild(customizecolordiv);
}

let themecolors = ["rgb(255, 255, 255)", "rgb(23, 32, 42)", "rgb(0, 0, 0)"];
let customizethemecolordiv = document.getElementsByClassName("customizethemecolordiv");
for (let i=0; i<themecolors.length; i++) {
    customizethemecolordiv[i].style.backgroundColor = themecolors[i];
}

let body = document.getElementsByTagName("body")[0];
customizethemecolordiv[0].addEventListener("click", changethemewhite)
function changethemewhite() {
    body.style.backgroundColor = themecolors[0];
    body.style.color = "black";
}
customizethemecolordiv[1].addEventListener("click", changethemedim)
function changethemedim() {
    body.style.backgroundColor = themecolors[1];
    body.style.color = "white";
}
customizethemecolordiv[2].addEventListener("click", changethemedark)
function changethemedark() {
    body.style.backgroundColor = themecolors[2];
    body.style.color = "white";
}