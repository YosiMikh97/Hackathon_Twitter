// Color buttons creation
let colors = ["rgb(77, 159, 236)", "rgb(248, 214, 72)", "rgb(229, 57, 127)", "rgb(115, 87, 246)", "rgb(238, 129, 49)", "rgb(83, 183, 129)"];
let customizecolor = document.getElementsByClassName("blockcolor")[0];
for (let i=0; i<colors.length; i++) {
    let customizecolorbtn = document.createElement("button");
    customizecolorbtn.classList.add("customizecolorbtn");
    customizecolorbtn.style.backgroundColor = colors[i];
    customizecolor.appendChild(customizecolorbtn);
}
// Theme buttons creation
let themecolors = ["rgb(255, 255, 255)", "rgb(23, 32, 42)", "rgb(0, 0, 0)"];
let customizethemecolordiv = document.getElementsByClassName("customizethemecolordiv");
for (let i=0; i<themecolors.length; i++) {
    customizethemecolordiv[i].style.backgroundColor = themecolors[i];
}
// Theme change
let body = document.getElementsByTagName("body")[0];
for (let i=0; i<themecolors.length; i++) {
    customizethemecolordiv[i].addEventListener("click", changetheme)
    function changetheme() {
    body.style.backgroundColor = themecolors[i];
    if (themecolors[i]=="rgb(255, 255, 255)") {
        body.style.color = "black";
    } else {
        body.style.color = "white";
    }
}
}
// Font buttons creation
let customizeFont = document.getElementsByClassName("customizefontcenter")[0];
let fontoptionsbtn;
for (let i=0; i<5; i++) {
    fontoptionsbtn = document.createElement("button");
    fontoptionsbtn.classList.add("fontoptions");
    customizeFont.appendChild(fontoptionsbtn);
}
// Font buttons shadows
for (let i=0; i<5; i++) {
    let fontOption = document.getElementsByClassName("fontoptions")[i];
    fontOption.addEventListener("mouseover", addshadow);
    function addshadow() {
        fontOption.style.boxShadow = "0 0 10px 0";
    }
    fontOption.addEventListener("mouseout", removeshadow);
    function removeshadow() {
        fontOption.style.boxShadow = "0 0 0 0";
    }
    fontOption.addEventListener("click", changeColor);
    function changeColor() {
        // for (let k=0; k<themecolors.length; k++) {
        //     function removeClick() {
        //         fontOption.style.backgroundColor = "rgb(172, 201, 238)";
        //         fontOption.style.height = "12px";
        //         fontOption.style.width = "12px";
        //     }
        //     removeClick()
        // }
        fontOption.style.backgroundColor = "rgb(77, 159, 236)";
        // fontOption.style.height = "15px";
        // fontOption.style.width = "15px";
    }
}


// Theme buttons shadows
for (let i=0; i<themecolors.length; i++) {
    let shadow = document.getElementsByClassName("customizecircle")[i];
    let object = document.getElementsByClassName("customizethemecolordiv")[i];
    object.addEventListener("mouseover", addShadow);
    function addShadow() {
        if (themecolors[i]=="rgb(255, 255, 255)") {
            shadow.style.boxShadow = "0 0 5px 0";
        } else {
            shadow.style.boxShadow = "0 0 5px 0 #fff";
        }
    }
    object.addEventListener("mouseout", removeShadow);
    function removeShadow() {
        shadow.style.boxShadow = "0 0 0 0";
    }
}