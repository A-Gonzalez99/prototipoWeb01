
//Cargar 
initializeStoreButton();
function initializeStoreButton() {
    let storeButton = document.getElementById("store-button-id");
    storeButton.addEventListener("click", loadWeb);
}

function loadWeb() {
    let storeButton = document.getElementById("store-button-id");
    open("404.html", "_self");
}

initializeHomeButton();
function initializeHomeButton() {
    let houseButton = document.getElementById("house-button-id");
    houseButton.addEventListener("click", loadHome);
}

function loadHome() {
    let houseButton = document.getElementById("house-button-id");
    open("index.html", "_self")
}

initializeSearchButtonMobile();
function initializeSearchButtonMobile() {
    let searcherButtonMobile = document.getElementById("searcher-button-mobile-id");
    searcherButtonMobile.addEventListener("click", sliderMenu);
}

initializeSearcherButton();
function initializeSearcherButton() {
    let searcherButton = document.getElementById("searcher-button-id");
    searcherButton.addEventListener("click", sliderMenu);
}

function sliderMenu() {
    let sliderBar = document.getElementById("slider-bar-id");
    let menuMobile = document.getElementById("menu-mobile-id");
    if (sliderBar.style.visibility == "hidden") {
        sliderBar.style.visibility = "visible";
        menuMobile.style.visibility = "hidden";
    }

    else {
        sliderBar.style.visibility = "hidden";
    }
}

initializeMenuBottonMobil();
function initializeMenuBottonMobil() {
    let menuButtonMobile = document.getElementById("menu-button-mobile-id");
    menuButtonMobile.addEventListener("click", menuMobile);
}

function menuMobile() {
    let menuMobile = document.getElementById("menu-mobile-id");
    let sliderBar = document.getElementById("slider-bar-id");

    if (menuMobile.style.visibility == "hidden") {
        menuMobile.style.visibility = "visible";
        sliderBar.style.visibility = "hidden";
    }

    else {
        menuMobile.style.visibility = "hidden";
    }
}

visiblePhoto = 1;
opaquePhoto = visiblePhoto;

// La función sleep está sacada de un foro 
// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


carreteFotos(visiblePhoto);
function carreteFotos(n) { taimer(n) }

function taimer(n) {

    opaquePhoto = n + 1;
    pastPhoto = n - 1;

    let s1 = document.getElementsByName("sing-" + n)[0];
    s1.className = "sing-efect-normal";
    let s2 = document.getElementsByName("sing-" + pastPhoto)[0];
    s2.className = "sing-efect-op";

    let s3 = document.getElementsByName("sing-" + n)[1];
    s3.className = "sing-efect-normal";
    let s4 = document.getElementsByName("sing-" + pastPhoto)[1];
    s4.className = "sing-efect-op";

    if (n == 9) {
        n = 1;
        opaquePhoto = n;
        pastPhoto = n;

        document.getElementsByName("sing" + 10)[0].className = "sing-efect-op";
        document.getElementsByName("sing" + 11)[0].className = "sing-efect-op";

        document.getElementsByName("sing" + "08")[1].className = "sing-efect-op";
        document.getElementsByName("sing" + "09")[1].className = "sing-efect-op";
        document.getElementsByName("sing" + 10)[1].className = "sing-efect-op";
        document.getElementsByName("sing" + 11)[1].className = "sing-efect-op";

        sleep(4744).then(() => { taimer(1) });
        
    }
    else{

        
        opaquePhoto = n + 1
        sleep(4744).then(() => { taimer(opaquePhoto) });
    }
}


