let counter = document.querySelector(".wonderhoy_counter");
const linkContainer = document.querySelector(".links_popup");
const sfxButtonOn = document.querySelector(".sfx-on");
const sfxButtonOff = document.querySelector(".sfx-off")
let linkToggled = true;
let sfxToggled = true;


var emu_wonder = document.getElementById("emu_wonderhoy");

function toggleSFX(){
    if (sfxToggled){
        sfxToggled = false;
        sfxButtonOn.style.display = "none";
        sfxButtonOff.style.display = "inline";
        
    }
    else{
        sfxToggled = true;
        sfxButtonOn.style.display = "inline";
        sfxButtonOff.style.display = "none";
    }
}

function wonderhoy(){
    counter.innerHTML = parseFloat(counter.innerHTML) + 1;
    if (sfxToggled){
function playAudio(){
        emu_wonder.currentTime = 0;
        emu_wonder.play(); 
        }
    }
playAudio();
}

function linksClick(){
if(linkToggled){
    linkContainer.style.display = "inline";
    linkToggled = false;
}
else{
    linkContainer.style.display = "none";
    linkToggled = true;
}
}

