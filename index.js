let counter = document.querySelector(".wonderhoy_counter");
const linkContainer = document.querySelector(".links_popup");
const sfxButtonOn = document.querySelector(".sfx-on");
const sfxButtonOff = document.querySelector(".sfx-off");
const tutorialFade = document.querySelector(".tutorial");
const addedScore = document.querySelector(".added");
const stampAnimate = document.querySelector(".stamp");
const upgradeIntro = document.querySelector(".upgrade");

const clickHereDisplay = document.getElementById("emu_click_below");
const emuWonderhoyDisplay = document.getElementById("emu_wonderhoy_stamp");
const emuWonderhoyDisplay2 = document.getElementById("emu_wonderhoy_stamp2");
const emuWonderhoyDisplay3 = document.getElementById("emu_wonderhoy_stamp3");
const emuWonderhoyDisplay4 = document.getElementById("emu_wonderhoy_stamp4");
const emuWonderhoyDisplay5 = document.getElementById("emu_wonderhoy_stamp5");


let linkToggled = true;
let sfxToggled = true;
let tutorialStatus = true;
let jumpReset = true;
let plus_wonderhoy = 1;

let randomStamp;

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
    randomStamp = Math.floor(Math.random() * 5) + 1;
    clickHereDisplay.style.display = "none";
    switch(randomStamp){
        case 1:
           emuWonderhoyDisplay.style.display = "flex";
           emuWonderhoyDisplay2.style.display = "none";
           emuWonderhoyDisplay3.style.display = "none";
           emuWonderhoyDisplay4.style.display = "none";
           emuWonderhoyDisplay5.style.display = "none";
           break;
        case 2:
            emuWonderhoyDisplay.style.display = "none";
            emuWonderhoyDisplay2.style.display = "flex";
            emuWonderhoyDisplay3.style.display = "none";
            emuWonderhoyDisplay4.style.display = "none";
            emuWonderhoyDisplay5.style.display = "none";
            break;  
        case 3:
            emuWonderhoyDisplay.style.display = "none";
            emuWonderhoyDisplay2.style.display = "none";
            emuWonderhoyDisplay3.style.display = "flex";
            emuWonderhoyDisplay4.style.display = "none";
            emuWonderhoyDisplay5.style.display = "none";
            break;
        case 4:
            emuWonderhoyDisplay.style.display = "none";
            emuWonderhoyDisplay2.style.display = "none";
            emuWonderhoyDisplay3.style.display = "none";
            emuWonderhoyDisplay4.style.display = "flex";
            emuWonderhoyDisplay5.style.display = "none";
            break;
        case 5:
            emuWonderhoyDisplay.style.display = "none";
            emuWonderhoyDisplay2.style.display = "none";
            emuWonderhoyDisplay3.style.display = "none";
            emuWonderhoyDisplay4.style.display = "none";
            emuWonderhoyDisplay5.style.display = "flex";
            break;
    }
    initiateAnimation(); /*needs fixing*/
    setTimeout(resetAnimation, 300); 
    counter.textContent = parseFloat(counter.textContent) + plus_wonderhoy;
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

function tutorial3(){
tutorialFade.textContent = "More Wonderhoys = More Boosts and Themes! That should be it for now, enjoy!";
}

function tutoFade(){
    if (counter.textContent >= 10 && tutorialStatus){
    const plus1 = document.createElement('div');
    plus1.className = "upgrade plus1";
    
    tutorialStatus = false; 
    tutorialFade.textContent = "A boost just appeared! Buy it!"; //Add animation
    

    plus1.innerHTML = `
        <img src="images/plus1_wonderhoy.png" alt="+1 Wonderhoy">
        <div class="upgrade-content">
          <p class="upgrade-name">Extra Wonderhoy!</p>
          <p class="upgrade-desc">+1 Wonderhoy every click</p>
          <p class="upgrade-cost">Wonderhoy cost: 10</p>
        </div>
    `;

plus1.onclick = function (){


plus_wonderhoy = 2;
tutorialFade.textContent = "Great! Now that's more Wonderhoys per click!"
setTimeout(tutorial3, 10000);
setTimeout(tutorialgone, 15000);

const plus1outro = document.querySelector(".upgrade");
plus1outro.style.animation = "upgrade_outro 0.25s ease-out";

setTimeout(() => plus1.remove(), 250);

}
    document.querySelector(".upgrade-list").appendChild(plus1);


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


