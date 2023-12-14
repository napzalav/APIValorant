// * DOM Selector
const containerCards = document.getElementById('containerCards');

// * Filtrando personajes disponibles.
const { data } = personajes;
const personajesJugables = data.filter( personaje => personaje.isPlayableCharacter );

// * Creando nuestro objeto de personaje con la data obtenida
const nuevoPersonaje = personajesJugables.map(personaje => {
    let agente = {};
    agente.name = personaje.displayName;
    agente.description = personaje.description;
    agente.smallImage = personaje.displayIconSmall;
    agente.portrait = personaje.fullPortrait;
    agente.background = personaje.background;
    agente.role = personaje.role.displayName;
    agente._id = personaje.uuid;

    return agente;
})

// * URLSearchParams
const quearySearch = document.location.search;
//console.log(quearySearch);
// const params = new URLSearchParams(quearySearch);
// console.log(params);
// const id2 = params.get("id");
// console.log(id2);
const id = new URLSearchParams(quearySearch).get("id");
//console.log(id);

if (id) {
    const personaje = nuevoPersonaje.find(personaje => personaje._id === id);
    if (personaje) {
        crearCard(personaje, containerCards);
    } else {
        console.error("Personaje no encontrado");
    }
} else {
    console.error("ID no proporcionado en la URL");
}

// * Creacion de card

const personaje = nuevoPersonaje.find(personaje => personaje._id === id);

function crearCard(personaje, contenedor) {

    if (!personaje) {
        contenedor.innerHTML = '<p>Personaje no encontrado</p>';
        return;
    }

    const { name, description, portrait, background, role } = personaje;

    contenedor.innerHTML = `
    <div class="card mb-3 generated-card bg-danger" style="min-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${background}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h1 class="card-title">${name}</h1>
                    <h5 class="card-subtitle">Rol: ${role}</h5>
                    <p class="card-text">${description}</p>
                    <img src="${portrait}" class="img-fluid rounded-start" alt="...">
                </div>
            </div>
        </div>
    </div>
    `;
}

crearCard(personaje, containerCards);