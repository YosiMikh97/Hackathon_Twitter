// Font buttons creation
let fontMinSize = 0.750;
let fontStep = 0.125;
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
    // Color and font size change
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
        body.style.fontSize = `${obj.srcElement.name}em`;
    }
}

// Color buttons creation
let colors = ["rgb(77, 159, 236)", "rgb(248, 214, 72)", "rgb(229, 57, 127)", "rgb(115, 87, 246)", "rgb(238, 129, 49)", "rgb(83, 183, 129)"];
let customizecolor = document.getElementsByClassName("blockcolor")[0];
for (let i=0; i<colors.length; i++) {
    let customizecolorbtn = document.createElement("button");
    customizecolorbtn.classList.add("customizecolorbtn");
    customizecolorbtn.style.backgroundColor = colors[i];
    customizecolor.appendChild(customizecolorbtn);
    let tick = document.createElement("i");
    tick.classList.add("fa-solid");
    tick.classList.add("fa-check");
    customizecolorbtn.appendChild(tick);
}
// Change color buttons
let customizeColorChange = document.getElementsByClassName("customizecolorchange");
for (let i=0; i<colors.length; i++) {
    let customizecolorbtn = document.getElementsByClassName("customizecolorbtn");
    customizecolorbtn[i].addEventListener("mouseover", addShadowBtn);
    function addShadowBtn() {
        if (body.style.backgroundColor==="" || body.style.backgroundColor==="rgb(255, 255, 255)") {
            customizecolorbtn[i].style.boxShadow = "0 0 5px 0";
        } else {
            customizecolorbtn[i].style.boxShadow = "0 0 5px 0 #fff";
        }
    }
    customizecolorbtn[i].addEventListener("mouseout", removeShadowBtn);
    function removeShadowBtn() {
        customizecolorbtn[i].style.boxShadow = "0 0 0 0";
    }
    customizecolorbtn[i].addEventListener("click", changeColorAll)
    function changeColorAll() {
        let textColorElements = document.getElementsByClassName("textcolorchange");
        let colorTick = document.getElementsByClassName("fa-check");
        for (let k=0; k<customizeColorChange.length; k++) {
            customizeColorChange[k].style.backgroundColor = customizecolorbtn[i].style.backgroundColor;
        }
        for (let l=0; l<textColorElements.length; l++) {
            textColorElements[l].style.color = customizecolorbtn[i].style.backgroundColor;
        }
        for (let j=0; j<colors.length; j++) {
            colorTick[j].style.opacity = "0";
        }
        colorTick[i].style.opacity = "1";
    }
}

// Theme buttons creation
let themecolors = ["rgb(255, 255, 255)", "rgb(23, 32, 42)", "rgb(0, 0, 0)"];
let customizethemecolordiv = document.getElementsByClassName("customizethemecolordiv");
for (let i=0; i<themecolors.length; i++) {
    customizethemecolordiv[i].style.backgroundColor = themecolors[i];
}
// Theme change
let body = document.getElementsByTagName("body")[0];
let a = document.getElementsByTagName("a");
let searchColor = document.getElementsByClassName("searchright")[0];
let customizeSecondTheme = document.querySelectorAll(".customizecolor");
let rightBackground = document.querySelectorAll(".backgroundchange");
let borderColor = document.querySelectorAll(".border");
for (let i=0; i<themecolors.length; i++) {
    customizethemecolordiv[i].addEventListener("click", changetheme)
    function changetheme() {
    body.style.backgroundColor = themecolors[i];
    if (themecolors[i]=="rgb(255, 255, 255)") {
        body.style.color = "black";
        searchColor.style.color = "black";
        for (let k=0; k<a.length; k++) {
            a[k].style.color = "black";
        }
        for (let k=0; k<customizeSecondTheme.length; k++) {
            customizeSecondTheme[k].style.backgroundColor = "rgb(246, 246, 246)";
        }
        for (let j=0; j<rightBackground.length; j++) {
            rightBackground[j].style.backgroundColor = "rgb(246, 246, 246)";
        }
        for (let l=0; l<borderColor.length; l++) {
            borderColor[l].style.borderLeft = "1px solid rgb(240, 243, 244)";
            borderColor[l].style.borderRight = "1px solid rgb(240, 243, 244)";
            borderColor[l].style.borderBottom = "1px solid rgb(240, 243, 244)";
        }
    } else if (themecolors[i]=="rgb(23, 32, 42)") {
        body.style.color = "white";
        searchColor.style.color = "white";
        for (let k=0; k<a.length; k++) {
            a[k].style.color = "white";
        }
        for (let k=0; k<customizeSecondTheme.length; k++) {
            customizeSecondTheme[k].style.backgroundColor = "rgb(32, 39, 49)";
        }
        for (let j=0; j<rightBackground.length; j++) {
            rightBackground[j].style.backgroundColor = "rgb(32, 39, 49)";
        }
        for (let l=0; l<borderColor.length; l++) {
            borderColor[l].style.borderLeft = "1px solid rgb(58, 68, 76)";
            borderColor[l].style.borderRight = "1px solid rgb(58, 68, 76)";
            borderColor[l].style.borderBottom = "1px solid rgb(58, 68, 76)";
        }
    } else {
        body.style.color = "white";
        searchColor.style.color = "white";
        for (let k=0; k<a.length; k++) {
            a[k].style.color = "white";
        }
        for (let k=0; k<customizeSecondTheme.length; k++) {
            customizeSecondTheme[k].style.backgroundColor = "rgb(22, 24, 28)";
        }
        for (let j=0; j<rightBackground.length; j++) {
            rightBackground[j].style.backgroundColor = "rgb(22, 24, 28)";
        }
        for (let l=0; l<borderColor.length; l++) {
            borderColor[l].style.borderLeft = "1px solid rgb(48, 51, 54)";
            borderColor[l].style.borderRight = "1px solid rgb(48, 51, 54)";
            borderColor[l].style.borderBottom = "1px solid rgb(48, 51, 54)";
        }
    }
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

// Hiding Customize section
let customizeIcon = document.getElementsByClassName("customizeicon")[0];
let customize = document.getElementById("customize");
customizeIcon.addEventListener("click", showCustomize);
function showCustomize() {
    customize.style.display = "block"
}
let customizeHide = document.getElementsByClassName("customizebtn")[0];
customizeHide.addEventListener("click", hideCustomize);
function hideCustomize() {
    customize.style.display = "none"
}

// Users array
let users = [
    {image:"Bill_Gates.jpeg", firstName:"Bill", lastName:"Gates", userName:"BillGates", followers:59800000},
    {image:"Leo_Messi.png", firstName:"Lionel", lastName:"Messi", userName:"leomessi", followers:347000000},
    {image:"Donald_Trump.png", firstName:"Donald", lastName:"Trump", userName:"realDonaldTrump", followers:23500000},
    {image:"Elon_Musk.png", firstName:"Elon", lastName:"Musk", userName:"elonmusk", followers:100600000},
    {image:"Angelina_Jolie.png", firstName:"Angelina", lastName:"Jolie", userName:"Angelina", followers:13200000},
    {image:"Brad_Pitt.png", firstName:"Brad", lastName:"Pitt", userName:"BradPitt", followers:50000000},
    {image:"Irina_Shayk.jpeg", firstName:"Irina", lastName:"Shayk", userName:"irinashayk", followers:18800000},
    {image:"Ekaterina_Kukina.jpg", firstName:"Ekaterina", lastName:"Kukina", userName:"kate_kukina", followers:373},
    {image:"Aleksandra_Bronova.jpg", firstName:"Aleksandra", lastName:"Bronova", userName:"sasha.brnv", followers:11300},
    {image:"Svetlana_Zemtsova.jpg", firstName:"Svetlana", lastName:"Zemtsova", userName:"svetlana.zemtsovaa", followers:28500},
    {image:"Vlada_Komarova.jpg", firstName:"Vlada", lastName:"Komarova", userName:"_komarovaaa", followers:1829},
    {image:"Max_Verstappen.png", firstName:"Max", lastName:"Verstappen", userName:"maxverstappen1", followers:8800000},
    {image:"Rafael_Nadal.png", firstName:"Rafael", lastName:"Nadal", userName:"rafaelnadal", followers:15600000},
    {image:"Novak_Djokovic.png", firstName:"Novak", lastName:"Djokovic", userName:"djokernole", followers:11000000},
    {image:"Roger_Federer.png", firstName:"Roger", lastName:"Federer", userName:"rogerfederer", followers:9600000},
    {image:"Lewis_Hamilton.png", firstName:"Lewis", lastName:"Hamilton", userName:"lewishamilton", followers:29000000},
    {image:"David_Chobanyan.jpg", firstName:"David", lastName:"Chobanyan", userName:"davo.am", followers:685},
    {image:"Artem_Tirabian.jpg", firstName:"Artem", lastName:"Tirabian", userName:"tairabien", followers:602},
    {image:"Anri_Rurua.png", firstName:"Anri", lastName:"Rurua", userName:"anri_geo", followers:2300000},
    {image:"Emily_Ratajkovski.png", firstName:"Emily", lastName:"Ratajkovski", userName:"emrata", followers:29400000},
    {image:"Jeff_Bezos.png", firstName:"Jeff", lastName:"Bezos", userName:"jeffbezos", followers:3900000},
    {image:"Mark_Zuckerberg.jpeg", firstName:"Mark", lastName:"Zuckerberg", userName:"zuck", followers:10000000},
    {image:"Barack_Obama.webp", firstName:"Barack", lastName:"Obama", userName:"BarackObama", followers:132300000},
    {image:"Lady_Gaga.png", firstName:"Lady", lastName:"Gaga", userName:"ladygaga", followers:84800000},
    {image:"Justin_Bieber.png", firstName:"Justin", lastName:"Bieber", userName:"justinbieber", followers:114100000},
    {image:"Katy_Perry.jpeg", firstName:"Katy", lastName:"Perry", userName:"katyperry", followers:108900000},
    {image:"Taylor_Swift.png", firstName:"Taylor", lastName:"Swift", userName:"taylorswift13", followers:90500000},
    {image:"Selena_Gomez.png", firstName:"Selena", lastName:"Gomez", userName:"selenagomez", followers:66000000},
    {image:"Ariana_Grande.png", firstName:"Ariana", lastName:"Grande", userName:"arianagrande", followers:321000000},
    {image:"Dwayne_Johnson.png", firstName:"Dwayne", lastName:"Johnson", userName:"therock", followers:327000000},
    {image:"Jennifer_Lopez.png", firstName:"Jennifer", lastName:"Lopez", userName:"jlo", followers:217000000},
    {image:"Cristiano_Ronaldo.png", firstName:"Cristiano", lastName:"Ronaldo", userName:"cristiano", followers:465000000}
]

// Cards creation
document.getElementById("cards").innerHTML = "";
    users.forEach(element => {
        let newEl = document.createElement("div");
        newEl.classList.add("card");
        newEl.innerHTML = "<div class=\"cardinfo\"><img src=\"images/" + element.image + "\" alt=\"User\" class=\"cardimg\"><div class=\"carddesc\"><div class=\"name\">" + element.firstName + " " + element.lastName + "</div><div class=\"username\">@" + element.userName + " " + makeFriendly(element.followers) + "</div></div></div><div class=\"buttondiv\"><input type=\"submit\" id=\"button\" value=\"Follow\" class=\"cardbutton customizecolorchange\"></div>";
        document.getElementById("cards").appendChild(newEl);
    }
)

// Follow/unfollow users
let followUsers = document.getElementsByClassName("cardbutton");
for (let i=0; i<users.length; i++) {
    followUsers[i].addEventListener("click",follow);
    function follow() {
            followUsers[i].value = "Following";
            followUsers[i].style.width = "5.5em";
    }
}


// User search
searchUser = function(searchContent) {
    document.getElementById("cards").innerHTML = "";
        users.forEach(element => {
            if (searchContent=="" || element.lastName == searchContent || element.firstName == searchContent || element.userName == searchContent) {
                let newEl = document.createElement("div");
                newEl.classList.add("card");
                newEl.innerHTML = "<div class=\"cardinfo\"><img src=\"images/" + element.image + "\" alt=\"User\" class=\"cardimg\"><div class=\"carddesc\"><div class=\"name\">" + element.firstName + " " + element.lastName + "</div><div class=\"username\">@" + element.userName + " " + makeFriendly(element.followers) + "</div></div></div><div class=\"buttondiv\"><input type=\"submit\" id=\"button\" value=\"Follow\" class=\"cardbutton customizecolorchange\"></div>";
                document.getElementById("cards").appendChild(newEl);
            }
        }
    );
}
search = function() {
    let searchText = document.getElementById("search").value;
    searchUser(searchText);
}

// Number of followers
function intlFormat(num)
{
    return new Intl.NumberFormat().format(Math.round(num*10)/10);
}
function makeFriendly(num)
{
    if(num >= 1000000)
        return intlFormat(num/1000000)+'M';
    if(num >= 1000)
        return intlFormat(num/1000)+'k';
        return intlFormat(num);
}

// Right side

// Top users by followers
users.sort((a, b) => {
    return  b.followers - a.followers;
});

let numberOfTopAccounts = 5;
let slicedUsers = users.slice(0, numberOfTopAccounts);

let showTop = document.getElementById("showtopbtn");
showTop.addEventListener("click", showTopFun);
function showTopFun() {
    numberOfTopAccounts = numberOfTopAccounts + 5;
    slicedUsers = users.slice(0, numberOfTopAccounts);
    document.getElementById("topaccounts").innerHTML = "";
    slicedUsers.forEach(element => {
            let newEl = document.createElement("div");
            newEl.classList.add("cardTop");
            newEl.innerHTML = "<div class=\"cardinfo\"><img src=\"images/" + element.image + "\" alt=\"User\" class=\"cardimg\"><div class=\"carddesc\"><div class=\"name\">" + element.firstName + " " + element.lastName + "</div><div class=\"username\">@" + element.userName + " " + makeFriendly(element.followers) + "</div></div></div><div class=\"buttondiv\"><input type=\"submit\" id=\"button\" value=\"Follow\" class=\"cardbutton customizecolorchange\"></div>";
            document.getElementById("topaccounts").appendChild(newEl);
        }
)
}

let showTopFive = document.getElementById("showtopfivebtn");
showTopFive.addEventListener("click", showTopFiveFun);
function showTopFiveFun() {
    numberOfTopAccounts = 5;
    slicedUsers = users.slice(0, numberOfTopAccounts);
    document.getElementById("topaccounts").innerHTML = "";
    slicedUsers.forEach(element => {
            let newEl = document.createElement("div");
            newEl.classList.add("cardTop");
            newEl.innerHTML = "<div class=\"cardinfo\"><img src=\"images/" + element.image + "\" alt=\"User\" class=\"cardimg\"><div class=\"carddesc\"><div class=\"name\">" + element.firstName + " " + element.lastName + "</div><div class=\"username\">@" + element.userName + " " + makeFriendly(element.followers) + "</div></div></div><div class=\"buttondiv\"><input type=\"submit\" id=\"button\" value=\"Follow\" class=\"cardbutton customizecolorchange\"></div>";
            document.getElementById("topaccounts").appendChild(newEl);
        }
)
}

document.getElementById("topaccounts").innerHTML = "";
slicedUsers.forEach(element => {
        let newEl = document.createElement("div");
        newEl.classList.add("cardTop");
        newEl.innerHTML = "<div class=\"cardinfo\"><img src=\"images/" + element.image + "\" alt=\"User\" class=\"cardimg\"><div class=\"carddesc\"><div class=\"name\">" + element.firstName + " " + element.lastName + "</div><div class=\"username\">@" + element.userName + " " + makeFriendly(element.followers) + "</div></div></div><div class=\"buttondiv\"><input type=\"submit\" id=\"button\" value=\"Follow\" class=\"cardbutton customizecolorchange\"></div>";
        document.getElementById("topaccounts").appendChild(newEl);
    }
)



// Trends for you
let arrowTags = ["Israel", "East", "TodayNews", "Politic", "ClimatChange", "USA", "Putin", "Biden", "Macron", "Italy", "Rest", "Weekend", "Weekday", "Weather", "Cosmos", "IT", "Kant", "BootCamp", "TheEarth", "Maza", "Corona", "Books"]
let tagsForYou = document.getElementById("tagsforyou")

function createTags() {
    for (let i=0; i<10; i++) {
        let tags = arrowTags[Math.floor(Math.random() * arrowTags.length)];
        let forTags = document.createElement("div");
        forTags.classList.add("tagdiv");
        let textTags = document.createTextNode("#")
        tagsForYou.appendChild(forTags);
        let tagsForYouVar = document.createTextNode(tags);
        let brEak = document.createElement("a");
        forTags.appendChild(brEak);
        brEak.appendChild(textTags);
        brEak.appendChild(tagsForYouVar);
    } 
}
createTags()