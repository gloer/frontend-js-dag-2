
// Refere til poeng-teksten
const txtKlikk = document.querySelector("#txtKlikk");
let antall = 0;

function tellOpp() {
    antall++; // Øker antall med 1
    txtKlikk.innerText = antall;
    txtKlikk.style.fontSize = antall + "px";
}

document.addEventListener("mousemove", tellOpp);