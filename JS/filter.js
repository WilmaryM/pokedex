// Acá te dejaré algunos apuntes para que tengas en mente.
/*
 * Escribir comentarios de esta forma -antes de escribir el código- te ayudará a situarte mejor.
 * Implementa los siguientes pasos:
 * 1. Referenciar el script en el HTML
 * 2. Inicializar el script tan pronto cargue
 * 3. Llamar el API y conseguir los Pokémons
 * 4. Cargar el HTML con la data recibida de Pokémons
 * 5. Inicializar filtros (inputs, eventos, etc)
 * 6. Crear lógica de filtros y conectarlo a los inputs
 */

//  Asegurarnos de que nuestro código empiece a correr cuando
// todos los elementos del DOM estén cargados.

let results = []; //varible global
document.addEventListener("DOMContentLoaded", async () => {
    // Referenciar selectores en HTML
    const pokemonsWrapper = document.querySelector(".pokemons");
    const currentWrapper = document.querySelector(".pokemos_wrapper"); // Tienes este elemento en el HTML.
    currentWrapper.remove();

    // Llamar el API y conseguir los pokémons
    const network = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
    );
    const data = await network.json();


    this.results = data.results;
    data.results.forEach(async (pokemon) => {
        // Clonar / Agregar elementos dentro de un array por cada pokemon
        const singlePokemon = currentWrapper.cloneNode(true);

        // Agregar información de este pokemon
        const pokemonName = singlePokemon.querySelector(".pokemos_name");
        pokemonName.textContent = pokemon.name;

        // Conseguir datos específicos de este pokemon.
        const pokemonDetails = await getPokemonDetails(pokemon.url);

        const pokemonImage = singlePokemon.querySelector("img");
        pokemonImage.src = pokemonDetails.sprites.front_default;

        const pokemonId = singlePokemon.querySelector(".pokemon_id-dsc");
        pokemonId.textContent = pokemonDetails.id;

        const PokemonExp = singlePokemon.querySelector(".pokemos_exp");
        PokemonExp.textContent = pokemonDetails.base_experience;

        const pokemonType = singlePokemon.querySelector(".pokemos_type");
        pokemonType.textContent = pokemonDetails.types[0].type.name;
        pokemonType.id = pokemonDetails.types[0].type.name;

        pokemonsWrapper.append(singlePokemon);
    });
});

// Esta funcion consigue los detalles del pokemon, recibe una URL.
const getPokemonDetails = async (url) => {
    const network = await fetch(url);
    const data = await network.json();

    return data;
};


//intento #6
const input = document.getElementById("searchBox");
input.addEventListener("keyup", () => {
    let filter = input.value;
    const currentWrapper = document.querySelectorAll(".pokemos_wrapper");

    currentWrapper.forEach((element) => {
        let names = document.querySelectorAll(".pokemos_name");

        names.forEach((name, index) => {
            if (name.textContent.includes(filter)) {
                currentWrapper[index].classList.add("activo");
            } else {
                currentWrapper[index].classList.remove("activo");
            }
        });
    });
});

//intento#3
const filtertypepoke = document.getElementsByClassName("filter_type");

//loop para agregarle un evento a cada elemento
for (let i = 0; i < filtertypepoke.length; i++) {
    filtertypepoke[i].addEventListener("click", filtrarPorTipo);
}

function filtrarPorTipo(evento) {
    let filterbytype = evento.srcElement.id;
    const currentWrapper = document.querySelectorAll(".pokemos_wrapper");

    currentWrapper.forEach((element) => {
        let types = document.querySelectorAll(".pokemos_type");

        types.forEach((type, index) => {
            if (type.textContent == filterbytype) {
                currentWrapper[index].classList.add("activo");
            } else {
                currentWrapper[index].classList.remove("activo");
            }
        });
    });
};
