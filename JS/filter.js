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

  // Ahora sí, fijate en la consola.
  console.log("Resultado de la API", data);

  this.results = data.results;
  data.results.forEach(async (pokemon) => {
    // Clonar / Agregar elementos dentro de un array por cada pokemon
    console.log(pokemon.name + " - " + pokemon.url);
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
    console.log(pokemonDetails);

    pokemonsWrapper.append(singlePokemon);
  });
});

// Esta funcion consigue los detalles del pokemon, recibe una URL.
const getPokemonDetails = async (url) => {
  const network = await fetch(url);
  const data = await network.json();

  return data;
};

//  Arrays 101
const dataTypes = ["arena", "agua", "fuego", "electricidad"];
// Cómo consigues el valor 'fuego'?
const fire = dataTypes[2];
console.log(fire);

//------------------------------------------------------------------------------
// filtersearch
//  document.addEventListener("DOMContentLoaded", async () => {
// const buscar = document.querySelector(".buscar");
// const input = document.querySelector("input");
//  input.remove();
//    const network = await fetch("pokemons");
// const data = await network("pokemons");
//   console.log("Resultados", data);});

// document.getElementById('inputsearch').addEventListener("keyup, buscador_interno")
// function buscador_interno() {

//   let filter = input.value.toUpperCase();
//   let busqueda = buscar.getElementsByTagName(".pokemons");

//   for (let i = 0; i < busqueda.length; i++) {
//     let a = busqueda[i].getElementsByTagName("div")[0];
//     let textValue = a.textContent || a.innerText;

//     if (textValue.toUpperCase().indexOf(filter)) {
//       busqueda[i].style.display = "";

//       }
//       }
//       }
//------------------------------------------------------------------------------

// segundo intento

// function myfunction() {
//   var x = document.getElementById(".formulario_busqueda");
//   // var text = "";
//   // for (let i = 0; i < x.length; i++) {
//   //   text += x.elements[i].value;
//   // }
//   // document.getElementById(".pokemons").innerHTML = text;

//   x.addEventListener("submit", (e) => {
//     if (!e.target(".formulario_busqueda")) return false;
//     e.preventDefault();
//   });
// }
// myfunction();

//------------------------------------------------------------------------------

//tercer intento
// const pokearray = ["name: bulbasaur"];
// // pokearray.push("pikachu");
// //["name"];(intente con este pero da un error enorme)
// // for in (no funciono)
// // for( pokearray in document.network){
// console.log(pokearray);
// // }

// for (let i = 0; i < pokearray.length; i++) {
//   console.log(pokearray);
// }
//------------------------------------------------------------------------------

//searchBox cuatro intento
// const input = document.querySelector("#searchBox");
// const poke = document.querySelector(".pokemos_name");
// input.addEventListener("input", updateValue);
// // ahora debido a los nuevos codigos de (for), esta funcion da error ¿como resolverlo?,
// //for esta sin utilizar y continua el error
// function updateValue(e) {
//   poke.textContent = e.pokemonDetails.pokearray; // aqui esta el error porque "name" no esta definido
// }

//------------------------------------------------------------------------------

// intento #5
// document.(DOMContentLoaded((async) => {
// const input = document.getElementById("searchBox");
// // input.remove();
// input.addEventListener("keyup", () => {
//   let filter = input.value;

//   let data = this.results.filter((x) =>
//     x.name.toLowerCase().includes(filter.toLowerCase())
//   );
//   console.log(data);
// ahora tenemos el problemita de que el usuario no ve estos datos ¿como podemos hacerlo?

//------------------------------------------------------------------------------

//intento #6
const input = document.getElementById("searchBox");
input.addEventListener("keyup", () => {
  let filter = input.value;
  const currentWrapper = document.querySelectorAll(".pokemos_wrapper");

  currentWrapper.forEach((element) => {
    let names = document.querySelectorAll(".pokemos_name");

    names.forEach((name, index) => {
      if (name.textContent.includes(filter)) {
        currentWrapper[index].classList.add("active");
      } else {
        currentWrapper[index].classList.remove("active");
      }
    });
  });
});

//------------------------------------------------------------------------------
//filtrar por tipo #1
// export function getType() {
//   //funion para llamar type en la api
//   const filtrarPokemon = document.querySelectorAll(".filter_type-wrraper");
//   filtrarPokemon.remove();
//   const filtrar = (elTipo) => {
//     console.log(elTipo);
//   };
// }

//intento#2
// function borrar() {
//   document.getElementById("borrar").reset();
// }
// borrar();

// document.querySelectorAll(".filter_type-wrraper");
// (tipos.map(tipo)=>{
//   return(
//     <button onClick={()=> filtrar(tipo.name)}>
//       {tipo.name}
//   )
// })

//intento#3
const filtertypepoke = document.querySelectorAll(".filter_type");
filtertypepoke.addEventListener("click", () => {
  // acá hay un error que dice que esto no es una funcion.
  let filterbytype = filtertypepoke.value;
  const currentWrapper = document.querySelectorAll(".filter_type-wrraper");

  currentWrapper.forEach((element) => {
    let types = document.querySelectorAll(".pokemos_type");

    types.forEach((type, index) => {
      if (type.textContent.some(filterbytype.name)) {
        currentWrapper[index].classList.add("activo");
      } else {
        currentWrapper[index].classList.remove("activo");
      }
    });
  });
});
