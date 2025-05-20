let counter = document.querySelector(".wonderhoy_counter");
const linkContainer = document.querySelector(".links_popup");
const sfxButtonOn = document.querySelector(".sfx-on");
const sfxButtonOff = document.querySelector(".sfx-off");
const tutorialFade = document.querySelector(".tutorial");
const addedScore = document.querySelector(".added");
const stampAnimate = document.querySelector(".stamp");

const clickHereDisplay = document.getElementById("emu_click_below");
const emuWonderhoyDisplay = document.getElementById("emu_wonderhoy_stamp");

let linkToggled = true;
let sfxToggled = true;
let tutorialStatus = true;
let jumpReset = true;

var emu_wonder = document.getElementById("emu_wonderhoy");
var emu_hello = document.getElementById("emu_hello");


function toggleSFX(){
    function sfxOnIndicator(){
      emu_hello.currentTime = 0;
      emu_hello.play();
        }
    function sfxOffIndicator(){
      emu_hello.currentTime = 0;
      emu_hello.pause();
        }
    if (sfxToggled){
        sfxToggled = false;
        sfxButtonOn.style.display = "none";
        sfxButtonOff.style.display = "inline";
        sfxOffIndicator();
    }
    else{
        sfxToggled = true;
        sfxButtonOn.style.display = "inline";
        sfxButtonOff.style.display = "none";
        sfxOnIndicator();
    }
}

function cantJumpReset(){
    jumpReset = false;
}
function canJumpReset(){
    jumpReset = true;
}

function initiateAnimation(){
    stampAnimate.style.animation = "0.3s linear 0s jump";
}
function resetAnimation(){
    stampAnimate.style.animation = "";
}

function added_function(){
    addedScore.style.display = "absolute";
    addedScore.style.animation = "score_add 2s ease-out forwards";
}

function wonderhoy(){
    clickHereDisplay.style.display = "none";
    emuWonderhoyDisplay.style.display = "flex";
    initiateAnimation(); /*needs fixing*/
    setTimeout(resetAnimation, 300); 
    counter.textContent = parseFloat(counter.textContent) + 1;
    added_function();
    if (sfxToggled){
function playAudio(){
        emu_wonder.currentTime = 0;
        emu_wonder.play(); 
        }
    }
playAudio();

function tutorialgone(){
        tutorialFade.style.animation = "3s linear 0s forwards fade";
        tutorialFade.style.cursor = "default";
        }

function tutorial2(){
tutorialFade.textContent = "Wonderhoy more to get more boosts and themes from the shop!";
}

function tutorial3(){
tutorialFade.textContent = "Enjoy!";
}

function tutoFade(){
    if (counter.textContent > 30 && tutorialStatus){
    tutorialStatus = false;
    tutorial2();
    setTimeout(tutorial3, 10000);
    setTimeout(tutorialgone, 15000);
    }
}
tutoFade();
}


 
function linksClick(){
if(linkToggled){
    linkContainer.style.display = "grid";
    linkToggled = false;
}
else{
    linkContainer.style.display = "none";
    linkToggled = true;
}
}


