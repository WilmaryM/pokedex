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

//  Asegurarnos de que nuestro código empiece a correr cuando todos los elementos del DOM estén cargados.

document.addEventListener("DOMContentLoaded", async () => {
    // Referenciar selectores en HTML
    const pokemonsWrapper = document.querySelector(".pokemons");
    const currentWrapper = document.querySelector(".pokemos_wrapper"); // Tienes este elemento en el HTML.
    currentWrapper.remove();
  
    // Llamar el API y conseguir los pokémons
    const network = await fetch(
      "https://pokeapi.co/api/v2/pokemon/"
    );
    const data = await network.json();
  
    // Ahora sí, fijate en la consola.
    console.log("Resultado de la API", data);
  
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
  
      const pokemonType = singlePokemon.querySelector(".pokemos_type");
      pokemonType.textContent = pokemonDetails.types[0].type.name;
      console.log(pokemonDetails); 

     const pokemonId = singlePokemon.querySelector('.pokemon_id-dsc');
    pokemonId.textContent = pokemonDetails.id;
  
    const PokemonExp = singlePokemon.querySelector('.pokemos_exp');
    PokemonExp.textContent = pokemonDetails.base_experience;
  
     

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
  