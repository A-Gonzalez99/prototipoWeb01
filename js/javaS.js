
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

const animated = document.getElementById("panel-sing-id");

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

carreteFotos(visiblePhoto);
function carreteFotos(n) { taimer(n) }

function taimer(n) {
    opaquePhoto = n + 1;
    pastPhoto = n - 1;

    let s1 = document.getElementById("sing-" + n);
    s1.className = "sing-efect-normal";
    let s2 = document.getElementById("sing-" + opaquePhoto);
    // s2.className = "sing-efect-op";
    let s3 = document.getElementById("sing-" + pastPhoto);
    s3.className = "sing-efect-op";

    if (n == 9) {
        n = 1;
        opaquePhoto = 1;
        pastPhoto = 1;

        document.getElementById("sing" + 10).className = "sing-efect-op";
        document.getElementById("sing" + 11).className = "sing-efect-op";
    }

    opaquePhoto = n + 1
    sleep(4744).then(() => { taimer(visiblePhoto) });
}


animated.addEventListener("animationend", () => {


});

