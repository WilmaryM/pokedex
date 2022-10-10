
// si funciona correctamente la api
const options = {
     method: 'GET',
     Headers:{
}
};
fetch('https://pokeapi.co/api/v2/', options)
    .then(res =>  {
        return res.json();
    })
    .then(res => console.log(res))
    .catch(error => console.log('Error'))




    // searh pokemon 
    
const form = document.querySelector('#formulario_busqueda')
 const input = document.querySelector("#name")

    function consultaPokemon(id, num){
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((res) => {
        res.json()
            .then(function (pokemon) {
             crearPokemon(pokemon)
            });
    });
    };
    consultaPokemon(2)


    function busarPokeones() {
        let buscar = Math.round(Math.random() * 150)
        
        consultaPokemon(buscar, 1)
    }
    busarPokeones()

    function crearPokemon(pokemon, num) {
        let item = busqueda.querySelector(`name${num}`)
    }
crearPokemon()


// let normal = document.getElementById("normal")
// let grass = document.getElementById("grass")
// let bug = document.getElementById("bug")
// let water = document.getElementById("water")
// let fire = document.getElementById("Fire")
// let fight = document.getElementById("Fighting")
// let ele = document.getElementById("Electric")
// let rock = document.getElementById("Rock")
// let poison = document.getElementById("poison")
// let ghost = document.getElementById("ghost")
// let pysc = document.getElementById("pyschic")
// let ground = document.getElementById("ground")
// let fai = document.getElementById("fairy")
// let dra = document.getElementById("dragon")
// let ice = document.getElementById("ice")
// let rest = document.getElementById("rest")

    
