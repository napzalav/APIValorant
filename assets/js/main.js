//console.log( personajes );

// * DOM Selector
const contenedor = document.querySelector("#contenedor");

// * Filtrando personajes disponibles.
const { data } = personajes;
const personajesJugables = personajes.data.filter(
  (personaje) => personaje.isPlayableCharacter
);

console.log(personajesJugables);

// * Creando nuestro objeto de personaje con la data obtenida
const personajeNuevo = personajesJugables.map((personaje) => ({
  name: personaje.displayName,
  image: personaje.displayIconSmall,
  portrait: personaje.fullPortrait,
  id: personaje.uuid,
}));

console.log(personajeNuevo);

// * Creacion de tarjeta
function crearCards(personajesArray) {
  let cardsHtml = "";

  personajesArray.forEach((caracteristicas) => {
    let { image, name, id } = caracteristicas;

    cardsHtml += `
        <div class="card text-center bg-danger-subtle" style="width: 18rem; min-height: 18rem">
            <a href="./details.html?id=${id}" class="text-decoration-none item">
                <img class="card-img-top" src="${image}" alt="Imagen de ${name}">
                <h4 class="card-title text-black">${name}</h4>
            </a>
        </div>
        `;
  });

  return cardsHtml;
}

// * Colocando la informacion impresa en nuestro HTML
const cards = crearCards(personajeNuevo);
contenedor.innerHTML = cards;
