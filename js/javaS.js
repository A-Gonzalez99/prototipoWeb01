

let panels = [
    {
        user: "ROOM 8 STUDIO",
        img: "img/explorer/ROOM9STUDIO-img01.jpg",
        coment: "We are proud to present latest works of our amazing Grooming team! Do not miss our unique hairstyles created with haircards and particle",
        like: "25"
    },
    {
        user: "Davimir",
        img: "img/explorer/Davimir-img01.jpg",
        coment: "I’d like to share a remake of a VFX that I couldn’t bring to life in the way I envisioned. Now that I’ve improved my skills, I wanted to revisit that project and complete it, and this is the result. I hope you like it (I’m open to any feedback).",
        like: "1568"


    },
    {
        user: "Luke Starkie",
        img: "img/explorer/Luke-Starkie-img01.jpg",
        coment: "An update of an old design I originally made in 2014",
        like: "97"

    },
    {
        user: "Mohandish",
        img: "img/explorer/Mohandish-img01.gif",
        coment: "Hey guys! This is a practice effect using Niagara. Feedback and ideas for this effect or new things to try next are all welcome!",
        like: "23"

    },
    {
        user: "Hideyuki Ashizawa",
        img: "img/explorer/Hideyuki-Ashizawa-img01.jpg",
        coment: "I am very excited to share my new digital drawing, 'The Dance of Life'. This work represents the joy and movement of life. I chose to use vibrant colors and flowing lines to create a feeling of energy and dynamism.",
        like: "226"

    },
    {
        user: "Unbyul",
        img: "img/explorer/Unbyul-img01.gif",
        coment: "Basic Wave Material tip [UnrealEngine5 Niagara]",
        like: "5"

    }

];

visiblePhoto = 1;
opaquePhoto = visiblePhoto;

initialize();
function initialize() {

    if (window.location.href.substr(-15) == "formulario.html") {
        const BICYCLE_FORM = document.getElementById("submitNewPanel");
        BICYCLE_FORM.addEventListener("click", addNewPanel);
        showPanels();
    }

    if (window.location.href.substr(-10) == "index.html") {
        let storeButton = document.getElementById("store-button-id");
        carreteFotos(visiblePhoto);

    }
}

function openWeb(url) {open(url, "_self")}






initializeMenuBottonMobil();
function initializeMenuBottonMobil() {
    let menuButtonMobile = document.getElementById("menu-button-mobile-id");
    menuButtonMobile.addEventListener("click", menuMobile);
}

function menuMobile() {
    let menuMobile = document.getElementById("menu-mobile-id");

    if (menuMobile.style.visibility == "hidden") {
        menuMobile.style.zIndex=1;
        menuMobile.style.visibility = "visible";
        menuMobile.style.height= "100%";
        menuMobile.style.marginTop="-10PX";

    }

    else {
        menuMobile.style.visibility = "hidden";
        menuMobile.style.zIndex=-1;

    }
}



// La función sleep está sacada de un foro 
// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


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
    else {
        opaquePhoto = n + 1
        sleep(4744).then(() => { taimer(opaquePhoto) });
    }
}

function like(indexLike) {

    if (document.getElementById("likeClick" + indexLike).className == "fa-regular fa-thumbs-up") {
        n = parseInt(document.getElementById("like" + indexLike).textContent) + 1;
        document.getElementById("like" + indexLike).innerText = n;
        document.getElementById("likeClick" + indexLike).className = "fa-solid fa-thumbs-up";

    }

    else {
        n = parseInt(document.getElementById("like" + indexLike).textContent) - 1;
        document.getElementById("like" + indexLike).innerText = n;
        document.getElementById("likeClick" + indexLike).className = "fa-regular fa-thumbs-up";
    }
}

function fav(indexFav) {

    if (document.getElementById("favClick" + indexFav).className != "fa-solid fa-heart-circle-minus") {
        document.getElementById("favClick" + indexFav).className = "fa-solid fa-heart-circle-minus";

    }
    else {
        document.getElementById("favClick" + indexFav).className = "fa-solid fa-heart-circle-plus";
    }

}

function editContent(n) {
    c = document.getElementById("modalContentDescription" + n).textContent;
    i = document.getElementById("modelContentImg" + n).getAttribute("src");

    document.getElementById("modalEdit" + n).value = c;
    document.getElementById("modalEditImg" + n).src = i;
}

function updateImg(n) {
    ur = document.getElementById("avatar" + n).value;

    if (ur != "") {
        ur2 = "";
        for (var x = 0; x < ur.length; x++) {

            if (ur.charAt(x) == '\\') {
                ur2 += "/";
            }

            else {
                ur2 = ur2 + String(ur.charAt(x));
            }

        }
        console.log(document.getElementById("avatar" + n).value);
        document.getElementById("modalEditImg" + n).src = ur2;
        console.log(String(ur2));
    }
}

function updateNewContent(index) {
    text = document.getElementById("modalEdit" + index).value;
    console.log("Comentariio: " + text);
    panels[index].coment = text;

}



allPanels = "";
function showPanels() {
    const BICYCLE_LIST = document.getElementById("panles-list");
    allPanels = "";

    for (let i = panels.length - 1; i > -1; i--) {
        createPanel(i, panels[i].user, panels[i].img, panels[i].coment, panels[i].like);

    }
    BICYCLE_LIST.children[0].innerHTML = allPanels;
}

function addNewPanel(event) {
    event.preventDefault();
    const USER = document.getElementById("user-new-panel").value;
    const COMENT = document.getElementById("coment-new-panel").value;

    if (USER != "" && COMENT != "") {
        panels.push({
            user: USER,
            img: "img/default-image.jpg",
            coment: COMENT,
            like: 0

        });
    }

    if (USER == "") {
        document.getElementById("userError").style.visibility = "visible";
    }

    else {
        document.getElementById("userError").style.visibility = "hidden";
    }

    if (COMENT == "") {
        document.getElementById("comentError").style.visibility = "visible";
    }

    else {
        document.getElementById("comentError").style.visibility = "hidden";

    }
    showPanels();
}

function loadComents(index) {
    document.getElementById("modalContentDescription" + index).textContent = panels[index].coment;
}

function deletePanel(index) {
    panels.splice(index, 1)
    showPanels();
}


function createPanel(index, user, img, coment, like) {
    const BICYCLE_LIST = document.getElementById("panles-list");

    html = '<div class="form-content">'
    html += '<div class="form-content-top"><p>' + user + '</p></div>'
    html += '<div class="form-content-medium">'
    html += '<button type="button" data-bs-target="#ModelShow' + index + '" data-bs-toggle="modal" onclick="loadComents(' + index + ')">'
    html += '<img src="' + img + '" alt=""></button></div>'
    html += '<div class="form-content-lower">'
    html += '<button type="button" onclick="fav(' + index + ')">'
    html += '<i id="favClick' + index + '" class="fa-solid fa-heart-circle-plus"></i></button>'
    html += '<button><i onclick="like(' + index + ')" id="likeClick' + index + '" class="fa-regular fa-thumbs-up"></i></button>'
    html += '<p id="like' + index + '">' + like + '</p>'
    html += '<button style="align-items: end; margin-left: auto;" type="button"'
    html += 'data-bs-target="#ModelEdit' + index + '" data-bs-toggle="modal" onclick="editContent(' + index + ')">'
    html += '<i class="fa-solid fa-pen"></i></button>'
    html += '<button type="button" onclick="deletePanel(' + index + ')">'
    html += '<i id="dellClick' + index + '" class="fa-solid fa-trash"></i></button></div>'

    html += '<!-- Modal Edit-->'
    html += '<div class="modal fade" id="ModelEdit' + index + '" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'
    html += '<div class="modal-dialog">'
    html += '<div class="modal-content">'
    html += '<div class="modal-header">'
    html += '<h5 class="modal-title" id="exampleModalLabel">Edit content</h5>'
    html += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>'
    html += '<div class="modal-body"><div><div>'
    html += '<form action="formulario.html">'
    html += '<div><div class="form-div-img"><img id="modalEditImg' + index + '" src="" alt="" style="max-width: 100px; max-height: 100px;">'
    html += '</div><br>'
    html += '<div class="form-div-model-background">'
    html += '<div style="margin-left: 1%; margin-top: 5%;">'
    html += '<button type="button" onclick="updateImg(' + index + ')">'
    html += '<i class="fa-solid fa-upload"></i></button>'
    html += '<input type="file" id="avatar' + index + '" name="avatar' + index + '" accept="image/png, image/jpeg" /><br>'
    html += '<span style="visibility: visible; color: red;">Option not implemented at the moment</span>'
    html += '</div></div><br>'
    html += '<div class="form-div-model-background">'
    html += '<label for="model" class="form-label" style="margin-left: 1%">Coment:</label><br>'
    html += '<textarea id="modalEdit' + index + '" placeholder="Enter model" class="form-text-coment"> </textarea>'
    html += '</div></div></form></div></div></div>'
    html += '<div class="modal-footer"><button type="button" onclick="updateNewContent(' + index + ')" class="btn btn-primary">Save changes</button>'
    html += '</div></div></div></div>'

    html += '<!-- Modal Show content-->'
    html += '<div class="modal fade" id="ModelShow' + index + '" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'
    html += '<div class="modal-dialog"><div class="modal-content">'
    html += '<div class="modal-header">'
    html += '<h5 class="modal-title" id="exampleModalLabel">Show content</h5>'
    html += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
    html += '</div><div class="modal-body"><div>'
    html += '<div class="form-div-model-background">'
    html += '<p style="margin-left: 5px; ">' + user + '</p></div>'
    html += '<div style="justify-content: center; align-items: center; display: flex;">'
    html += '<img id="modelContentImg' + index + '" src="' + img + '" alt="" style="max-width: 90%;"></div><br>'
    html += '<div class="form-div-model-background">'
    html += '<h6 style="margin-left: 5px;">Coment:</h6>'
    html += '<p style="margin-left: 5px;" id="modalContentDescription' + index + '">' + coment + '</p>'
    html += '</div></div></div></div></div></div></div>'

    allPanels = allPanels + html;
}