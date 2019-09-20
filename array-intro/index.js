
const filmContainer = document.querySelector("#filmContainer");

const benhur = {
    tittel: "Ben Hur",
    aar: 1958,
    director: "Stanley Kubrick"
}

const et = {
    tittel: "ET",
    aar: 1980,
    director: "Steven Spielberg"
}

const sharknado = {
    tittel: "Sharknado",
    aar: 2010,
    director: "Anthony Ferrante"
}

const filmer = [benhur, et, sharknado];
console.log(filmer);

for(const film of filmer) {
    filmContainer.innerHTML += `
        <article>
            <h2>${film.tittel}</h2>
            <p>Directed by ${film.director}</p>
            <p>Released: ${film.aar}</p>
        </article>
    `;
}



