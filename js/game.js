inicial();

function inicial(){
        const CHARACTER = document.getElementById("div-character");


     
}

 mov=10;
charImg=0;


function display(event) {
        const CHARACTER = document.getElementById("div-character");

        X = event.clientX;
      //  console.log(X);
        CHARACTER.style.position="relative";
        CHARACTER.style.left=event.clientX +"px";
       // console.log(X);

                if(charImg<10){
                        document.getElementById("img-character").src="img/game/walking/Chara_BlueWalk0000"+charImg+".png";
                }

                else{document.getElementById("img-character").src="img/game/walking/Chara_BlueWalk000"+charImg+".png"}
                        charImg++;
                        if (charImg>=19) {
                        charImg=0;   
                }
      

        
}




var last_known_scroll_position = 0;
var ticking = false;
var pro;


function doSomething(scroll_pos) {
        const FONDO = document.getElementById("fondo-id");
        const CHARACTER = document.getElementById("div-character");

        FONDO.style.position="relative";

        FONDO.style.top=mov+"px";
        console.log("salto");
        console.log(-mov);
        mov=+mov+10;
        document.getElementById("img-character").src="img/game/Chara - BlueIdle00000.png";
                  
}


window.addEventListener("wheel", function (e) {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
          });
        }
     

        ticking = true;
});