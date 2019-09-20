
const inpNavn = document.querySelector("#inpNavn");
const outNavn = document.getElementById("outNavn");

function visNavn() {
    outNavn.innerHTML = inpNavn.value;
}

// inpNavn.oninput = visNavn;
inpNavn.addEventListener("input", visNavn);

