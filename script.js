let fontMinSize = 8;
let fontStep = 4;

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
    fontoptionsbtn.setAttribute("id", "btnFontSize"+i);
    fontoptionsbtn.setAttribute("name", fontMinSize+i*fontStep);
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
    function changeColor(obj) {
        let customizeFont = document.getElementsByClassName("customizefontcenter")[0];
        for (let k=0; k<5; k++) {
            child = customizeFont.children[k];
            child.style.backgroundColor = "rgb(172, 201, 238)";
            child.style.height = "12px";
            child.style.width = "12px";
        }
        obj.srcElement.style.backgroundColor = "rgb(77, 159, 236)";
        obj.srcElement.style.height = "15px";
        obj.srcElement.style.width = "15px";
        body.style.fontSize = `${obj.srcElement.name}px`;

        //     function removeClick() {
        //         fontOption.style.backgroundColor = "rgb(172, 201, 238)";
        //         fontOption.style.height = "12px";
        //         fontOption.style.width = "12px";
        //     }
        //     removeClick()
        // }
        // fontOption.style.backgroundColor = "rgb(77, 159, 236)";
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

// array prof

// let arrProfiles = [
// {Foto: , First name:"Jhon", Last name:"Dow", Occupation: "Doctor" Location:"USA", Age: 45, Gender: "Male", Followers: 1}
// {Foto: ,    First name:"Andre", Last name:"Shaver", Occupation: "Fire prevention specialist" Location:"Australia", Age: 72, Gender: "Male", Followers: 3900}
// {Foto: ,    First name:"Sean", Last name:"Diaz", Occupation: "School bus driver" Location:"Austria", Age: 42, Gender: "Male", Followers: 6780}
// {Foto: ,    First name:"Tim", Last name:"Eisenberg", Occupation: "Brace maker" Location:"Belgium", Age: 32, Gender: "Male", Followers: 680}
// {Foto: ,    First name:"Dieter", Last name:"Daecher", Occupation: "Bindery machine setter" Location:"Brazil", Age: 55, Gender: "Male", Followers: 1183}
// {Foto: ,    First name:"Bernd", Last name:"Schmid", Occupation: "General practitioner" Location:"Canada", Age: 30, Gender: "Male", Followers: 7886}
// {Foto: ,    First name:"Paul", Last name:"Lane", Occupation: "Card punching machine operator" Location:"Canada", Age: 43, Gender: "Male", Followers: 11187}
// {Foto: ,    First name:"Manuel", Last name:"Olson", Occupation: "Casino cage worker" Location:"Finland", Age: 23, Gender: "Male", Followers: 2280}
// {Foto: ,    First name:"Avenall", Last name:"Durepos", Occupation: "Midshipman" Location:"France", Age: 34, Gender: "Male", Followers: 830}
// {Foto: ,    First name:"Ermenegildo", Last name:"Onio", Occupation: "Prosthetist" Location:"Italy", Age: 39, Gender: "Male", Followers: 83991}
// {Foto: ,    First name:"Valentin", Last name:"Macpherson", Occupation: "Bench technician" Location:"Poland", Age: 50, Gender: "Male", Followers: 7595}
// {Foto: ,    First name:"Rex", Last name:"Tiedemann", Occupation: "Sociologist" Location:"South Africa", Age: 47, Gender: "Male", Followers: 3280}
// {Foto: ,    First name:"Jesse", Last name:"Morgan", Occupation: "Rural mail carrier" Location:"Tunisia", Age: 29, Gender: "Male", Followers: 7345}
// {Foto: ,    First name:"Roger", Last name:"Humphries", Occupation: "Hydrographic surveyor" Location:"Uruguay", Age: 53, Gender: "Male", Followers: 74345}
// {Foto: ,    First name:"Don", Last name:"Schrader", Occupation: "Human resources clerk" Location:"Switzerland", Age: 44, Gender: "Male", Followers: 5445}
// {Foto: ,    First name:"Ashanti", Last name:"Morris", Occupation: "Airline flight engineer" Location:"Australia", Age: 47, Gender: "Female", Followers: 5541}
// {Foto: ,    First name:"Jimmie", Last name:"Harbuck", Occupation: "Compliance officer" Location:"Austria", Age: 25, Gender: "Female", Followers: 56882}
// {Foto: ,    First name:"Jayne", Last name:"Maguire", Occupation: "Library assistant" Location:"Brazil", Age: 39, Gender: "Female", Followers: 111}
// {Foto: ,    First name:"Stella", Last name:"Scott", Occupation: "Bindery machine operator" Location:"Canada", Age: 71, Gender: "Female", Followers: 15611}
// {Foto: ,    First name:"Bonnie", Last name:"Caban", Occupation: "Paper coating machine operator" Location:"Denmark", Age: 33, Gender: "Female", Followers: 156567}
// {Foto: ,    First name:"Laurel", Last name:"Dube", Occupation: "Cardiographer" Location:"Estonia", Age: 56, Gender: "Female", Followers: 6567}
// {Foto: ,    First name:"Jane", Last name:"White", Occupation: "IT manager" Location:"France", Age: 22, Gender: "Female", Followers: 25956}
// {Foto: ,    First name:"Kelly", Last name:"Edwards", Occupation: "Baker" Location:"Greenland", Age: 43, Gender: "Female", Followers: 5477}
// {Foto: ,    First name:"Julie", Last name:"Winter", Occupation: "Teacher assistant" Location:"Norway", Age: 58, Gender: "Female", Followers: 235790}
// {Foto: ,    First name:"Sierra", Last name:"Ford", Occupation: "Dividend clerk" Location:"Portugal", Age: 37, Gender: "Female", Followers: 34111}
// {Foto: ,    First name:"Mary", Last name:"Brodersen", Occupation: "Lift truck operator" Location:"Switzerland", Age: 40, Gender: "Female", Followers: 35667}
// {Foto: ,    First name:"Marceline", Last name:"Guzman", Occupation: "Claims investigator" Location:"New Zealand", Age: 65, Gender: "Female", Followers: 534657}]

